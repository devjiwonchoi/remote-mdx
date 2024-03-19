# remote-mdx

> NOTE: This project is rapidly developed for stable `v1`, and may include a breaking change.

## Why Another Remote MDX?

The initial purpose of this fork was to work around [the issue with Next.js turbo](https://github.com/vercel/next.js/issues/63318) and I found some inefficiencies in the original package.

I think it is always better to have a running mate or a competitive partner to enhance the quality of the product.

Inspired by [this discussion](https://github.com/hashicorp/next-mdx-remote/discussions/437), I have decided to maintain this fork as a separate package, and will continuously sync with the original package.

## Migrating from `next-mdx-remote`

`remote-mdx` is a drop-in replacement for `next-mdx-remote`. You can simply replace the import statement and it should work as expected.

```diff
- import { serialize } from 'next-mdx-remote/serialize'
+ import { serialize } from 'remote-mdx/serialize'

- import { MDXRemote } from 'next-mdx-remote'
+ import { MDXRemote } from 'remote-mdx'

- import { MDXRemote } from 'next-mdx-remote/rsc'
+ import { MDXRemote } from 'remote-mdx/rsc'
```
