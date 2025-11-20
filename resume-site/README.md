# Resume Replica Website

This small static site reproduces the attached resume image as a responsive HTML/CSS layout.

Files:
- `index.html` — main page
- `styles.css` — styling
- `script.js` — minimal JS

This site has been updated with Ntsika Ngilane's CV content (contact info, projects, skills, and experience).

To update content, edit `index.html` fields inside the relevant sections. To change visual styles, edit `styles.css`.

Open `index.html` in a browser to preview. To commit changes locally, run the git commands below.

Example git commands to create a branch and commit:

# Ntsika Ngilane — Resume Website (Replica)

Professional, single-page static resume built with HTML, CSS and minimal JavaScript. This project reproduces a visual resume design and contains structured sections for Profile, Proficiency, Skills, Projects, Education, Tools and Experience.

Repository contents
- `index.html` — semantic page markup for all sections
- `styles.css` — main stylesheet with layout, colors and responsive rules
- `script.js` — minimal JS placeholder for small interactions
- `icons/` — stylized SVG icons for tools used in the Tools grid
- `images/` — profile photo and other assets

Design & implementation notes
- Layout: responsive single-page layout with left/right flows and full-width sections for Projects, Experience and Contact.
- Typography: uses the `Poppins` webfont. Change the font link in `index.html` to use a different font.
- Colors: CSS variables are defined in `:root` of `styles.css`. Key variables match the visual design and are easy to tweak.
- Accessibility: semantic HTML used (header, section, article, aside). Contrast was adjusted after color changes — review with an accessibility tool if needed.

Editing content
- Edit `index.html` to update profile text, projects, experience, education and tools. No build step required.
- Replace the profile picture in `images/` and update the `img` `src` in the header.
- Replace tool icons by placing official SVGs in `icons/` and updating the `img` sources in the Tools grid.

Local preview (PowerShell)
```powershell
cd "c:\Users\Arwe\Documents\NTSNGI620_FTO2505_Ntsika-Ngilane_SDF_Portfolio_Piece\resume-site"
start "" "index.html"
```

Recommended Git workflow

Use feature branches and clear commit messages. Example commands to create a branch, stage changes and push:

```powershell
cd "c:\Users\Arwe\Documents\NTSNGI620_FTO2505_Ntsika-Ngilane_SDF_Portfolio_Piece\resume-site"
# Create a feature branch
git checkout -b feat/update-resume-content

# Check status and stage files you've changed
git status
git add index.html styles.css icons/* images/* README.md

# Commit with an imperative message
git commit -m "feat(resume): update profile, add tools and refine layout"

# Push branch to remote
git push -u origin feat/update-resume-content
```

Commit message examples
- `feat(resume): add AI-in-Education project (in progress)`
- `fix(styles): correct card colors and improve contrast`
- `chore(icons): add stylized tool SVGs`

Creating a Pull Request on GitHub
1. Push your feature branch to the remote.
2. Open the repository on GitHub, select your branch and click "Compare & pull request".
3. Fill the PR description (what changed, why), add reviewers, and create the PR.

Deployment
- GitHub Pages: create a `gh-pages` branch and push the site files, or enable Pages from `main`/`docs/` in repository settings.
- Netlify/Vercel: connect the repository and deploy the static site. Point build directory to the repo root or `resume-site` depending on your setup.

Quick GitHub Pages example (PowerShell)
```powershell
cd "c:\Users\Arwe\Documents\NTSNGI620_FTO2505_Ntsika-Ngilane_SDF_Portfolio_Piece"
git checkout -b gh-pages
git add resume-site/
git commit -m "chore(deploy): publish resume site to GitHub Pages"
git push -u origin gh-pages
```

Testing & visual QA
- Open `index.html` in multiple browsers and widths.
- Use Chrome/Edge devtools device toolbar to check mobile/tablet breakpoints.

Next steps I can help with
- Replace stylized icons with official logos (upload official SVGs and I will swap them in).
- Add a print/PDF export stylesheet and a "Download PDF" button.
- Add a small script to export a screenshot or generate a PDF (requires additional tools like Puppeteer or wkhtmltopdf).

Support / Contact
If you want me to make further adjustments (pixel-perfect matching, icon swaps, print stylesheet, or git ready patch), tell me what you'd like next and I will implement it and provide exact git commands.

---
This file was updated as part of the `resume-site` workspace.
