import logo from './logo.svg';
import './Styles/App.scss';
import Sidebar from './Components/Globals/Sidebar';
import Header from './Components/Globals/Header/Header';
import Body from './Components/Globals/Body';
import Container from './Components/Globals/grid/Container';
import Row from './Components/Globals/grid/Row';
import Column from './Components/Globals/grid/Column';
import { MessageContext } from './Contexts/MessageContext';

function App() {
  return (
    <div className="App">
      <Row>
        <Column span='3'>
          <Sidebar></Sidebar>
        </Column>
        <Column span='9'>
          <MessageContext.Provider>
            <Header />
            <Body />
          </MessageContext.Provider>
        </Column>
      </Row>
    </div>
  );
}

export default App;
