# daun-terup

## Prerequisites

- [node] v14.17.6
- [pgAdmin] (any version should probably be alright)

## Running the server locally

In the root directory:

1. Do a `yarn install` for the dependencies

2. Create a postgres database on pgAdmin for local dev

3. Create a .env file and have variables below:

- DB_HOST=localhost
- DB_NAME=your-db-name [e.g. daun-terup]
- DB_USERNAME=your-db-username [e.g. postgres]
- DB_PASSWORD=your-db-password [e.g. deeznuts123]

For your `DB_NAME`, `DB_USERNAME` AND `DB_PASSWORD`, you set these yourself on your local Postgres instance.

5. Run the hot reload TypeScript compiler.

`yarn run tsc-watch`

6. On a separate terminal, concurrently run the server.

- If you are on windows the command to run the server is:

  `yarn run local-windows`

- On any Unix environment, the command is:

  `yarn run local`
