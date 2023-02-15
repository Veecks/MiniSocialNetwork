from flask import Response, request

allowed = ['http://localhost:5173', 'https://minisnw.up.railway.app']



def allow_cors(route):
    def wrapper(*args, **kwargs):
        origin = request.origin if request.origin in allowed else ''
        headers = {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Headers': '*',
            }
        res = route(*args, **kwargs)
        if not res:
            res = ({}, 200)
        return res[0], res[1], headers
    wrapper.__name__ = route.__name__
    return wrapper