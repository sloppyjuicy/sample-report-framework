import { FaTimes } from 'react-icons/fa'

const Schedule = ({ schedule, onDelete }) => {
    // const schedule_time = (new Date(schedule["time"])).toTimeString()
    // console.log(schedule_time)
    // var dateStr =
    // ("00" + (schedule_time.getMonth() + 1)).slice(-2) + "/" +
    // ("00" + schedule_time.getDate()).slice(-2) + "/" +
    // schedule_time.getFullYear() + " " +
    // ("00" + schedule_time.getHours()).slice(-2) + ":" +
    // ("00" + schedule_time.getMinutes()).slice(-2) + ":" +
    // ("00" + schedule_time.getSeconds()).slice(-2);
    // console.log(dateStr);
    return (
        <div className="schedule">
            <h3>{schedule.name} <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(schedule.id)} /></h3>
            <p>Due on: {schedule.time}</p>
            <p>Requested by: {schedule.recipient_name}</p>
        </div>
    )
}

export default Schedule
