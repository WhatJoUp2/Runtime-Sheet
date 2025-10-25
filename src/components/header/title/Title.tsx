import { useContext, type FC } from 'react';
import { CharacterContext } from '../../../contexts/characterContext/CharacterContext';
import { CharacterIndex } from '../../../db/CharacterType';

// Ascci art generated with: https://patorjk.com/software/taag/#p=display&f=Standard&t=Runtime

export const Title: FC = () => {
  const { selectedCharacterIndex } = useContext(CharacterContext);

  const getAscciTitle = () => {
    console.log('titlecalled', selectedCharacterIndex);
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
              {'  ____) | |_) | |_| | (_| |  __/ |  | |_) | (_) | |_ \n'}
              {' |_____/| .__/ \\__, |\\__,_|\\___|_|  |____/ \\___/ \\__|\n'}
              {'        | |     __/ |                                \n'}
              {'        |_|    |___/                                 \n'}
            </pre>
            <div>Spinning the Spyderweb</div>
          </>
        );
      case CharacterIndex.Nightshade:
        return (
          <>
            <pre className="sheet-title-ascci">
              {'  _   _ _       _     _   ____  _               _      \n'}
              {' | \\ | (_) __ _| |__ | |_/ ___|| |__   __ _  __| | ___ \n'}
              {
                " |  \\| | |/ _` | '_ \\| __\\___ \\| '_ \\ / _` |/ _` |/ _ \\\n"
              }
              {' | |\\  | | (_| | | | | |_ ___) | | | | (_| | (_| |  __/\n'}
              {
                ' |_| \\_|_|\\__, |_| |_|\\__|____/|_| |_|\\__,_|\\__,_|\\___|\n'
              }
              {'          |___/                                        \n'}
            </pre>
            <div>Fear the Dark</div>
          </>
        );
      default:
        return 'Unknown';
    }
  };

  return <div>{getAscciTitle()}</div>;
};
