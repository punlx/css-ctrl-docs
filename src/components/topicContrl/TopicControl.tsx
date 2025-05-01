import { ErrorTopic } from '../errorTopic/ErrorTopic';
import { StylingTopic } from '../stylingTopic/StylingTopic';
import { ThemeTopic } from '../themeTopic/ThemeTopic';
import { utilscss } from '../utils.ctrl';
import { UtilitiesTopic } from '../pluginTopic/utilitiesTopic';
import { Advanced } from '../advancedTopic/Advanced';
import { useCurrentMenu } from '../../App';

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
  const { currentMenu } = useCurrentMenu();

  switch (currentMenu) {
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
