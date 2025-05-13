FROM node:18.17.0-alpine AS base

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile && yarn cache clean

FROM node:18.17.0-alpine AS build

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules

COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn build

FROM node:18.17.0-alpine AS production

WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/.next/server ./.next/server

EXPOSE 3000

CMD ["node", "server.js"]