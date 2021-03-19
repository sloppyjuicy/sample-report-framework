from scheduler import schedulerAPI
from scheduler.resources import Schedules


schedulerAPI.add_resource(Schedules, '/')
# schedulerAPI.add_resource(Schedule, '/<str:schedule_id>')