# ~~remote-mdx~~

> [!IMPORTANT]
> **DISCLAIMER:** Please use [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) instead.

## Why Another Remote MDX?

The initial purpose of this fork was to work around [the issue with Next.js turbo](https://github.com/vercel/next.js/issues/63318), but I found some inefficiencies in the original package.

After getting inspired by [this discussion](https://github.com/hashicorp/next-mdx-remote/discussions/437), I decided to maintain this fork as a separate package, and am planning to continuously sync with the original package.

## So... Why Should I Use This?

- Package Size: **Reduced 50%** of the original package size.
- Fully Typed: Does not depend on `allowJS` or `any` type.
- Module: Native ESM, no internal `commonjs` resolution that breaks `--turbo`.

## Migrating from `next-mdx-remote`

`remote-mdx` is a drop-in replacement for `next-mdx-remote`. You can simply replace the import statement and it should work as expected.

```diff
- import { serialize } from 'next-mdx-remote/serialize'
+ import { serialize } from 'remote-mdx/serialize'

- import { MDXRemote } from 'next-mdx-remote'
+ import { MDXRemote } from 'remote-mdx'

- import { MDXRemote } from 'next-mdx-remote/rsc'
+ import { MDXRemote } from 'remote-mdx/rsc'

- import { compileMDX } from 'next-mdx-remote/rsc'
+ import { compileMDX } from 'remote-mdx/rsc'
```
