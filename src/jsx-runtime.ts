/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/**
 * Allow jsx-runtime to be successfully imported from either React 17 or React 18.
 *
 * Inspired by the approach here: https://github.com/contentlayerdev/contentlayer/blob/main/packages/next-contentlayer/src/hooks/jsx-runtime.cjs
 */
import jsxRuntimeDev from 'react/jsx-dev-runtime';
import jsxRuntimeProd from 'react/jsx-runtime';

export const jsxRuntime =
  process.env.NODE_ENV === 'development' ? jsxRuntimeDev : jsxRuntimeProd;
