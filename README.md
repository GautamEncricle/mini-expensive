# MINI EXPENSIVE APP

## Overview

The system is allow multiple users in a group to add expenses, split them (equally or unequally), and calculate who owes whom how much.

## Features

- User signup and login with JWT authentication.
- JWT token stored as HTTP-only cookie for secure authorization.

## Environment Variables FOR BACKEND_URL

PORT=3000 (back-end)
DB_URL=mongodb://localhost:27017/mini-expense
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
NODE_ENV=development

## Environment Variables FOR FRONTEND

VITE_BACKEND_URL=http://localhost:3000

````

## Setup and Running

1. Install dependencies:

```bash
npm install
````

2. Set up MongoDB:

- Ensure MongoDB is running locally at the URL specified in `DB_URL`.
- Note: Transactions require MongoDB replica set configuration. If using a standalone MongoDB, some booking operations using transactions may fail.

3. Run the server:

```bash
npm run start
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/signup` - Register a new user.
- `POST /api/v1/auth/login` - Login user, returns JWT token as HTTP-only cookie.

### Group

- `POST /api/v1/group` - Create a new group.
- `GET /api/v1/group/:id` - Get group by ID.

### Expense
- `POST /api/v1/expense` - Add a new expense to a group.

## Notes

- The JWT token is set as an HTTP-only cookie named `token` during login.
- Booking service uses MongoDB transactions; ensure your MongoDB supports transactions (replica set).
- If using standalone MongoDB, consider refactoring booking service to avoid transactions or configure MongoDB as a replica set.

## Testing

- Test authentication by signing up and logging in.
- Verify the `token` cookie is set on login.
- Test protected routes with the token cookie.
- Test booking creation, confirmation, cancellation, and retrieval.
- Handle error cases such as invalid tokens, insufficient tickets, and non-existent bookings.
