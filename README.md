# Issp

## Installation
A. Lark - https://www.larksuite.com/product/rooms-downloads
B. VS Code - https://code.visualstudio.com/download
- Install NX Console [Nx Console](https://nx.dev/nx-console) Plugin
C. Nodejs - https://nodejs.org/en/
D. Git Bash - https://git-scm.com/downloads
E. Docker - https://www.docker.com/products/docker-desktop/

## Source Code & Environment
A. Angular Template
- git clone https://github.com/reezenx/abcisspxyz-0.git
- npm install
- npm run dev
B. Main Project
- git clone https://github.com/reezenx/issp.git
- npm install
- docker-compose up
- npx prisma migrate
- npm run dev

## Running the app

```bash
# development
$ nx run prisma-schema-main:migrate
$ nx run prisma-schema-main:generate-types
$ nx run prisma-schema-main:prisma format
$ npx prisma migrate - Run All Migration
$ npx prisma migrate dev --name "init" - Create new Migration
$ npx prisma db seed - Populate DB with seed data
$ npm run start - Nest App
$ docker-compose up - PostgreSql Docker
$ npx prisma studio - Prisma Studio

Swagger - http://localhost:3000/api
Prisma Studio - http://localhost:5555/
```

## Start the client and server application 

Run `nx run-many --target=serve --projects=client,api`  to start the development server. 

## Build for production

Run `nx run-many --target=build --projects=client,api` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Icons
```
https://tabler.io/icons
```

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
