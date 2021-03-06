import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Please add a task item")
            return;
        }

        onAdd({text, day, reminder});

        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input type="text" placeholder="Add task item" value={text} 
                onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label htmlFor="task">Day & time</label>
                <input type="text" placeholder="Add day & time" value={day} 
                onChange={(e) => setDay(e.target.value)}/>
            </div>
            
            <div className="form-control form-control-check">
                <label htmlFor="task">Set Reminder</label>
                <input 
                type="checkbox"
                checked={reminder} 
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save item" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
