import firebase_admin as admin
from firebase_admin import firestore, auth
import os

firebase_credentials = {
  "type": "service_account",
  "project_id": "miniblog-projeto",
  "private_key_id": os.environ['FB_ADMIN_PRIVATE_KEY_ID'],
  "private_key": os.environ['FB_ADMIN_PRIVATE_KEY'].replace(r'\n', '\n').replace(r'"', ''),
  "client_email": os.environ['FB_ADMIN_CLIENT_EMAIL'],
  "client_id": os.environ['FB_ADMIN_CLIENT_ID'],
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": os.environ['FB_ADMIN_AUTH_PROVIDER'],
  "client_x509_cert_url": os.environ['FB_ADMIN_CLIENT_CERT_URL']
}


cred = admin.credentials.Certificate(firebase_credentials)
admin.initialize_app(credential=cred)

db = firestore.client()
auth = auth

if __name__ == '__main__':
    print(firebase_credentials["private_key"])
