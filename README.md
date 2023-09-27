To start this up, you will need to have Docker client installed and wls installed..

https://www.docker.com/products/docker-desktop/

Link for downloading docker client
After you installed docker client, you will need to start Docker.
After that you need to open root folder and type 'docker-compose up' command.
This command will build 2 containers: one for client and second for server

Server has one endpoint that communicate with external API source (https://api.etherscan.io)
Client catches that endpoint shoot and render data on web app (client)

Rest is history... :)
