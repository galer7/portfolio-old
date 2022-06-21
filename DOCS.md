# TRPC stuff

- `backend/router/index.ts`
  - here we define all the backend routes and their schemas
  - it exports just the router's type definition
- `pages/api/trpc/[trpc].ts`
  - create API handler for Next.js. here we pass the type definition from the previous step
- `utils/trpc.ts`
  - create react query hook. we will use this exported function for each query we want to initialize on the client side
  - it also uses the type definition of the API router
- `pages/_app.tsx`
  - tell Next.js to use TRPC for the routing alongside Next.js pages

**Really important!**
Make sure to restart the TS server after all these modifications: `CTRL + SHIFT + P > Restart TS Server` and restart server: `npm run dev`