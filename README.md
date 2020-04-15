# Discord: melk0sha

### **Проверяющие!** У меня несколько коммитов после дедлайна, я предлагаю руководствоваться правилами JS-этапа, где за просрочку до 3-х дней снимали -10 баллов.

# Express REST Service

## OVERVIEW

## Task 1. Express REST Service

Let's try to create a competitor for Trello!

**Create an [Express](https://expressjs.com/ru/) application, the application should operate with the following resources:**

- User (with attributes):
  ```javascript
  {
    id, name, login, password;
  }
  ```
- Board (set of columns):
  ```javascript
  {
    id, title, columns;
  }
  ```
- Column (set of tasks):
  ```javascript
  {
    id, title, order;
  }
  ```
- Task:
  ```javascript
  {
    id,
      title,
      order,
      description,
      userId, //assignee
      boardId,
      columnId;
  }
  ```

**Details:**

1. For User, Board and Task REST endpoints with separate router paths should be created

   - `/users`
     - `GET /users` - get all users (remove password from response)
     - `GET /users/:id` - get the user by id (ex. “/users/123”) (remove password from response)
     - `POST /users` - create user
     - `PUT /users/:id` - update user
     - `DELETE /users/:id` - delete user
   - `/boards`
     - GET all
     - GET by id
     - POST
     - PUT
     - DELETE
   - `/tasks`
     - GET all by boardId
     - GET by id
     - POST
     - PUT
     - DELETE

2. When somebody DELETE Board, all its Tasks should be deleted as well.

3. When somebody DELETE User, all Tasks where User is assignee should be updated to put userId=null.

4. For now, these endpoints should operate only with in-memory (hardcoded) data, in the next tasks we will use a DB for it. You may organize your modules with the consideration that the data source will be changed soon.

5. An application/json format should be used for request and response body.

6. Do not put everything in one file - use a separate file for application creation (bootstrapping), for controllers (routers) and code related to business logic. Also split files to different modules depends on a domain (user-related, board-related, etc...).

7. To run the service “npm start” command should be used.

8. Service should listen on PORT 4000.

## Task 2. Logging & Error Handling

Add logging functionality to already existing REST service.

1. Add express middleware which will log incoming requests to service (url, query parameters, body).

2. Add express middleware which will log all unhandled errors and return a standard message with HTTP code 500 (Internal Server Error).

3. Add errors handling to process.on(‘uncaughtException’,...).

4. Add Unhandled promise rejection listener to log error

5. console.log or writing to a file can be used for logging. Any third-party logging library can also be used for this purpose.

---

## HOW TO INSTALL

1. Clone this repository to your local machine.
2. Go to folder.
3. Run `npm install`.

---

## USAGE EXAMPLE

1. Run `npm start` in the first terminal - you will start the server.
2. Run `npm test` in the second terminal - you will see completed tests.
3. Open `http://localhost:4000/doc/` to see Swagger UI.

---

## TOOLS USING

**[Node.js](https://nodejs.org/en/)**, **JavaScript**, **[Express](https://expressjs.com/ru/)**, **[Swagger](https://swagger.io/)** and **[uuid](https://www.npmjs.com/package/uuid)** were used here.

---

### DEVELOPMENT

@ 2020 Diana Ivanova (@melk0sha)
