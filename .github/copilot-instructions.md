# Project Instructions

- This project uses React, JavaScript/JSX, and Vite. Keep application code in `src/` and preserve the supplied CommuteNet UI and question data.
- Use `npm ci` to install the locked dependencies, `npm run dev` for local development, and `npm run build` to build for production.
- GitHub Pages deployment is configured in `.github/workflows/deploy.yml`. Keep Vite's repository-aware `base` configuration in `vite.config.ts` so assets work for both project and user pages.
- Use `import.meta.env.BASE_URL` for public data paths. Verify the production build under `/NA2-com/`, including answering, grading, wrong-answer persistence after reload, and loading the question bank from the cache on a second visit.
- Only the exam mode has a time limit. Practice sessions must not expire, and unanswered questions must not be recorded as wrong answers.
- Do not add product-specific features, secrets, or deployment integrations without an explicit requirement.
