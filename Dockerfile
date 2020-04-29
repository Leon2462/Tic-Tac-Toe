FROM node:latest as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --only=prod
COPY ./ /app
RUN npm run build

FROM nginx:latest

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
