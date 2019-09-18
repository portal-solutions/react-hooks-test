import React from 'react';
import { SalutationsContext } from '../context/SalutationsContext';

/**
 * A custom hook that updates the SalutationsContext context.
 */
export const useSalutations = (salutations) => {
  const { setSalutations } = React.useContext(SalutationsContext);
  React.useEffect(() => setSalutations([ salutations ]), [ salutations, setSalutations ]);
}
