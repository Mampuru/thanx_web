FROM node:14.15 as build
WORKDIR /app
COPY package*.json ./
RUN npm run install
COPY ./ ./
RUN npm run build
RUN npm run build:tailwind

FROM nginx as production
RUN mkdir /app
COPY --from=build /app/dist /app
COPY docker/nginx.conf /etc/nginx/nginx.conf
