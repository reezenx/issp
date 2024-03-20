# ISSP

## Source Code & Environment

### Angular Template

- git clone https://github.com/reezenx/abcisspxyz-0.git
- npm install
- npm run start

### Main Project

- git clone https://github.com/reezenx/issp.git
- npm install
- docker-compose up
- npx prisma migrate dev
- npm run dev

Client - http://localhost:4200/
Swagger - http://localhost:3000/api
Prisma Studio - http://localhost:5555/

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
