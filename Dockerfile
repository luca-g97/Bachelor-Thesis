FROM trafex/php-nginx

USER root

RUN apk update 
RUN apk add --no-cache sqlite php81-sqlite3

#Remove default.conf and then set Nginx up with vulnerable config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY Config/vulnerable.conf /etc/nginx/conf.d/

#Move dangerous files generated from base-image into Testdata-Folder
RUN mv /var/www/html/ /var/www/Imagefiles/
RUN mv /var/www/Imagefiles /var/www/html/Imagefiles/

#Copy Websites into folder
COPY Frontend /var/www/html/
COPY Config /etc/nginx/Config/

#Grant all permissions needed for changes - here: allow deletion of files in conf.d
RUN chmod 777 /etc/nginx/conf.d/

#Create softlinks for demonstration purposes
RUN ln -s /etc/nginx/Config/secure.conf /var/www/html/secureConfig.txt
RUN ln -s /etc/nginx/Config/vulnerable.conf /var/www/html/vulnerableConfig.txt
RUN ln -s /etc/nginx/Config/changeToSecure.sh /var/www/html/BrokenAccessControl/changeToSecure.sh
RUN ln -s /etc/nginx/Config/changeToVulnerable.sh /var/www/html/BrokenAccessControl/changeToVulnerable.sh
RUN ln -s / admin

#Set user to nobody, so he has no root privilidges
USER nobody

#ARG ALPINE_VERSION=3.17
#FROM alpine:${ALPINE_VERSION}
##Changes are marked with a big EDITED in front!
#LABEL Maintainer="Tim de Pater <code@trafex.nl>"
#LABEL Description="Lightweight container with Nginx 1.22 & PHP 8.1 based on Alpine Linux."
## Setup document root
#WORKDIR /var/www/html
#
## Install packages and remove default server definition
#RUN apk add --no-cache \
#  curl \
#  nginx \
#  php81 \
#  php81-ctype \
#  php81-curl \
#  php81-dom \
#  php81-fpm \
#  php81-gd \
#  php81-intl \
#  php81-mbstring \
#  php81-mysqli \
#  php81-opcache \
#  php81-openssl \
#  php81-phar \
#  php81-session \
#  php81-xml \
#  php81-xmlreader \
#  supervisor \
#  #EDITED  
#  sqlite php81-sqlite3
#
#
## Configure nginx - http
#COPY NecessaryFiles/nginx.conf /etc/nginx/nginx.conf
## Configure nginx - default server
#COPY Config/vulnerable.conf /etc/nginx/conf.d/
#
## Configure PHP-FPM
#COPY NecessaryFiles/fpm-pool.conf /etc/php81/php-fpm.d/www.conf
#COPY NecessaryFiles/php.ini /etc/php81/conf.d/custom.ini
#
## Configure supervisord
#COPY NecessaryFiles/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
#
##EDITED
##COPY Frontend /var/www/html/
##COPY Config /etc/nginx/Config/
#
##EDITED Create softlinks for demonstration purposes
##RUN ln -s /etc/nginx/Config/secure.conf /var/www/html/secureConfig.txt
##RUN ln -s /etc/nginx/Config/vulnerable.conf /var/www/html/vulnerableConfig.txt
##RUN ln -s / admin
# 
## Make sure files/folders needed by the processes are accessable when they run under the nobody user
##RUN chown -R root.root /var/www/html /run /var/lib/nginx /var/log/nginx
#
##EDITED Switch to use a non-root user from here on
#USER root
#
## Add application
##COPY --chown=nobody src/ /var/www/html/
#
## Expose the port nginx is reachable on
#EXPOSE 8080
#
## Let supervisord start nginx & php-fpm
#CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
#
## Configure a healthcheck to validate that everything is up&running
#HEALTHCHECK --timeout=10s CMD curl --silent --fail http://127.0.0.1:8080/fpm-ping
