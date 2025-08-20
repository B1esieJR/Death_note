import './JournalForm.css'
import {useState} from "react";
import Button from "../Button/Button.jsx";

function JournalForm() {
    const [inputData, setInputData] = useState('');
    const [state, setState] = useState({
        age:31
    });
    const AddJournalItem=(e)=>{
        e.preventDefault()
        state.age=40;
        setState({...state})
        const formData=new FormData(e.target);
        const FormProps= Object.fromEntries(formData);
        console.log(FormProps);

    }
    return (
            <form className="journal-form" onSubmit={AddJournalItem}>
                {state.age}
                <input type='text' name='title'/>
                <input type='text' name='tag'/>
                <input type='date' name='date'/>
                <textarea name='post' id='' cols='30' rows='10'/>
                <Button
                text={"Сохранить"}
                onClick={()=>{console.log('clicked')}}
                />
            </form>

    );
}

export default JournalForm;