import { useContext, type FC } from 'react';
import {
  CharacterContext,
  CharacterIndex,
} from '../../../contexts/characterContext/CharacterContext';

// Ascci art generated with: https://patorjk.com/software/taag/#p=display&f=Standard&t=Runtime

export const Title: FC = () => {
  const { selectedCharacterIndex } = useContext(CharacterContext);

  const getAscciTitle = () => {
    switch (selectedCharacterIndex) {
      case CharacterIndex.Runtime:
        return (
          <>
            <pre className="sheet-title-ascci">
              {'  _____          _______ _                \n'}
              {' |  __ \\        |__   __(_)               \n'}
              {' | |__) |   _ _ __ | |   _ _ __ ___   ___ \n'}
              {" |  _  / | | | '_ \\| |  | | '_ ` _ \\ / _ \\\n"}
              {' | | \\ \\ |_| | | | | |  | | | | | | |  __/\n'}
              {' |_|  \\_\\__,_|_| |_|_|  |_|_| |_| |_|\\___|\n'}
            </pre>
            <div>watches...</div>
          </>
        );
      case CharacterIndex.Spyderbot:
        return (
          <>
            <pre className="sheet-title-ascci">
              {'   _____                 _           ____        _   \n'}
              {'  / ____|               | |         |  _ \\      | |  \n'}
              {' | (___  _ __  _   _  __| | ___ _ __| |_) | ___ | |_ \n'}
              {"  \\___ \\| '_ \\| | | |/ _` |/ _ \\ '__|  _ < / _ \\| __|\n"}
              {"  ____) | |_) | |_| | (_| |  __/ |  | |_) | (_) | |_ \n"}
              {' |_____/| .__/ \\__, |\\__,_|\\___|_|  |____/ \\___/ \\__|\n'}
              {'        | |     __/ |                                \n'}
              {'        |_|    |___/                                 \n'}
            </pre>
            <div>Spinning the Spyderweb</div>
          </>
        );
      default:
        return 'Unknown';
    }
  };

  return <div>{getAscciTitle()}</div>;
};
