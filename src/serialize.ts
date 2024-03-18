import { compile } from '@mdx-js/mdx'
import { VFile } from 'vfile'
import { matter } from 'vfile-matter'
import { removeImportsExportsPlugin } from './plugins/remove-imports-exports'
import type { CompileOptions } from '@mdx-js/mdx'
import type { VFileCompatible } from 'vfile'
import type { MDXRemoteSerializeResult, SerializeOptions } from './types'

function getCompileOptions(
  mdxOptions: SerializeOptions['mdxOptions'] = {},
  rsc: boolean = false
): CompileOptions {
  const areImportsEnabled = mdxOptions?.useDynamicImport

  // don't modify the original object when adding our own plugin
  // this allows code to reuse the same options object
  const remarkPlugins = [
    ...(mdxOptions.remarkPlugins || []),
    ...(areImportsEnabled ? [] : [removeImportsExportsPlugin]),
  ]

  return {
    ...mdxOptions,
    remarkPlugins,
    outputFormat: 'function-body',
    // Disable the importSource option for RSC to ensure there's no `useMDXComponents` implemented.
    providerImportSource: rsc ? undefined : '@mdx-js/react',
  }
}

/**
 * Parses and compiles the provided MDX string. Returns a result which can be passed into <MDXRemote /> to be rendered.
 */
export async function serialize<
  TScope = Record<string, unknown>,
  TFrontmatter = Record<string, unknown>,
>(
  source: VFileCompatible,
  {
    scope = {},
    mdxOptions = {},
    parseFrontmatter = false,
  }: SerializeOptions = {},
  rsc: boolean = false
): Promise<MDXRemoteSerializeResult<TScope, TFrontmatter>> {
  const vfile = new VFile(source)

  // makes frontmatter available via vfile.data.matter
  if (parseFrontmatter) {
    matter(vfile, { strip: true })
  }

  let compiledMdx: VFile

  try {
    compiledMdx = await compile(vfile, getCompileOptions(mdxOptions, rsc))
  } catch (error: any) {
    throw new Error(`${error}\n${String(vfile)}`)
  }

  let compiledSource = String(compiledMdx)

  return {
    compiledSource,
    frontmatter: (vfile.data.matter ?? {}) as TFrontmatter,
    scope: scope as TScope,
  }
}
