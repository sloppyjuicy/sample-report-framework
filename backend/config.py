import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config():
    """
    The Config file.
    """
    DEBUG = True
    ENV = 'development'
    SECRET_KEY = 'this-is-a-secret-key'
    # SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:New@2020@localhost/soundfields'