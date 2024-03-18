import { compileMDX } from 'src'

const source = `---\ntitle: Hello\n---\n# World`
describe('compileMDX', () => {
  it('should parse content as MDXContent', async () => {
    const { content } = await compileMDX<{ title: string }>({
      source,
      components: { h1: ({ children }) => <h1>{children}</h1> },
    })

    expect(content.type).toMatchInlineSnapshot('[Function]')
    expect(content).toMatchInlineSnapshot(`
      <MDXContent
        components={
          {
            "h1": [Function],
          }
        }
      />
    `)
  })

  it('should not parse frontmatter when the frontmatter option is not set', async () => {
    const { frontmatter } = await compileMDX<{ title: string }>({
      source,
    })

    expect(frontmatter.title).toBeUndefined()
  })

  it('should parse frontmatter when the frontmatter option is set', async () => {
    const { frontmatter } = await compileMDX<{ title: string }>({
      source,
      options: {
        parseFrontmatter: true,
      },
    })

    expect(frontmatter.title).toBe('Hello')
  })
})
