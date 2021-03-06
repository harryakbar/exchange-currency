# base image
FROM node:9.6.1

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /usr/src/app
RUN npm install --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]