FROM nginx:alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/mime.types /etc/nginx/mime.types
COPY index.html style.html modern.html old-school.html robots.txt sitemap.xml /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]