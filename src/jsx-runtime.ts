import jsxRuntimeDev from 'react/jsx-dev-runtime';
import jsxRuntimeProd from 'react/jsx-runtime';

export const jsxRuntime =
  process.env.NODE_ENV === 'development' ? jsxRuntimeDev : jsxRuntimeProd;
