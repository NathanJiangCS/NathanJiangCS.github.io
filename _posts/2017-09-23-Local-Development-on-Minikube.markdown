---
layout: post
title: Local Development with Minikube
categories: Software
date: 2017-09-23T20:31:24.000Z
---
# Local Development with Minikube
## Part 1 - What is Minikube and Why Use It?
As Microservice Architecture grows more prominent and becomes a preferred way for developers to create enterprise applications, the need to construct and manage solutions in modular pieces becomes ever more evident. And although the benefits of constructing a microservice for each component are plentiful, it leaves developers wrestling with a slew of small services, each needing to be running and talking with each other in a particular way. This can quickly become disastrous, especially if one point of failure means the entire entity cannot function. It would be magical if there was a way to test the desired functionality on a local machine, with all the integral services operating normally and communicating with each other.

Luckily for us, there is Kubernetes and Minikube. Kubernetes provides a simple orchestration system to organize and monitor your applications. Minikube takes this concept and minimalizes it, enabling developers to mobilize and orchestrate microservices locally, on a local VM. Together, they provide the experience of a "Backend-in-a-Box". Deployments are made to the individual microservice codebase -- into a single-node "cluster" (a cluster of one). This node (the local VM) will have all microservices running within as Pods, each exposed to the others through Kubernetes Services.

## Part 2 - Setting Up Minikube on Your Local Machine
Just as a note, I am working on macOS Sierra (version 10.12.6).
### Installing the Requirements
There are a few requirements that need to be satisfied in order to get Minikube up and running. These include:
- A virtual machine system. We will use VirtualBox since it is the default VM driver for Minikube. Other alternatives include VMWareFusion, KVM, and Xhyve.
- Docker
- Kubernetes CLI

I will quickly run through how to install each of these requirements; however, if you already have what you need, skip to the next sub-section where we will set up Minikube.

#### VirtualBox
Visit the [VirtualBox downloads page](https://www.virtualbox.org/wiki/Downloads) and download the latest stable OS X binary. After installing, you can check that the installation was successful by running `vboxmanage --version` and checking that your installed version is outputted.

#### Docker
Download the [Docker image](https://download.docker.com/mac/stable/Docker.dmg) and follow the installation instructions provided. To confirm that you have installed Docker properly, run `docker version`. If you see a `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?` message, it simply means you haven't started Docker on your computer yet.

#### Kubernetes CLI
On a Mac, you can simply run `brew install kubernetes-cli`. To verify your installation, run `kubectl version`.

### Installing Minikube
Now that you have gotten the requirements installed, it is time to get Minikube running. On Mac, you can install Minikube via `brew cask install minikube` (requires cask). 

Once that has finished, we can run `minikube start` to start the virtual machine and initialize the local cluster. If you want to change the configuration of your Minikube VM (such as CPUs, disk-size, or memory), there are several flags you can pass to `minikube start` (to see these options, you can run `minikube config --help`). 

You should see the following (or similar) output which indicates that Minikube is setting up your local cluster.
```
$ minikube start
Starting local Kubernetes v1.7.0 cluster...
Starting VM...
SSH-ing files into VM...
Setting up certs...
Starting cluster components...
Connecting to cluster...
Setting up kubeconfig...
Kubectl is now configured to use the cluster.
```

Now, if you try `minikube status`, you should encounter (possibly with a different IP):
```
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.99.100
```

Also, your Kubernetes-CLI should be configured to use the `minikube` context. Confirm this by trying `kubectl config current-context`.

If all the outputs match those on your end, congratulations ~ you've successfully installed Minikube and Kubernetes on your local machine! In the next post, we will cover setting up Kubernetes Deployments for your microservices and exposing them using Services.

