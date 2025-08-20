import './App.css';
import Button from './components/Button/Button';
import JornalItem from './components/JornalItem/JornalItem';
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/leftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import {useState} from "react";
import JournalForm from "./components/JournalForm/JournalForm.jsx";

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

    ];

    return (
        <div className="App">
          <LeftPanel>
          <Header/>
          <JournalAddButton/>
          <JournalList>
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
          </JournalList>
          </LeftPanel>
        <Body>
            <JournalForm/>
        </Body>
        </div>
    )
}
export default App