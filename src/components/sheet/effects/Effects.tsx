import type { FC } from 'react';
import './Effects.css';

interface EffectsProps {
  title: string;
  list: {
    title: string;
    rank?: number;
    description: string;
    link?: string;
  }[];
}

export const Effects: FC<EffectsProps> = ({ list, title }) => {
  return (
    <div className="effects-container">
      <div className="effects-title">{title}</div>
      <div className="effects-list">
        {list.length === 0 && (
          <div className="effect-none"> X == No {title} == X</div>
        )}
        {list.map((effect) => (
          <div className="effect-item" key={effect.title}>
            <div className="effects-name-container">
              <div className="effects-name">
                {effect.link ? (
                  <a href={effect.link} target="_blank">
                    {effect.title + (effect.rank ? `[${effect.rank}]` : '')}
                  </a>
                ) : (
                  effect.title + (effect.rank ? `[${effect.rank}]` : '')
                )}
              </div>
            </div>
            <div className="effect-description">{effect.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
