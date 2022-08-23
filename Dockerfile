FROM node:16.16.0

EXPOSE 4200

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g @angular/cli  

RUN npm install

COPY . .

RUN ng analytics off --global

CMD ng serve --host 0.0.0.0
