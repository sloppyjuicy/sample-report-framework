
from flask import request, jsonify
from flask_restful import Resource, abort
from mongo import mongodb
from bson import json_util
from bson.objectid import ObjectId
import json

def parse_json(data):
    return json.loads(json_util.dumps(data))


class Schedules(Resource):

    def get(self):

        records = parse_json(list(mongodb.db.schedules.find()))
        for record in records:
            record["id"] = record['_id']['$oid']
        return records
    
    def post(self):
        request_body = request.json

        schedule = mongodb.db.schedules.insert_one({
            "name": request_body['name'],
            "time": request_body['time'],
            "recipient_name": request_body['recipient_name'],
            "recipient_email": request_body['recipient_email']
        })
        print(schedule.inserted_id)
        return {'id': str(schedule.inserted_id)}
    
    def delete(self):
        request_body = request.json
        schedule_id = request_body["id"]
        mongodb.db.schedules.delete_one({'_id': ObjectId(schedule_id)})
    

# class Schedule(Resource):

#     def delete(self, schedule_id):
#         request_body = request.json
        
#         print(mongodb.db.schedules.find_one(schedule_id))