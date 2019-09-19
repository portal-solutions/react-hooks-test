import React from 'react';
import { SalutationsContext } from '../context/SalutationsContext';
import { useGreeting } from '../hooks/greeting';

const greeting = 'Greetings from the <Salutations> component!';

/**
 * A 'salutations' bootstrap alert component.
 * Notice the use of the custom 'useGreetings' hook.
 */
export const Salutations = () => {
  const { salutations } = React.useContext(SalutationsContext)
  useGreeting(greeting);

  return (
    <div className="alert alert-warning">
      <h4 className="alert-heading">&lt;Salutations&gt; component</h4>
      <p>{ salutations }</p>
    </div>
  );
}
