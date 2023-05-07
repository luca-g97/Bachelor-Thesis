#!bin/sh

#Remove all files in directory conf.d - autoprompt answers for filedeletion with yes
rm -r /etc/nginx/conf.d/ -f

#Copy the secure.conf file into conf.d folder to use as nginx config
cp /etc/nginx/Config/secure.conf /etc/nginx/conf.d/

#Reload nginx with the secure config
nginx -s reload

#Tell the user that you changed the config
echo "Reloaded NGINX with secure config"

