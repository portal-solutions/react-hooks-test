import React from 'react';
import { Greeting } from './components/Greeting';
import { Salutations } from './components/Salutations';
import { GreetingProvider } from './context/GreetingContext';
import { SalutationsProvider } from './context/SalutationsContext';
import { Footer } from './components/Footer';

/**
 * XXX :: GjB :: HERE BE DRAGONS
 */
export const App = (props) => {
  return (
    <SalutationsProvider salutations={[ 'default salutations' ]}>
      <GreetingProvider greeting="default greeting">
        <div className="container bg-light">
          <h1>This is the &lt;app&gt; component, bitch!</h1>
          <hr/>
          <div className="row">
            <div className="col-sm mx-1">
              <Greeting></Greeting>
            </div>
            <div className="col-sm mx-1">
              <Salutations></Salutations>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </GreetingProvider>
    </SalutationsProvider>
  );
}
