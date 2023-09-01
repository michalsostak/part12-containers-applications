FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci
ENV REACT_APP_BACKEND_URL='http://localhost:8080/api'

RUN CI=true npm test
RUN npm run build

# using serve instead of nginx here
# RUN npm install -g serve
# CMD ["serve", "build"]

# copy to nginx for serving static files
# this doesn't seem to work, build isnt copied to nginx container :(
FROM nginx:1.20.1
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
