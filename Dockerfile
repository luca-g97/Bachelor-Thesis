ARG ALPINE_VERSION=3.17
FROM alpine:${ALPINE_VERSION}
#Changes are marked with a big EDITED in front!
LABEL Maintainer="Tim de Pater <code@trafex.nl>"
LABEL Description="Lightweight container with Nginx 1.22 & PHP 8.1 based on Alpine Linux."
# Setup document root
WORKDIR /var/www/html

# Install packages and remove default server definition
RUN apk add --no-cache \
  curl \
  nginx \
  php81 \
  php81-ctype \
  php81-curl \
  php81-dom \
  php81-fpm \
  php81-gd \
  php81-intl \
  php81-mbstring \
  php81-mysqli \
  php81-opcache \
  php81-openssl \
  php81-phar \
  php81-session \
  php81-xml \
  php81-xmlreader \
  supervisor \
  #EDITED  
  sqlite php81-sqlite3 apache2-utils


# Configure nginx - http
COPY NecessaryFiles/nginx.conf /etc/nginx/nginx.conf
# Configure nginx - default server
COPY Config/Vulnerable.conf /etc/nginx/conf.d/

# Configure PHP-FPM
COPY NecessaryFiles/fpm-pool.conf /etc/php81/php-fpm.d/www.conf
COPY NecessaryFiles/php.ini /etc/php81/conf.d/custom.ini

# Configure supervisord
COPY NecessaryFiles/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

#EDITED
COPY Frontend /var/www/html/
COPY Config /etc/nginx/Config/

#Create all user passwords and save them in a file
RUN htpasswd -c -b /etc/nginx/VulnerableHtpasswd root root && htpasswd -b /etc/nginx/VulnerableHtpasswd test test
RUN htpasswd -c -b /etc/nginx/SecureHtpasswd root root

#EDITED Create softlinks for demonstration purposes
RUN ln -s / root

#EDITED Create new user
RUN addgroup -S testers && adduser -S test -G testers

# Edited Make sure files/folders needed by the processes are accessable when they run under the test user
RUN chown -R test.testers /var/www/html /run /var/lib/nginx /var/log/nginx

#Edited Give test user permissions which are needed for CommandProcessor-Tasks
RUN chown -R test.testers /etc/nginx/conf.d

#EDITED Switch to use a non-root user from here on
USER test

#EDITED (This is now stored in Imagefiles since it causes big security threats) - Add application
#COPY --chown=nobody src/ /var/www/html/..

# Expose the port nginx is reachable on
EXPOSE 8080

# Let supervisord start nginx & php-fpm
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

# Configure a healthcheck to validate that everything is up&running
HEALTHCHECK --timeout=10s CMD curl --silent --fail http://127.0.0.1:8080/fpm-ping
