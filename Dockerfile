FROM node:18.11.0-alpine
WORKDIR .
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
ENV MONGO_DB_URI=$MONGO_DB_URI
ENV JWT_TOKEN=$JWT_TOKEN
CMD ["npm","run","start:dev"]
