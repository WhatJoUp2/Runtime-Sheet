import './App.css';
import { Abilities } from './components/Abilities/Abilities';
import { Advantages } from './components/Advantages/Advantages';
import { Defenses } from './components/Defenses/Defenses';
import { Details } from './components/Details/Details';
import { Powers } from './components/Powers/Powers';
import { Skills } from './components/Skills/Skills';

const App = () => {
  return (
    <div className="content">
      <div className="sheet-title">
        <pre className="sheet-title-ascci">
          {'  _____          _______ _                \n'}
          {' |  __ \\        |__   __(_)               \n'}
          {' | |__) |   _ _ __ | |   _ _ __ ___   ___ \n'}
          {" |  _  / | | | '_ \\| |  | | '_ ` _ \\ / _ \\\n"}
          {' | | \\ \\ |_| | | | | |  | | | | | | |  __/\n'}
          {' |_|  \\_\\__,_|_| |_|_|  |_|_| |_| |_|\\___|\n'}
        </pre>
        <div>watches...</div>
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
  );
};

export default App;
