from flask import Flask, request, Response
import os
from modules.fire_manager import db, auth
from modules.cors import allow_cors

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return 'Essa é uma API desenvolvida para fins de estudo!'

@app.route('/isauth', methods=['POST', 'OPTIONS'])
@allow_cors
def is_auth():
    if request.method == 'POST':
        data = request.get_json()
        id_token = data['id_token']
        try:
            decoded_token = auth.verify_id_token(id_token)
        except Exception as e:
            decoded_token = {'email': e}
        res = Response(f'Você se conectou com sucesso com o email: {decoded_token["email"]}')
        return res
    return Response()


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT', default=5000))
