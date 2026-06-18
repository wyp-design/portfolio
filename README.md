# Creative Portfolio

A dark editorial portfolio built with Astro, Markdown content collections, Pages CMS, and GitHub Pages.

## Local setup

```bash
pnpm install
pnpm dev
```

## Content editing

- Works live in `src/content/works`.
- Blog posts live in `src/content/blog`.
- Site settings live in `src/data/site.json`.
- Uploaded images live in `public/uploads`.
- Pages CMS reads `.pages.yml` and can edit all of the above from the browser after the GitHub repository is connected.

## GitHub Pages

This project is configured for a repository page:

```txt
https://<username>.github.io/<repo-name>/
```

Set these repository variables if your repository is not named `creative-portfolio`:

- `PUBLIC_REPO_NAME`
- `PUBLIC_SITE_URL`
- `PUBLIC_BASE_PATH`

In GitHub, set Pages source to **GitHub Actions**.
