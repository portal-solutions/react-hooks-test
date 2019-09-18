import React from 'react';

export const GreetingContext = React.createContext();

export const GreetingProvider = (props) => {
  const [ greeting, setGreeting ] = React.useState(props.greeting);
  
  return (
    <GreetingContext.Provider value={{ greeting, setGreeting }}>
      { props.children }
    </GreetingContext.Provider>
  );
};
