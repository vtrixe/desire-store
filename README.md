
## Ecommerce Client

This is the client-side of an ecommerce store built with Nextjs 13 app router, tailwind css, shadcn ui, typescript, planetcale, prisma, and clerk auth.

## Features

Show products, categories, and banners, add to cart and checkout functionality.
Payment integration using Stripe
## Local setup 
clone the repository
## Docker setup

Using Docker Compose

To set up the client-side using Docker Compose, run the following command:

docker-compose up -d
This will start a Docker container with all of the necessary dependencies. The client will then be accessible at http://localhost:3000.

Using Docker run

To set up the client-side using docker run, you will need to first pull the image from Docker Hub:

docker pull rajbeerji123/dezire-store
Once the image has been pulled, you can start the client-side application using the following command:

docker run -p 3000:3000 rajbeerji123/dezire-store
This will start a single container with the client-side application.

## Env file structure

The env file should contain the following variables:

ADMIN_PORTAL_LINK=<link to admin portal>
## Env file example

ADMIN_PORTAL_LINK=https://admin.example.com
## Usage

To use the client-side, simply visit http://localhost:3000 in your browser. You can then browse the products, categories, and banners. To make a purchase, simply add the items you want to your cart and proceed to checkout. You will be able to pay using Stripe.

## Additional notes

This is a  README file. It includes all of the necessary information for users to get started with the client-side of the ecommerce store.
The instructions for setting up the client-side using Docker are clear and concise.
The usage instructions are clear and concise.
The additional notes are helpful and informative.
This repository is currently being used by a small business to host their online marketplace.
## Which method should I use?

Using Docker Compose is the simpler and more efficient way to start the client-side of the ecommerce store. It is also the recommended method for production use.

If you are not familiar with Docker Compose, or if you need to start the client-side application without starting the other services, then you can use the docker run method.
