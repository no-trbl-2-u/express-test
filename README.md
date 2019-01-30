# express-test
This is a simple example of a dockerized express App. This will be the building block
of either an API endpoint or a hosted GraphQL server.

## List all machine IPs of Docker
```sh
docker-machine ls

OUTPUT:
NAME    ACTIVE     DRIVER       STATE     URL              SWARM   DOCKER  -V  ERRORS
default   *        virtualbox   Running   tcp://-.-.-.-:p           v-
```

Take the "URL" value (excluding the "p" val [:p]) and use that to access
the opened port after running your docker container..

*Within your dockerfile, you'll have a line that reads* ``` EXPOSE: ${PORT} ```
*This is the open port you can use to access the express instance running inside your docker container. So when ran, replace "p" with ${PORT}*




## Run
```sh
docker run -d -p ${PORT}:${PORT} ${IMAGE NAME}
```
*There's some PORT mapping you could do here, but I don't understand it yet, so no examples here.*

Now, just crack open your browser and navigate to
```${MACHINE IP}:${PORT}```

## Build
```sh
docker build -t ${USER NAME}/${IMAGE NAME}
```

## Login
```sh
docker login
```

## Push
```sh
docker push ${USER NAME}/${IMAGE NAME}
```

## Run from Docker Hub
```sh
docker run ${USER NAME}/${IMAGE NAME}
```



inner machine's IP: 192.168.99.100

96.245.83.116
172.17.0.2