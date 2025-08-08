import './App.css';
import Button from './components/Button/Button';
import JornalItem from './components/JornalItem/JornalItem';
import CardButton from "./components/CardButton/CardButton";

function App() {
    const data = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Ты пил сок из моих носок',
            date: new Date(),
        },
        {
            title: 'Похом в горы',
            text: 'Текст сейчас яне придумау',
            date: new Date(),
        },

    ]
    return (
        <>
            <h1>123</h1>
            <p>123</p>
            <Button/>
            <CardButton>
                Новое воспоминание
            </CardButton>
            <CardButton>
            <JornalItem
                title={data[0].title}
                text={data[0].text}
                date={data[0].date}
            />
            </CardButton>
            <CardButton>
            <JornalItem
                title={data[1].title}
                text={data[1].text}
                date={data[1].date}
            />
            </CardButton>
        </>
    )
}

export default App
