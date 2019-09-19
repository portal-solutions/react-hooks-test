import React from 'react';
import { GreetingContext } from '../context/GreetingContext';
import { useSalutations } from '../hooks/salutations';

const salutations = 'Salutations from the <Greetings> component!';

/**
 * A 'greeting' bootstrap alert component.
 * Notice the use of the custom 'useSalutations' hook.
 */
export const Greeting = () => {
  const { greeting } = React.useContext(GreetingContext);
  useSalutations(salutations);

  return (
    <div className="alert alert-success">
      <h4 className="alert-heading">&lt;Greeting&gt; component</h4>
      <p>{ greeting }</p>
    </div>
  );
}
