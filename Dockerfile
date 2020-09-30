FROM node:lts-alpine as worker

RUN mkdir /hwpViewer

WORKDIR /hwpViewer

ADD ["yarn.lock", "package.json", "./"]
ADD ./src /hwpViewer/src
ADD ./public /hwpViewer/public
RUN env
RUN yarn
RUN yarn build

FROM nginx:stable-alpine

COPY _/default.conf /etc/nginx/conf.d/

COPY --from=worker /hwpViewer/build /usr/share/nginx/html
RUN env
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]