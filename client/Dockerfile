# Running project in development environment

FROM node:10
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .

EXPOSE 3000
CMD npm start

# Build image
# In client folder
# docker build -t zion-greenfield:1.0 .
# To run this image
# docker run -it -p 80:3000 zion-greenfield:1.0

