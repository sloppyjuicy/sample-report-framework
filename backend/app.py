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
    from scheduleapp.scheduler import scheduler
    mongodb.init_app(app)
    # scheduler.init_app(app)
    scheduler.start()
    from scheduleapp import scheduleapp
    app.register_blueprint(scheduleapp, url_prefix='/')
    return app