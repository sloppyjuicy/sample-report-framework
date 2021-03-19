import { FaTimes } from 'react-icons/fa'

const Schedule = ({ schedule, onDelete }) => {
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
