## Take Home Exercise

So we can get a feel for your problem solving skills, we'd like you to work through a short exercise.

Please limit yourself to no more than a few hours. The intent of the exercise is not for you to complete all the tasks, what we are interested in is 
getting a feel for how you think and approach solving problems.

## Some advice:
- The exercise is purposely open-ended and there isn't a right or wrong answer. Just approach the problem the way you feel is right.
- Add comments where you can to communicate your thoughts, assumptions, decisions, etc. It’s helpful for us to learn about your thought processes 
when working through problems.
- Commit your progress regularly to your working branch as its a great way for us to see how your thinking develops as you work.
- Feel free to use any technologies, frameworks and techniques you like.
- Don’t be afraid to ask questions or ask for help if you need it.

## Preparation

Before starting this task, we recommend that you have:
- Your favourite computer and development tools to hand.
- Installed an up-to-date version of [Docker Desktop](https://docs.docker.com/get-docker/), although you can use another container runtime if you prefer!
- A few hours of un-distracted time ahead of you.
- Access to the internet.
- A strong coffee (or mug of tea, if you prefer!).

## Exercise

This repository contains an early prototype of an ESG reporting application. The application is very simple, delivering only the minimal functionality 
that a user needs to to create and edit a report with 1 or more ESG metrics. The focus so far has been on development, and there has not been any 
consideration for how to get the application 'production ready' and deployed so the product team can start user trials.

The application consists of...
- A frontend built using TypeScript and React, which can be found in the `client` directory.
- A backend built using TypeScript, Node.js and Express.js which can be found in the `server` directory.
- A basic database, that runs in a Postgres container and is seeded with some basic data which the development team have been using locally.

Now, they need your help to get the app deployed to an environment, hosted upon some cloud infrastructure which you have provisioned.

## Requirements

Your remit is to create a proof-of-concept cloud infrastructure hosting environment, along with a basic deployment pipeline that meets the below 
requirements...
​
1. Enables the app to be hosted on and published to a public url;
2. Allows the app to be built automatically and deployed when a change is made to the codebase; and
3. Acts as a foundation that can acts as a starting point for building out a secure and more comprehensive platform on which to scale the product.

## Setting up

Before you begin...
​
1. Clone this repository.
2. Create an `infra` folder within the repo to contain your infrastructure code and any related setup or installation info.

## Task: Build the infrastructure

Create the infrastructure setup to fulfil the requirements described above within the repo. Your output should include the infrastructure as code 
you have developed to fulfil the task.

**Note:** You're not expected to create any real cloud infrastructure for this task, but we do encourage you to use something locally to develop and test 
your solution.

## Stretch Goals
​
If you find the task above easy, then feel free to improve your submission. Here are some ideas:
- Extend your solution to support multiple environments, if not done so already;

## Running the Application

If you want to run the application for yourself on your local machine, you can follow the same steps as the developers...
- run `docker compose up` to build and launch the application.

After a few seconds, the application will start and the frontend can be accessed via your browser by navigating to http://localhost:3000. The backend can be accessed on http://localhost:3001.

Once finished, you can stop and remove the database container by running `docker compose rm`.

## Wrapping up

When you're finished, please:

1. Push your code to a new branch on the remote repository.
2. Create a new pull request.

If you wish to supply instructions on how to run or understand the construction of your code, then please provide those in a new README.md file within a `docs` folder.

Please share public link to your repo with completed exercise.