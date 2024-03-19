import { remove } from 'unist-util-remove'

//TODO: Is this necessary?
export function removeImportsExportsPlugin() {
  return (tree: any) => remove(tree, 'mdxjsEsm')
}
