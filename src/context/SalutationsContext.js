import React from 'react';

/**
 * A salutations context object that can be subscribed to
 * by other React components.
 */
export const SalutationsContext = React.createContext();

/**
 * A context provider which can be used to subscribe to
 * changes to the Salutations context object.
 */
export const SalutationsProvider = (props) => {
  const [ salutations, setSalutations ] = React.useState(props.salutations);

  return (
    <SalutationsContext.Provider value={{ salutations, setSalutations }}>
      { props.children }
    </SalutationsContext.Provider>
  );
}
