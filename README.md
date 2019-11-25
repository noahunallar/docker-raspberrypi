# How to run Docker on a Raspberry Pi 4!

Because Docker isn't officially supported by Debian Buster, official Docker download script should be modified to be able to download and run Docker on Debian Buster. 

Modified script can be found in **get-docker.sh**.
All you need to do is to run: 

```console
root@raspberrypi:~$ sh get-docker.sh
```

Once it's done, run the command below to confirm that Docker has been downloaded successfully: 

```console
root@raspberrypi:~$ docker --version
```

**BONUS**
To test your installation, or run a simple nodeJS server, refer to  **Dockerfile** and **index.js** files. 
Run the command below to build your Docker image:

```console
root@raspberrypi:~$ docker build -t node-webserver .
```

To run your Docker image: 

```console
root@raspberrypi:~$ docker run --rm -it -p 80:80 node-webserver
```

Go to your browser and type `IPaddressofyourPI` and hit Enter. 

You will see the welcome message from your server: 

**Hello Node.js server! - 2019-11-25T00:58:00.299Z**

That's it! Congrats!

