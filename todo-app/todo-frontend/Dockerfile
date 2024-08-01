FROM node:20 AS stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm test

RUN npm ci && npm run build

FROM nginx

COPY --from=stage /usr/src/app/dist /usr/share/nginx/html

