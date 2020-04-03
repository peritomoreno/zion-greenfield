# Build project and use nginx to serve build folder
FROM tiangolo/node-frontend:10 as build-stage
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install --silent
COPY . /usr/src/app/
RUN npm run build

FROM nginx:1.15
COPY --from=build-stage /usr/src/app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# Build image
# In client folder
# docker build -t zion-greenfield:1.1 .
# To run this image
# docker run -p 4000:80 zion-greenfield:1.1

# TODO: customize nginx.config