import type { ComponentProps, ReactElement } from 'react'
import type { CompileOptions } from '@mdx-js/mdx'
import type { MDXProvider } from '@mdx-js/react'
import type { VFileCompatible } from 'vfile'

export interface SerializeOptions {
  /**
   * Pass-through variables for use in the MDX content
   */
  scope?: Record<string, unknown>
  /**
   * These options are passed to the MDX compiler.
   * See [the MDX docs.](https://github.com/mdx-js/mdx/blob/master/packages/mdx/index.js).
   */
  mdxOptions?: Omit<CompileOptions, 'outputFormat' | 'providerImportSource'>
  /**
   * Indicate whether or not frontmatter should be parsed out of the MDX. Defaults to false
   */
  parseFrontmatter?: boolean
}

/**
 * Represents the return value of a call to serialize()
 */
export type MDXRemoteSerializeResult<
  TScope = Record<string, unknown>,
  TFrontmatter = Record<string, unknown>,
> = {
  /**
   * The compiledSource, generated from next-mdx-remote/serialize
   */
  compiledSource: string
  /**
   * An arbitrary object of data which will be supplied to the MDX.
   *
   * For example, in cases where you want to provide template variables to the MDX, like `my name is {name}`,
   * you could provide scope as `{ name: "Some name" }`.
   */
  scope: TScope
  /**
   * If parseFrontmatter was set to true, contains any parsed frontmatter found in the MDX source.
   */
  frontmatter: TFrontmatter
}

export type MDXRemoteProps = {
  source: VFileCompatible
  options?: SerializeOptions
  /**
   * An object mapping names to React components.
   * The key used will be the name accessible to MDX.
   *
   * For example: `{ ComponentName: Component }` will be accessible in the MDX as `<ComponentName/>`.
   */
  components?: ComponentProps<typeof MDXProvider>['components']
}

export type CompileMDXResult<TFrontmatter = Record<string, unknown>> = {
  content: ReactElement
  frontmatter: TFrontmatter
}
