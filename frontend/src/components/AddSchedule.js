import { useState } from 'react'


const AddSchedule = ({ onAdd }) => {
    
    const [ name, setName ] = useState('');
    const [ time, setTime ] = useState('');
    const [ recipient_name, setRecipientName ] = useState('');
    const [ recipient_email, setRecipientEmail ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            alert("Please add a report name");
            return;
        }
        if(!recipient_name) {
            alert("Please add a recipient");
            return;
        }
        if(!recipient_email) {
            alert("Please add an email id");
            return;
        }
        console.log(Date.now());
        onAdd({ name, time, recipient_name, recipient_email })

        setName('')
        setTime('')
        setRecipientName('')
        setRecipientEmail('')
    }


    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Recipient </label>
                <input type="text" placeholder="Add Report Name" 
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Scheduled Time</label>
                <input type="text" placeholder="Select time for this report." 
                value={time} onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Recipient </label>
                <input type="text" placeholder="Add Recipient Name" 
                value={recipient_name} onChange={(e) => setRecipientName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Recipient email id </label>
                <input type="email" placeholder="Add Recipient email" 
                value={recipient_email} onChange={(e) => setRecipientEmail(e.target.value)}/>
            </div>
            <input type="submit" value="Save Schedule" className='btn btn-block'/>
        </form>
    )
}

export default AddSchedule
