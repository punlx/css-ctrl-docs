import { useSignals } from '@preact/signals-react/runtime';

import { currentTopicSignal } from '../../signals/topic.signals';
import { ErrorTopic } from '../errorTopic/ErrorTopic';
import { StylingTopic } from '../stylingTopic/StylingTopic';
import { ThemeTopic } from '../themeTopic/ThemeTopic';
import { utilscss } from '../utils.ctrl';
import { PluginTopic } from '../pluginTopic/PluginTopic';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={utilscss.wrapper}>
      {/* topic */}
      {children}
    </div>
  );
};

export const TopicControl = () => {
  useSignals();

  switch (currentTopicSignal.value) {
    default:
    case 'styling':
      return (
        <Wrapper>
          <StylingTopic></StylingTopic>
        </Wrapper>
      );

    case 'theming':
      return (
        <Wrapper>
          <ThemeTopic></ThemeTopic>
        </Wrapper>
      );

    case 'errors':
      return (
        <Wrapper>
          <ErrorTopic></ErrorTopic>
        </Wrapper>
      );

    case 'plugin':
      return (
        <Wrapper>
          <PluginTopic></PluginTopic>
        </Wrapper>
      );
  }
};
