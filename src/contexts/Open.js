import React, { createContext, useContext, useState } from 'react';

// Create the context
const DrawerContext = createContext();

// Create a custom hook for accessing the context
export function useDrawer() {
  return useContext(DrawerContext);
}

// Create a context provider component to manage the state
export function DrawerProvider({ children }) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <DrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}
