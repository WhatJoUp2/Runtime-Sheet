import { useContext, type FC } from 'react';
import {
  CharacterContext,
  CharacterIndex,
} from '../../../contexts/characterContext/CharacterContext';
import { ModalContext } from '../../../contexts/modalContext/ModalContext';

export const SettingsModal: FC = () => {
  const { selectedCharacterIndex, setSelectedCharacter } =
    useContext(CharacterContext);
  const { closeModal } = useContext(ModalContext);

  const handleCharacterSelect = (index: CharacterIndex) => {
    setSelectedCharacter(index);
    closeModal();
  }

  return (
    <div>
      <ul className="character-list">
        <li
          onClick={() => handleCharacterSelect(CharacterIndex.Runtime)}
          className={
            selectedCharacterIndex === CharacterIndex.Runtime ? 'active' : ''
          }
        >
          Runtime
        </li>
        <ul>
          <li
            onClick={() => handleCharacterSelect(CharacterIndex.Spyderbot)}
            className={
              selectedCharacterIndex === CharacterIndex.Spyderbot
                ? 'active'
                : ''
            }
          >
            Spyderbot
          </li>
        </ul>
      </ul>
    </div>
  );
};
