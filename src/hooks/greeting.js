import React from 'react';
import { GreetingContext } from '../context/GreetingContext';

/**
 * A custom hook that updates the GreetingContext context.
 */
export const useGreeting = (greeting) => {
  const { setGreeting } = React.useContext(GreetingContext);
  React.useEffect(() => setGreeting(greeting), [ greeting, setGreeting ]);
}
