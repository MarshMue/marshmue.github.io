# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Jekyll, hosted on GitHub Pages. The site serves as Marshall Mueller's portfolio, featuring writing, bookshelf, photography, and a film club section.

## Architecture

- **Jekyll Static Site**: Uses Jekyll's collections and layouts system
- **Collections**: 
  - `_writing/`: Markdown files for essays and articles
  - `_posts/`: Daily journal entries from 2022 (archived)
- **Layouts**: 
  - `default.html`: Main site layout with navigation and PostHog analytics
  - `post.html`: Blog post layout
  - `book.html`: Book review layout  
- **Assets**: Static files in `/assets/` and `/static/` directories

## Configuration

- `_config.yml`: Jekyll configuration with collections setup
- `package.json`: Empty configuration file
- No build process - Jekyll handles compilation automatically via GitHub Pages

## Content Structure

- Main pages: `index.md`, `writing.md`, `bookshelf.md`, `photography.md`, `filmclub.md`, `posts.md`
- Writing pieces stored in `_writing/` collection
- Photos stored in `assets/photos/`
- Styling in `static/style.css`

## Development Commands

### Initial Setup (one-time)
```bash
bundle install  # Install gems specified in Gemfile
```

### Daily Development
```bash
bundle exec jekyll serve    # Start local development server
bundle exec jekyll serve --livereload  # Auto-refresh browser on changes
```

### Dependency Management
```bash
bundle update              # Update all gems to latest compatible versions
bundle update jekyll       # Update specific gem
bundle outdated           # Check which gems have newer versions
```

## Gemfile Usage & Philosophy

**Why we use a Gemfile**: Ensures consistent Jekyll versions between local development and GitHub Pages. Without it, you might develop with Jekyll 4.3 locally but GitHub Pages uses 3.9, causing deployment issues.

**Key gems explained**:
- `jekyll`: Core static site generator - pinned to GitHub Pages compatible version
- `jekyll-feed`: Auto-generates RSS feeds at `/feed.xml` for blog posts
- `jekyll-sitemap`: Creates `/sitemap.xml` for search engine indexing  
- `jekyll-seo-tag`: Adds proper meta tags, Open Graph data, Twitter cards

**When to modify**: Add new gems when you need functionality (e.g. `jekyll-archives` for tag pages). Always check GitHub Pages supported plugins list first.

**Bundle vs direct gem install**: Always use `bundle exec` commands to ensure you're using the exact gem versions specified in Gemfile.lock, not system-wide gems.

## Key Features

- PostHog analytics integration in default layout
- Custom CSS with Shoji-inspired design aesthetic
- Responsive design with vertical line elements
- Collections-based content organization