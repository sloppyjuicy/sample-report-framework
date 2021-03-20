from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.mongodb import MongoDBJobStore
from pymongo import MongoClient, collection
import logging


client = MongoClient("mongodb://127.0.0.1:27017/sample-report-framework")

jobstores = {
    'default': MongoDBJobStore(
        database="sample-report-framework",
        collection="jobs",
        client=client
    )
}
scheduler = BackgroundScheduler(jobstores=jobstores, daemon=True)
scheduler.start()

logging.basicConfig()
logging.getLogger('apscheduler').setLevel(logging.DEBUG)