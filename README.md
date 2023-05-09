# TaskTracker
This Application is an experimental project to discover now tools and framework,
Front-End:
- Angular

Back-End Stack:
- Node js, Express - TypeORM, PostgreSQL
- PHP, Laravel - Eloquent,  MySQL

# Project Setup Command Lines
npm i dotenv
# Angular Setup Command Lines
Ensure your CLI inside the correct file <Angular>
npm install -g @angular/cli  
npm install -g ts-node 
npm install -g typescript  
# To run Angular 
Ensure your CLI inside the correct file <Angular>
ng serve

# NodeJs Setup Command Lines
Ensure your CLI inside the correct file <NodeJS>
npm install --save express
npm install --save pg
npm install --save pg-hstore  
npm install --save body-parser
npm install -g nodemon
npm install @types/nodemon
npm install cors


# To run NodeJs 
Ensure your CLI inside the correct file <NodeJS>
npm run devStart

# NodeJs Setup Command Lines
Ensure your CLI inside the correct file <Laravel>

# Set up database (Postgressql)
You may create a new database by the name of tracker of keep on default database "postgres" in my case i kept the default one, if you would like to change the database then ensure to modify the code at db.ts folder

connect to your server in postgres then create new table by the name of tasks \c tracker CREATE TABLE tasks (id SERIAL PRIMARY KEY, task VARCHAR(255), day VARCHAR(255), reminder BOOLEAN);
  ![image](https://user-images.githubusercontent.com/86645986/231710307-ff33c57d-9a59-431f-885c-e9d64c79cccd.png)

Create an .env file as based in the .env.example file.

# To run Laravel
Ensure your CLI inside the correct file <Laravel>


