import os
basedir = os.path.abspath(os.path.dirname(__file__))

# class Config():
#     """
#     The Config file.
#     """
DEBUG = True
ENV = 'development'
SECRET_KEY = 'this-is-a-secret-key'
MONGO_URI = "mongodb://127.0.0.1:27017/sample-report-framework"
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 465
MAIL_USE_SSL = True
MAIL_USERNAME =
MAIL_PASSWORD =