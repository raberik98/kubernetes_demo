#!/run/current-system/sw/bin/bash


if [ "$1" = "start" ] && [ "$2" = "db" ]; then
   echo $(docker run \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    -d mongo)
fi


