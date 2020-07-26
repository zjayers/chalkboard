FROM node:alpine
WORKDIR '/app'
COPY . /app
RUN yarn install
EXPOSE 3000
RUN yarn build

CMD ["yarn", "start"]
