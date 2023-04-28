#!bin/sh
rm -r /etc/nginx/conf.d/
mkdir /etc/nginx/conf.d/
cp /etc/nginx/Configs/vulnerable.conf /etc/nginx/conf.d/
nginx -s reload
echo "Reloaded NGINX with vulnerable config"

