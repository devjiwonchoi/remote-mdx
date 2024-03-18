/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { remove } from 'unist-util-remove';

export function removeImportsExportsPlugin() {
  return (tree: any) => remove(tree, 'mdxjsEsm');
}
