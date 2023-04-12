FROM trafex/php-nginx

USER root

RUN apk update 
RUN apk add --no-cache sqlite php81-sqlite3

USER nobody

# Copy Websites into folder
COPY Frontend /var/www/html/
