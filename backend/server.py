from flask import Flask, request, Response, jsonify
import os
from modules.fire_manager import db, auth
import modules.fire_manager as fire
from modules.cors import allow_cors
import json

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

@app.route('/new-user', methods=['POST', 'OPTIONS'])
@allow_cors
def new_user():
    res = Response()
    if request.method == 'POST':
        data = request.get_json()
        try:
            fire.new_user(data['email'], data['password'], data['username'], data['name'])
        except Exception as e:
            return res.set_data({'error': e.message})
        res.set_data()
    return res

@app.route('/my-profile', methods=['POST', 'OPTIONS'])
@allow_cors
def my_profile():
    res = Response()
    if request.method == 'POST':
        try:
            uid = fire.validate_user_token()
            fire.my_profile(uid)
        except Exception as e:
            res.set_data({'error': e.message})
    return res

@app.route('/new-post', methods=['POST', 'OPTIONS'])
@allow_cors
def new_post():
    res = Response()
    if request.method == 'POST':
        data = request.get_json()
        try:
            uid = fire.validate_user_token(data['id_token'])
            res.set_data(fire.new_post(uid, data[id, 'content']))
        except Exception as e:
            res.set_data({'error': e.message})
    return res


@app.route('/get-posts', methods=['GET', 'OPTIONS'])
def get_posts():
    res = Response()
    if request.method == 'GET':
        try:
            posts = json.dumps({'posts': fire.get_posts()}, default=str)
            res.set_data(posts)
        except Exception as e:
            raise e
    return res
    

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT', default=5000))
