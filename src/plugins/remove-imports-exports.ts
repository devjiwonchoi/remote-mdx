import { remove } from 'unist-util-remove'

export function removeImportsExportsPlugin() {
  return (tree: any) => remove(tree, 'mdxjsEsm')
}
