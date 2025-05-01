import './ctrl.theme';
import { TopicButton } from './components/topicButton/TopicButton';
import { TopicControl } from './components/topicContrl/TopicControl';
import { appcss } from './app.ctrl';
import { Title } from './components/title/title';
import { Sidebar } from './components/sidebar/Sidebar';

// HeaderMenuContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';


type CurrentMenuContextType = {
  currentMenu: string;
  setCurrentMenu: (menu: string) => void;
};

const CurrentMenuContext = createContext<CurrentMenuContextType | undefined>(undefined);

export const CurrentMenuProvider = ({ children }: { children: ReactNode }) => {
  const [currentMenu, setCurrentMenu] = useState<string>('home'); // ค่า default

  return (
    <CurrentMenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </CurrentMenuContext.Provider>
  );
};

export const useCurrentMenu = () => {
  const context = useContext(CurrentMenuContext);
  if (!context) {
    throw new Error('useCurrentMenu must be used within a CurrentMenuProvider');
  }
  return context;
};
function App() {
  return (
    <CurrentMenuProvider>
      <div className={appcss.page}>
        <Sidebar></Sidebar>
        <TopicButton></TopicButton>
        <Title></Title>
        <TopicControl></TopicControl>
      </div>
    </CurrentMenuProvider>
  );
}

export default App;
