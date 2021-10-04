# daun-terup

## Prerequisites

- [node] v14.17.6 (NOTE: you should probably install Node Version Manager to handle the Node versions)
- [yarn] (probably any version)
- [pgAdmin] (any version should probably be alright)

## Running the server locally

In the root directory:

1. Do a `yarn install` for the dependencies

2. Create a postgres database on pgAdmin for local dev

3. Create a .env file and have variables below:

- DATABASE_URL="postgresql://[DB-username]:[DB-password]@[DB-host]:[DB-port]/[DB-name]?schema=[DB-schema]"
- e.g. `DATABASE_URL="postgresql://postgres:password123@localhost:5432/daun-terup?schema=public"`

4. Run the migrations for the database

- do `yarn prisma migrate dev` to perform migrations unto your local database
- and then do `yarn prisma generate`
- now you have to seed the database with the initial card values: `yarn prisma db seed`
- NOTE: Whenever you make changes to your Prisma schema in the future, you manually need to invoke `yarn prisma generate` in order to accommodate the changes in your Prisma Client API.
- ANOTHER-NOTE: If you botched the db at any point and need a fresh one do a `yarn prisma migrate reset` which will delete your db, reinitialize it and run the seed again. You'll lose all current data.

5. Run the hot reload TypeScript compiler.

`yarn run tsc-watch`

6. On a separate terminal, concurrently run the server.

- If you are on windows the command to run the server is:

  `yarn run local-windows`

- On any Unix environment, the command is:

  `yarn run local`
