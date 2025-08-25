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
import {v4 as uuidv4} from "uuid";
function App() {
    const [items, setItems] = useState([]);
    const handleAddItems = (item)=>{
       setItems(prevItems=>[...prevItems,{
           id: uuidv4(),
           text:item.text,
           title:item.title,
           date:new Date(item.date),
       }]);
    }
    const sortItems = (a,b)=>{
        if(a.date < b.date){
            return 1;
        }
        else {
            return -1;
        }
    }


    return (
        <div className="App">
          <LeftPanel>
          <Header/>
          <JournalAddButton/>
          <JournalList>
              {items.sort(sortItems).map(element => (
                  <CardButton key={uuidv4()}>
                      <JornalItem
                          id={element.id}
                          title={element.title}
                          text={element.text}
                          date={element.date}
                      />
                  </CardButton>
                  ))}


          </JournalList>
          </LeftPanel>
        <Body>
            <JournalForm onAddItem={handleAddItems}/>
        </Body>
        </div>
    )
}
export default App