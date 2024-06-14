


# Used REST API endpoints implemented using Node.js and Express.js

completion time :- around 2-3 hours

### run npm install to install the required packages (express and postgress) and node server.js to run the server


To be able to retrieve the data from the Indian_Banks.sql file, I created a database using PostgreSQL, and used the queries mentioned in Indian_Banks.sql file to form the schema.

##### For the branches table, data insertion wasn't working properly with the code there, so I had to use COPY command and import data from the csv file, here is the command I used :-

#### COPY branches (ifsc, bank_id, branch, address, city, district, state) FROM 'F:\bank_branches.csv' DELIMITER ',' CSV HEADER;

Now, I created database.js to setup the connection pool.

After that, Created server.js using node and express, initialised 2 api end points:-
#### /banks :-
 This api endpoint is to retrieve the data of the banks. It uses "Select * FROM banks" to retrieve the data of all banks, converts it to json and sends it as a response

 #### /braches/:ifsc
 This api endpoint uses a dynamic path parameter to get the ifsc code from the request, then I used 'SELECT * FROM bank_branches WHERE ifsc = $1', [ifsc] . (Used a parameter for added security to prevent sql injection attacks). Lastly, it returns the data if it finds a branch for the ifsc code specified in the URI

### Checked the working via POSTMAN :- here's a screenshot for the first api request 
![image](https://github.com/JanmejayR/Assignment/assets/121809920/16caff9b-d7ad-4e59-a5e5-a24dcba5c106)

here's a screenshot for second api request :-
![image](https://github.com/JanmejayR/Assignment/assets/121809920/68cbc4fa-051d-4a9e-84fb-3025b41e006f)
