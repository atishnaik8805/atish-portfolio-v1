# Quickstart: Developer Portfolio and Blog

## Prerequisites
- **Node.js**: v20+ 
- **Package Manager**: npm or pnpm
- **Environment**: Vercel CLI (optional for deployment)

## Setup Steps

1.  **Clone the Repository**:
    ```bash
    git clone [repo-url]
    cd my-portfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Local Development**:
    ```bash
    npm run dev
    ```
    - Site will be available at `http://localhost:4321`.

4.  **Add Your Content**:
    - **Experience**: Edit `src/content/experience/*.yaml`.
    - **Projects**: Edit `src/content/projects/*.yaml`. Place images in the same directory.
    - **Blog**: Add Markdown files to `src/content/blog/*.md`.

5.  **Build and Preview**:
    ```bash
    npm run build
    npm run preview
    ```

6.  **Deploy to Vercel**:
    - Connect your Git repository to Vercel.
    - Ensure build command is `npm run build` and output directory is `dist`.

## Configuration
Modify `src/config.ts` to update your personal details and social links:
```typescript
export const SITE_CONFIG = {
  name: "Atish Naik",
  title: "Senior Software Developer | AI Enthusiast",
  socials: {
    github: "https://github.com/atish-naik",
    linkedin: "https://linkedin.com/in/atish-naik",
    twitter: "https://twitter.com/atish_naik",
  },
};
```
