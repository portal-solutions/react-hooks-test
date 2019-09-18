import React from 'react';

export const SalutationsContext = React.createContext();

export const SalutationsProvider = (props) => {
  const [ salutations, setSalutations ] = React.useState(props.salutations);

  return (
    <SalutationsContext.Provider value={{ salutations, setSalutations }}>
      { props.children }
    </SalutationsContext.Provider>
  );
}
