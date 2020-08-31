# base frontend + backend
FROM node:latest

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# copy the whole project
COPY . .
ENV PORT=80 

WORKDIR /usr/src/app/angular-src
RUN npm ci && npm run build --prod --output-path=../public

WORKDIR /usr/src/app
RUN npm install
#If you are building your code for production use:
#RUN npm ci --only=production
EXPOSE 80
CMD ["node", "app.js"]


