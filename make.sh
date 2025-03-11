#!/run/current-system/sw/bin/bash


if [ "$1" = "start" ] && [ "$2" = "db" ]; then
   echo $(docker run \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    -d mongo)
fi

if [ "$1" = "build" ] && [ "$2" = "frontend" ]; then
    (cd frontend && npm run build)

    mv ./frontend/dist ./backend
    mv ./backend/dist/vite.svg ./backend/dist/assets
fi


