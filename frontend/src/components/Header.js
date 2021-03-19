import Button from './Button'

export const Header = ({ onAdd, showAdd }) => {
    return (
        <div className="header">
            <h2>Report Scheduler App</h2>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </div>
    )
}

export default Header