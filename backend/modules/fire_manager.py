import firebase_admin as admin
from firebase_admin import firestore, auth
import os, json


firebase_credentials = {
  "type": "service_account",
  "project_id": "miniblog-projeto",
  "private_key_id": os.environ['FB_ADMIN_PRIVATE_KEY_ID'].replace('"', ''),
  "private_key": os.environ['FB_ADMIN_PRIVATE_KEY'].replace(r'\n', '\n').replace('"', ''),
  "client_email": os.environ['FB_ADMIN_CLIENT_EMAIL'].replace('"', ''),
  "client_id": os.environ['FB_ADMIN_CLIENT_ID'].replace('"', ''),
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": os.environ['FB_ADMIN_AUTH_PROVIDER'].replace('"', ''),
  "client_x509_cert_url": os.environ['FB_ADMIN_CLIENT_CERT_URL'].replace('"', ''),
}


cred = admin.credentials.Certificate(firebase_credentials)
app = admin.initialize_app(cred)
db = firestore.client()


def validate_user_token(id_token) -> str:
  try:
    usr = auth.verify_id_token(id_token)
  except Exception as e:
    raise e
  return usr['uid']


def new_user(email, password, username, name):
  try:
    usr: auth.UserRecord = auth.create_user(email=email, password=password)
  except Exception as e:
    raise e
    
  try:
    db.collection('users').document(usr.uid).set({
      'email': email,
      'username': username,
      'name': name,
    })
  except Exception as e:
    auth.delete_user(usr.uid)
    raise e


def my_profile(uid):
  usr = db.collection('users').document(uid)
  if usr.exists:
    return usr.to_dict() 
  else:
    raise Exception('user not found')


def new_post(uid, content):
  owner_ref = db.collection('users').document(uid)
  owner_data = owner_ref.get().to_dict()
  if(type(content) is not str or content == ''):
    raise ValueError('A publicação não pode ser vazia!')
  post = {
    'content': content,
    'owner_name': owner_data['name'],
    'owner_username': owner_data['username'],
    'created_at': firestore.SERVER_TIMESTAMP,
  }
  try:
    post_ref = db.collection('posts').document()
    post_ref.set(post)
    owner_ref.update({'posts': firestore.ArrayUnion([post_ref])})
  except Exception as e:
    raise e
  return post


def get_posts():
  try:
    query_ref = db.collection('posts').order_by('created_at', direction='DESCENDING').stream()
    posts = [post.to_dict() for post in query_ref]
      
    return posts
  except Exception as e:
    raise e
  

if __name__ == '__main__':
    # testing uid: akNja7HOFKWrpIFANoufPoQsffo2
    tuid = 'akNja7HOFKWrpIFANoufPoQsffo2'
    # new_post(tuid, 'Esse é meu terceiro post!')
    print()
