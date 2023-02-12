from flask import request

allowed = ['http://localhost:5173', 'https://minisnw.up.railway.app']



def allow_cors(route):
    def wrapper(*args, **kwargs):
        origin = request.origin if request.origin in allowed else ''
        res = route(*args, **kwargs)
        res.headers['Access-Control-Allow-Origin'] = origin
        res.headers['Access-Control-Allow-Headers'] = '*'
        return res
    wrapper.__name__ = route.__name__
    return wrapper