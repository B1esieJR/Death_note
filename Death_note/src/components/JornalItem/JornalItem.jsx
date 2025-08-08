import './JornalItem.css'
function JornalItem({title, text,date}) {
    const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);
    return (
        <>
            <h2 className="jornal-item__header">{title}</h2>
            <div className="jornal-item__body">
                <div className="jornal-item__date">{formattedDate}</div>
                <div className="jornal-item__text">{text}</div>
            </div>
        </>
    )
}
export default JornalItem;