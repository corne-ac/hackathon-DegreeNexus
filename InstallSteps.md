# Setting up Skeleton UI for Pixel Pioneers Hackathon

## Set up [Skeleton UI](https://www.skeleton.dev/docs/get-started)

```code
pnpm create skeleton-app@latest pixel-pioneers-hackathon
  -Select typescript
cd pixel-pioneers-hackathon
pnpm install
pnpm run dev
```


## Set up [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql)
```code
pnpm install prisma --save-dev
npx prisma init
```

### Update
```code
Whenever you update your Prisma schema, you will have to update your database schema using either prisma migrate dev or prisma db push. This will keep your database schema in sync with your Prisma schema. The commands will also regenerate Prisma Client.
```
