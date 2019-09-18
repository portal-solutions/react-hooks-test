import React from 'react';

/**
 * A greeting context object that can be subscribed to
 * by other React components.
 */
export const GreetingContext = React.createContext();

/**
 * A context provider which can be used to subscribe to
 * changes to the GreetingContext context object.
 */
export const GreetingProvider = (props) => {
  const [ greeting, setGreeting ] = React.useState(props.greeting);
  
  return (
    <GreetingContext.Provider value={{ greeting, setGreeting }}>
      { props.children }
    </GreetingContext.Provider>
  );
};
