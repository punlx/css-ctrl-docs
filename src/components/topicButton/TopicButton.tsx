import { useRef } from 'react';
import { currentTopicSignal, Topic } from '../../signals/topic.signals';
import { topicButtoncss } from './topicButton.ctrl';

export const TopicButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const chooseTopic = (str: Topic) => {
    currentTopicSignal.value = str;
    topicButtoncss.get('wrap').set({
      start: '--gray',
      theming: '--gray',
      plugin: '--gray',
      errors: '--gray',
      advanced: '--gray',
      [str]: '--white',
    });
  };


  return (
    <div ref={ref} className={topicButtoncss.wrap}>
      <div onClick={() => chooseTopic('start')} data-topic="start">
        <p>Quick</p>
        <p>Start</p>
        <code>.ctrl.ts</code>
      </div>
      <div onClick={() => chooseTopic('advanced')} data-topic="advanced">
        <p>More</p>
        <p>Advanced</p>
        <code>.ctrl.ts</code>
      </div>

      <div onClick={() => chooseTopic('theming')} data-topic="theming">
        <p>Create</p>
        <p>Design System</p>
        <code>ctrl.theme.ts</code>
      </div>

      <div onClick={() => chooseTopic('plugin')} data-topic="plugin">
        <p>UI</p>
        <p>Interaction</p>
        <code>Plugins</code>
      </div>

      <div onClick={() => chooseTopic('errors')} data-topic="errors">
        <p>Rules</p>
        <p>and</p>
        <code>Errors</code>
      </div>
    </div>
  );
};
