FROM node:14-alpine

# Add the following line 
ENV CI=true

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]
