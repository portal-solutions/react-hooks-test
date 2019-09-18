import React from 'react';
import { SalutationsContext } from '../context/SalutationsContext';
import { useGreeting } from '../hooks/greeting';

const greeting = 'Greetings from the <Salutations> component!';

export const Salutations = () => {
  useGreeting(greeting);
  const { salutations } = React.useContext(SalutationsContext)
  return (<p>{ salutations }</p>);
}
