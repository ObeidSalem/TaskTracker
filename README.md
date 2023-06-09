# TaskTracker
This Application is an experimental project to discover now tools and framework,
Front-End:
- Angular
![image](https://user-images.githubusercontent.com/86645986/231354998-97c25533-9c50-4e66-b63a-36841123511b.png)
![image](https://user-images.githubusercontent.com/86645986/231355040-dc5b39b9-05c5-4015-af76-2e310933d5c1.png)
![image](https://user-images.githubusercontent.com/86645986/231355138-e67c90d1-ea01-4d4d-9e3d-0047d957a6b4.png)

Back-End Stack:
- Node js, Express - TypeORM, PostgreSQL
- PHP, Laravel - Eloquent,  MySQL

Note that, the local host url in the front end should be adjusted according to where you are serving your back end

For Angular that could be adjusted at config.ts file at the path of: task_tracker\Angular\src\app\config.ts

# Project Setup Command Lines
npm i dotenv
# Angular Setup Command Lines
Ensure your CLI inside the correct file Angular
npm install -g @angular/cli  
npm install -g ts-node 
npm install -g typescript  
# To run Angular 
Ensure your CLI inside the correct file Angular
ng serve

# NodeJs Setup Command Lines
Ensure your CLI inside the correct file NodeJS
npm install --save express
npm install --save pg
npm install --save pg-hstore  
npm install --save body-parser
npm install -g nodemon
npm install @types/nodemon
npm install cors

# To run NodeJs 
Ensure your CLI inside the correct file NodeJS
npm run devStart

# Set up database (Postgressql) for NodeJS
You may create a new database by the name of tracker of keep on default database "postgres" in my case i kept the default one, if you would like to change the database then ensure to modify the code at db.ts folder

connect to your server in postgres then create new table by the name of tasks \c tracker CREATE TABLE tasks (id SERIAL PRIMARY KEY, task VARCHAR(255), day VARCHAR(255), reminder BOOLEAN);
  ![image](https://user-images.githubusercontent.com/86645986/231710307-ff33c57d-9a59-431f-885c-e9d64c79cccd.png)

Create an .env file as based in the .env.example file.



# Laravel Setup Command Lines
Ensure your CLI inside the correct file Laravel
# To run Laravel
Ensure your CLI inside the correct file <Laravel>
php artisan serve

# Set up database (MySQL) for Laravel
You may create a new database by the name of laravel (if you would like to change the name, change it to at .env) of keep on default
ensure the .env file has been setup correctly, 
run the below command to create the tasks table at MySQL:
php artisan migrate

