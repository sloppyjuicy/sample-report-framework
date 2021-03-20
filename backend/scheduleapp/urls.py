from scheduleapp import scheduleapi
from scheduleapp.resources import Schedules


scheduleapi.add_resource(Schedules, '/')
# schedulerAPI.add_resource(Schedule, '/<str:schedule_id>')