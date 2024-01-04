FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=build /app/.next /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]