import React from 'react';
import { GreetingContext } from '../context/GreetingContext';

export const useGreeting = (greeting) => {
  const { setGreeting } = React.useContext(GreetingContext);
  React.useEffect(() => setGreeting(greeting), [ greeting, setGreeting ]);
}
