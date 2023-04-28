#!bin/sh
rm -r /etc/nginx/conf.d/
mkdir /etc/nginx/conf.d/
cp /etc/nginx/Configs/secure.conf /etc/nginx/conf.d/
nginx -s reload
echo "Reloaded NGINX with secure config"

