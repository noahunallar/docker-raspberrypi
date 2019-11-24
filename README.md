# How to run Docker on a Raspberry Pi 4!

Because Docker isn't officially supported by Debian Buster, official Docker download script should be modified to be able to download and run Docker on Debian Buster. 

Modified script can be found in **get-docker.sh**.
All you need to do is to run: 

`
sh get-docker.sh
`

Once it's done, run the command below to confirm that Docker has been downloaded successfully: 

`
docker --version
`


