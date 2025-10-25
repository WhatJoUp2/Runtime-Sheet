import './App.css';
import { Settings } from './components/header/settings/Settings';
import { Title } from './components/header/title/Title';
import {
  Abilities,
  Advantages,
  Defenses,
  Details,
  Powers,
  Skills,
} from './components/sheet/';
import { CharacterProvider } from './contexts/characterContext/CharacterContext';
import { ModalProvider } from './contexts/modalContext/ModalContext';

const App = () => {
  return (
    <CharacterProvider>
      <ModalProvider>
        <div className="content">
          <div className="header">
            <div></div>
            <div className="sheet-title">
              <Title />
            </div>
            <div>
              <Settings />
            </div>
          </div>
          <div className="sheet">
            <div className="sheetcol">
              <Details />
              <Abilities />
              <Defenses />
            </div>
            <div className="sheetcol">
              <Skills />
              <Advantages />
            </div>
            <div className="sheetcol">
              <Powers />
            </div>
          </div>
        </div>
      </ModalProvider>
    </CharacterProvider>
  );
};

export default App;
