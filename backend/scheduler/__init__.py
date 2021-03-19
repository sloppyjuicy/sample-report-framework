from flask import Blueprint
from flask_restful import Api
from flask_cors import CORS

scheduler = Blueprint('scheduler', __name__)
CORS(scheduler, resources={r"*": {"origins": "*"}})
schedulerAPI = Api(scheduler)

from scheduler import urls