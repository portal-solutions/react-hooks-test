import React from 'react';
import { GreetingContext } from '../context/GreetingContext';
import { useSalutations } from '../hooks/salutations';

const salutations = 'Salutations from the <Greetings> component!';

export const Greeting = () => {
  useSalutations(salutations);
  const { greeting } = React.useContext(GreetingContext);
  return (<p>{ greeting }</p>);
}
