## Project details: 
This project contains a dummy UI for running SQL queries. This is built using Next.js framework and hosted on Vercel.
The hosted app can be found at : https://sql-playground-ui.vercel.app/

Here's a brief walkthrough video of the project: https://www.loom.com/share/f3838549cce14aa3bbeb895a7264a6a2?sid=e9ea389a-7c12-48d4-918c-cbea358fc76f

Some of the major plugins used are:
1. `nanostores` : a tiny state management library for managing UI state on the frontend.
2. `react-resizable-panels` : for resizing various sections of the UI.
3. `csv-parse` : for mocking table data from query API calls using a csv file.

### Page load metrics:
#### Lighthouse metrics:
<img width="766" alt="Screenshot 2025-06-03 at 9 44 21 AM" src="https://github.com/user-attachments/assets/336cd6f5-f807-4903-a6bb-b3f3eb84f1e0" />

#### Pingdom metrics:
https://tools.pingdom.com/#65ccffbbee800000


### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

