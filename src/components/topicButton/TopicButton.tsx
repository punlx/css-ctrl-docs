import { useRef } from 'react';
import { topicButtoncss } from './topicButton.ctrl';

import { useCurrentMenu } from '../../App';

export const TopicButton = () => {
  const { setCurrentMenu } = useCurrentMenu();

  const ref = useRef<HTMLDivElement>(null);
  const chooseTopic = (str: string) => {
    setCurrentMenu(str);
    document.documentElement.scrollTo({
      top: 368,
    });
    topicButtoncss.get('wrap').set({
      visibility: 'none',
    });
    topicButtoncss.get('wrap').set({
      start: 'transparent',
      theming: 'transparent',
      utilities: 'transparent',
      errors: 'transparent',
      styling: 'transparent',
      [str]: '--gray',
    });
  };

  return (
    <div ref={ref} className={topicButtoncss.wrap}>
      <div tabIndex={0} onClick={() => chooseTopic('start')} data-topic="start">
        <p className="more-text">Quick</p>
        <p>Start</p>
        <code>.ctrl.ts</code>
      </div>
      <div tabIndex={0} onClick={() => chooseTopic('styling')} data-topic="styling">
        <p className="more-text">More</p>
        <p>Styling</p>
        <code>.ctrl.ts</code>
      </div>

      <div tabIndex={0} onClick={() => chooseTopic('utilities')} data-topic="utilities">
        <p className="more-text">Styling</p>
        <p>Utilities</p>
        <code>.ctrl.ts</code>
      </div>

      <div tabIndex={0} onClick={() => chooseTopic('theming')} data-topic="theming">
        <p className="more-text">Create</p>
        <p>Design System</p>
        <code>ctrl.theme.ts</code>
      </div>

      <div tabIndex={0} onClick={() => chooseTopic('errors')} data-topic="errors">
        <p>Rules</p>
        <p className="more-text">and</p>
        <code>Errors</code>
      </div>
      <div
        className="hamburger"
        onClick={async () => {
          const val = (await topicButtoncss.get('wrap').value(['visibility'])).visibility;

          if (val.value === 'none') {
            topicButtoncss.get('wrap').set({
              visibility: 'flex',
            });
          } else {
            topicButtoncss.get('wrap').set({
              visibility: 'none',
            });
          }
        }}
      >
        🍔
      </div>
    </div>
  );
};
