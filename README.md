# Minimal Light — Academic Personal Website

A clean, serif-first Jekyll theme for researchers and academics.

## Quick Start (Local Development)

```bash
# 1. Install Ruby and Bundler (if not already installed)
# On Ubuntu/Debian:
sudo apt install ruby-full build-essential
gem install bundler

# 2. Install dependencies
bundle install

# 3. Serve locally
bundle exec jekyll serve
# → Open http://localhost:4000
```

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended)

1. Create a GitHub repository (e.g., `yourusername.github.io` for a user site, or any name for a project site).

2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Create `.github/workflows/jekyll.yml` with the content below (already included in this repo), **or** go to **Settings → Pages → Source** and select **GitHub Actions**.

4. GitHub will automatically build and deploy your site to `https://yourusername.github.io`.

### Option B — Classic GitHub Pages

1. Go to **Settings → Pages** in your repository.
2. Under **Source**, select the `main` branch and `/ (root)` folder.
3. Click **Save**. GitHub will build the site using its built-in Jekyll pipeline.

> **Note:** If you're deploying to a project site (not `username.github.io`), set `baseurl: "/repo-name"` in `_config.yml`.

## Customization

### Personal Info
Edit `_config.yml` to update your name, title, affiliation, social links, and navigation.

### Publications
Edit `_data/publications.yml` to add or update publications. Each entry supports: `title`, `authors`, `journal`, `year`, `arxiv`, `doi`, `pdf`.

### Profile Photo
Place your photo at `assets/images/profile.jpg`. The home page will display it automatically.

### CV PDF
Place your CV at `assets/cv.pdf` and the CV page will link to it.

### Dark Mode
The site includes a dark mode toggle in the navigation bar. It respects the user's OS preference by default and remembers their choice via `localStorage`.

### Events, Outreach & Resources
Edit the markdown files in `pages/` to update content. Place talk slides and poster PDFs in `assets/files/talks/` and link them from the Events page.

## Project Structure

```
.
├── _config.yml              # Site configuration
├── _data/
│   └── publications.yml     # Publication entries
├── _includes/
│   ├── header.html          # Navigation bar
│   └── footer.html          # Site footer
├── _layouts/
│   ├── default.html         # Base layout
│   ├── home.html            # Home page layout
│   └── page.html            # Generic page layout
├── assets/
│   ├── css/style.css        # All styles
│   ├── js/main.js           # Dark mode & mobile menu
│   └── images/              # Profile photo, favicon
├── index.md                 # Home
├── about.md                 # About
├── research.md              # Research
├── publications.md          # Publications (from YAML)
├── cv.md                    # CV
├── contact.md               # Contact
├── pages/
│   ├── events.md            # Workshops & conferences
│   ├── outreach.md          # Public engagement
│   └── resources.md         # Curated reading & tools
├── assets/files/talks/      # Slides & poster PDFs
├── Gemfile                  # Ruby dependencies
└── README.md                # This file
```

## License

MIT
