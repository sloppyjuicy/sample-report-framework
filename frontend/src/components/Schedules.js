import Schedule from './Schedule'

const Schedules = ({ schedules, onDelete}) => {
    return (
        <>
            {schedules.map((schedule) => (
                <Schedule key={schedule.id} schedule={schedule} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Schedules
