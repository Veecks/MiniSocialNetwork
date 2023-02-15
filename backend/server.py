from flask import Flask, request
import os
from modules.fire_manager import db, auth
import modules.fire_manager as fire
from modules.cors import allow_cors
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return 'Essa é uma API desenvolvida para fins de estudo!'

@app.route('/new-user', methods=['POST', 'OPTIONS'])
@allow_cors
def new_user():
    if request.method == 'POST':
        data = request.get_json()
        try:
            fire.new_user(data['email'], data['password'], data['username'], data['name'])
            return {}, 200
        except Exception as e:
            return {'error': str(e)}, 400

@app.route('/my-profile', methods=['POST', 'OPTIONS'])
@allow_cors
def my_profile():
    if request.method == 'POST':
        try:
            uid = fire.validate_user_token()
            fire.my_profile(uid)
            return {}, 200
        except Exception as e:
            return {'error': e.message}, 400

@app.route('/new-post', methods=['POST', 'OPTIONS'])
@allow_cors
def new_post():
    if request.method == 'POST':
        data = request.get_json()
        try:
            uid = fire.validate_user_token(request.headers.get('Authorization'))
            post = json.dumps({'post': fire.new_post(uid, data.get('content'))}, default=str)
            return post, 200
        except Exception as e:
            return {'error': str(e)}, 400


@app.route('/get-posts', methods=['GET', 'OPTIONS'])
@allow_cors
def get_posts():
    if request.method == 'GET':
        try:
            posts = json.dumps({'posts': fire.get_posts()}, default=str)
            return posts, 200
        except Exception as e:
            return str(e), 400
    

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT', default=5000))
