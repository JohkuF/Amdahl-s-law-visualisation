FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY src/ /app/src
COPY public/ /app/public
COPY package.json /app/
COPY tsconfig.json /app/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build/"]