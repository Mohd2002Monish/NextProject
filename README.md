# Book Management Web Application (Frontend)


<img width="939" alt="Annotation 2023-09-27 164637" src="https://github.com/Mohd2002Monish/NextProject/assets/97455677/413f4c26-e1e6-422b-9944-ea7ff0d28d0b">
<img width="586" alt="Annotation 2023-09-27 164736" src="https://github.com/Mohd2002Monish/NextProject/assets/97455677/149858bb-a135-44b4-80a5-cb30d2a60768">
<img width="506" alt="Annotation 2023-09-27 164835" src="https://github.com/Mohd2002Monish/NextProject/assets/97455677/4237fdd8-39b4-455c-9dcb-a53e6e91d602">

## Introduction

The Book Management Web Application is a user-friendly platform for organizing and managing a collection of books. It provides essential features for adding, editing, removing, and paginating books in the database. This application is designed to simplify the process of cataloging and maintaining a digital library.

## Features

1. **Pagination**: The application uses pagination to display a limited number of books (10 per page) at a time, making it easier for users to navigate through a large collection.

2. **Add New Books**: Users can add new books to the database by providing details such as title, author, genre, and description. These new additions are seamlessly integrated into the existing library.

3. **Edit Book Details**: Edit any book's details, including its title, author, genre, or description. This feature ensures that your book collection remains up-to-date with accurate information.

4. **Remove Books**: Remove books from the collection when they are no longer needed or have been duplicated. The application ensures smooth removal without affecting other entries.

## Getting Started

To run this web application locally, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/yourusername/book-management-app.git
   ```

2. Navigate to the project directory:

   ```
   cd book-management-app
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the application:

   ```
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to access the Book Management Web Application.

## Usage

1. **Adding a Book**: Click the "Add Book" button and fill in the required book details. Click "Submit" to add the book to your collection.

2. **Editing a Book**: Select a book from the list and click the "Edit" button. Update the book's information, and click "Save" to save your changes.

3. **Removing a Book**: To remove a book from your collection, select the book and click the "Remove" button. Confirm the action when prompted.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Node.js and Express.js 
- **Database**: MongoDB 


# Book Management API with Express.js (Backend)

This is a simple Express.js application that serves as a backend API for managing a collection of books. It provides endpoints for retrieving, adding, updating, and deleting books in a database. The API is designed to be used in conjunction with a front-end application for a book management system.

## Getting Started

To use this API, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/yourusername/book-management-api.git
   ```

2. Navigate to the project directory:

   ```
   cd book-management-api
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the server:

   ```
   npm start
   ```

The API will be running at `http://localhost:8080`.

## API Endpoints

### 1. GET /books

This endpoint retrieves a list of books. It supports pagination, with each page containing 10 books by default.

- Query Parameters:
  - `page`: (optional) The page number to retrieve.

### 2. GET /book/:id

This endpoint retrieves a single book by its unique identifier (`id`).

- URL Parameter:
  - `id`: The unique identifier of the book.

### 3. POST /books

This endpoint allows you to add a new book to the database.

- Request Body:
  - Provide the details of the book in JSON format, including fields like `title`, `author`, `genre`, and `description`.

### 4. DELETE /book/:id

This endpoint allows you to delete a book from the database by its unique identifier (`id`).

- URL Parameter:
  - `id`: The unique identifier of the book to be deleted.

### 5. PUT /book/:id

This endpoint allows you to update the details of a book in the database by its unique identifier (`id`).

- URL Parameter:
  - `id`: The unique identifier of the book to be updated.
- Request Body:
  - Provide the updated book details in JSON format.

## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework that simplifies building APIs.

## Error Handling

The API handles errors gracefully and provides appropriate error messages and status codes in responses.
## Contact

For any questions or inquiries, please contact:

- **Mohd Monish**
- Email: mohd2002monish@gmail.com
- GitHub: [github.com/Mohd2002Monish](https://github.com/Mohd2002Monish)

Certainly, here's a README file explaining the provided Express.js code:

