# Bulder
FROM node:16-alpine AS builder
RUN apk update

WORKDIR /app

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=api --docker


# Installer
FROM node:16-alpine AS installer
RUN apk update

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
COPY turbo.json turbo.json

RUN yarn install
RUN yarn turbo run build --filter=api...


# Runner
FROM node:16-alpine AS runner

WORKDIR /app

COPY --from=installer /app .
CMD ["yarn", "deploy:api"]