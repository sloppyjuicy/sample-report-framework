from flask import Flask
# from flask_restful import Api
# from flask_cors import CORS
# from config import Config

def create_app(config_name):
    """
    Creates the application object
    """
    app = Flask(__name__)
    app.config.from_pyfile("config.py")
    from mongo import mongodb
    mongodb.init_app(app)

    from scheduler import scheduler
    app.register_blueprint(scheduler, url_prefix='/')
    return app