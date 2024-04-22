
FROM node:18-alpine

ARG DATABASE_URL
 
WORKDIR /user/src/app
 
COPY . .
 
RUN npm ci --omit=dev
 
RUN npm run production:build
 
USER node
 
CMD ["npm", "run", "serve:prod"]