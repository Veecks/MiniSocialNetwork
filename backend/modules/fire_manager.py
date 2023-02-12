import firebase_admin as admin
from firebase_admin import firestore, auth
import os


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

def validate_user_token(id_token):
  try:
    usr = auth.verify_id_token(id_token)
  except Exception as e:
    raise e
  return auth.get_user(usr['uid'])

def new_user(email, password, username, name, ):
  try:
    usr = auth.create_user(email=email, password=password)
  except Exception as e:
    raise e
  return usr

if __name__ == '__main__':
    pass
