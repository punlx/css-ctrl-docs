import './ctrl.theme';
import 'css-ctrl/plugin.css';
import { Title } from './components/title/title';
import { TopicButton } from './components/topicButton/TopicButton';
import { TopicControl } from './components/topicContrl/TopicControl';
import { appcss } from './app.ctrl';

function App() {
  return (
    <div className={appcss.page}>
      <Title></Title>
      <TopicButton></TopicButton>
      <TopicControl></TopicControl>
    </div>
  );
}

export default App;
