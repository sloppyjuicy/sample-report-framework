from flask import Flask
from flask_restful import Api
from flask_cors import CORS
# from config import Config

from flask_restful import Resource, abort

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

class testResource(Resource):

    def get(self):
        return {"Hello": "World"}

api.add_resource(testResource, '/')