from flask import Blueprint
from flask_restful import Api
from flask_cors import CORS

scheduleapp = Blueprint('scheduleapp', __name__)
CORS(scheduleapp, resources={r"*": {"origins": "*"}})
scheduleapi = Api(scheduleapp)

from scheduleapp import urls