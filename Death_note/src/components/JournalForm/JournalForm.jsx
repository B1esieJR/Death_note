import './JournalForm.css'
import Button from "../Button/Button.jsx";

function JournalForm({onAddItem}) {

    const AddJournalItem=(e)=>{
        e.preventDefault();
        const formData= new FormData(e.target);
        const FormProps=Object.fromEntries(formData);
        onAddItem(FormProps);
        // e.target.reset();
    }
    return (
            <form className="journal-form" onSubmit={AddJournalItem}>
                <input type='text' name='title'/>
                <input type='text' name='tag'/>
                <input type='date' name='date'/>
                <textarea name='text' id='' cols='30' rows='10'/>
                <Button
                text={"Сохранить"}
                onClick={()=>{console.log('clicked')}}
                />
            </form>

    );
}

export default JournalForm;