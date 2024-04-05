# ISSP

<p align="left">
  <img src='https://api.netlify.com/api/v1/badges/10dc54f6-36aa-4b3e-bd11-20f2f4723746/deploy-status' alt='netlify'>
  <img src='https://issp-badge.vercel.app/api/reezenx/issp' alt='vercel'>
  <img src='https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-latest-cpsl.onrender.com%2Fsrv-co5plf6v3ddc7394l4gg&query=%24.status&style=flat&label=render' alt='render'>
</p>

## Source Code & Environment

### Angular Template

- git clone https://github.com/reezenx/abcisspxyz-0.git
- npm install
- npm run start

### Main Project

- git clone https://github.com/reezenx/issp.git
- npm install
- docker-compose up
- npm run db:migrate
- npm run start
- npm run start:api

Client - http://localhost:4200/
Swagger - http://localhost:3000/api
Prisma Studio - http://localhost:5555/

### Migration

- npm run db:push - Push current schema to db
- npm run db:seed - Push seed data to db
- npm run db:reset - Reset schema and seed data
- npm run db:deploy - Deploy schema to production
- npx prisma migrate dev --name add-status-column - Add new migration

### VS Code Plugins

NX Console
Prisma
Prettier
Angular Language Service
Angular 17 Snippets/Angular Essentials (Version 17)

## Setup Github SSH

### Generate New SSH

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

### Adding new SSH to your Github Account

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

## Code Changes

### [Trunk Based Development](https://youtu.be/oNmcX6Gozg0)

```
1. npm run commit
2. git pull --rebase
3. git push
```

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.

## Icons

https://tabler.io/icons

## Troubleshooting

### Docker

1. Port 5432 already in use

```
Windows
npx kill-port 5432

MacOS
lsof -i :5432
sudo kill -9 <PID>
sudo pkill -u postgres
```
