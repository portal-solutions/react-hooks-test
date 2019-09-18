import React from 'react';
import { Greeting } from './components/Greeting';
import { Salutations } from './components/Salutations';
import { GreetingProvider } from './context/GreetingContext';
import { SalutationsProvider } from './context/SalutationsContext';

export const App = () => {
  return (
    <SalutationsProvider salutations={[ 'default salutations' ]}>
      <GreetingProvider greeting="default greeting">
        <div className="container">
          <h1>This is the &lt;app&gt; component, bitch!</h1>
          <div className="row">
            <div className="alert alert-success col-sm mx-1">
              <Greeting></Greeting>
            </div>
            <div className="alert alert-warning col-sm mx-1">
              <Salutations></Salutations>
            </div>
          </div>
        </div>
      </GreetingProvider>
    </SalutationsProvider>
  );
}
