from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def home():
    return 'Essa é uma API desenvolvida para fins de estudo!'


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT', default=5000))
