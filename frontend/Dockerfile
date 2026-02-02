FROM node:18

COPY . /app
WORKDIR /app

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]