import Schedule from './Schedule'

const Schedules = ({ schedules, onDelete}) => {
    console.log(schedules)
    return (
        <>
            {schedules.map((schedule) => (
                <Schedule key={schedule.id} schedule={schedule} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Schedules
