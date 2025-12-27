# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static website built with Astro. The project follows WordPress-core standards for PHP (if any PHP is used) and WCAG 2.1 AA standards for HTML accessibility.

## Common Commands

### Development
```
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Quality
When editing files:
- **PHP**: Follow WordPress-core coding standards
- **HTML**: Ensure all markup adheres to WCAG 2.1 AA accessibility standards

## Architecture Notes

### Technology Stack
- **Framework**: Astro (static site generator)
- **Accessibility**: WCAG 2.1 AA compliance required for all HTML output
- **PHP Standards**: WordPress-core standards (if PHP is used in the project)

### Directory Structure (Standard Astro Layout)
- `src/pages/` - Page routes (file-based routing)
- `src/components/` - Reusable Astro/framework components
- `src/layouts/` - Page layout templates
- `public/` - Static assets served as-is
- `dist/` - Build output (git-ignored)

### Important Considerations
- All HTML output must meet WCAG 2.1 AA standards (proper semantic markup, ARIA labels, color contrast, keyboard navigation, etc.)
- PHP code, if present, must follow WordPress-core coding standards
- Static assets in `public/` are copied directly to build output
- Astro components use `.astro` extension and support islands architecture
