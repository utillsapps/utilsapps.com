# Utils Apps

Developer website for iOS apps. Static site hosted on GitHub Pages.

**Live site:** after publishing, your URL will be  
`https://YOUR_USERNAME.github.io/REPO_NAME/`

## What's included

- Homepage with app showcase
- Per-app pages with Privacy Policy and Terms and Conditions
- Responsive layout for desktop, tablet, and mobile

## Publish to GitHub Pages

### 1. Create a repository on GitHub

1. Open [github.com/new](https://github.com/new)
2. Repository name: `utilsapps` (or any name you like)
3. Set visibility to **Public** (required for free GitHub Pages)
4. Do **not** add README, `.gitignore`, or license — the project already has them
5. Click **Create repository**

### 2. Push this project

Run these commands in the project folder:

```bash
cd "/Users/maksimmasiagutov/Documents/My Projects/utilsapps сайт"

git init
git add .
git commit -m "Initial Utils Apps website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/utilsapps.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Open your repository on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**

After 1–2 minutes the site will be live at:

`https://YOUR_USERNAME.github.io/utilsapps/`

### 4. Custom domain (optional)

If you own `utilsapps.com`:

1. Create a file `CNAME` in the project root with one line:
   ```
   utilsapps.com
   ```
2. Push the change to GitHub
3. In your domain DNS settings, add:
   - `A` records → GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or `CNAME` for `www` → `YOUR_USERNAME.github.io`
4. In **Settings → Pages**, set **Custom domain** to `utilsapps.com`

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Add a new app

1. Copy `apps/my-capital-goals/` → `apps/your-app/`
2. Update `index.html`, `privacy.html`, and `terms.html`
3. Add a card to the `#apps` section in `index.html`
