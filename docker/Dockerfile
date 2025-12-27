# Dockerfile
FROM nginx:alpine

WORKDIR /usr/src/app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./mime.types /etc/nginx/mime.types

EXPOSE 80

CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
