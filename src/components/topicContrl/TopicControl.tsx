import { useSignals } from '@preact/signals-react/runtime';

import { currentTopicSignal } from '../../signals/topic.signals';
import { ErrorTopic } from '../errorTopic/ErrorTopic';
import { StylingTopic } from '../stylingTopic/StylingTopic';
import { ThemeTopic } from '../themeTopic/ThemeTopic';
import { utilscss } from '../utils.ctrl';
import { UtilitiesTopic } from '../pluginTopic/utilitiesTopic';
import { Advanced } from '../advancedTopic/Advanced';

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
    case 'start':
      return (
        <Wrapper>
          <StylingTopic></StylingTopic>
        </Wrapper>
      );
    case 'styling':
      return (
        <Wrapper>
          <Advanced></Advanced>
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

    case 'utilities':
      return (
        <Wrapper>
          <UtilitiesTopic></UtilitiesTopic>
        </Wrapper>
      );
  }
};
