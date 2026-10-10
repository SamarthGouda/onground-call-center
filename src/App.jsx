import React from 'react';
import { AppProvider } from './context/AppContext';
import { AppShell } from './components/layout/AppShell';

export const App = () => {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
};

export default App;
