FROM node:alpine

WORKDIR /app

COPY . .

#== BUILD STAGE ==#
RUN npm ci

RUN npm run build

#== RUN STAGE ==#

EXPOSE 3000

CMD ["npm", "run", "prod"]
