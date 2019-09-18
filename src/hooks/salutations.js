import React from 'react';
import { SalutationsContext } from '../context/SalutationsContext';

export const useSalutations = (salutations) => {
  const { setSalutations } = React.useContext(SalutationsContext);
  React.useEffect(() => setSalutations([ salutations ]), [ salutations, setSalutations ]);
}
