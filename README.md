This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# NextAppwrite Authentication Project

This project is a simple authentication system built with Next.js and Appwrite. It allows users to sign up, log in, and access a protected dashboard. The project includes email/password authentication as well as OAuth authentication using Google and GitHub.

## Features

- User registration with email and password.
- User login with email and password.
- OAuth login with Google and GitHub.
- Protected dashboard accessible only to logged-in users.
- Context-based user state management.
- Responsive design using Material-UI.

## Technologies Used

- Next.js
- Appwrite
- Material-UI
- TypeScript

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v7 or later)
- Appwrite server

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vibhaw1904/XeroCode_task.git
    cd XeroCode_task
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the following:

    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=<YOUR_APPWRITE_ENDPOINT>
    NEXT_PUBLIC_APPWRITE_PROJECT=<YOUR_APPWRITE_PROJECT_ID>
    
    ```

    Replace `<YOUR_APPWRITE_ENDPOINT>` with your Appwrite server endpoint and `<YOUR_APPWRITE_PROJECT_ID>` with your Appwrite project ID.

4. **Configure OAuth Providers in Appwrite:**

    - **Google:**
        - Create a new OAuth provider in Appwrite.
        - Set the redirect URLs to `http://localhost:3000/dashboard` and `http://localhost:3000`.

    - **GitHub:**
        - Create a new OAuth provider in Appwrite.
        - Set the redirect URLs to `http://localhost:3000/dashboard` and `http://localhost:3000`.

### Running the Project

1. **Start the development server:**

    ```bash
    npm run dev
    ```

2. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

### Building for Production

To create an optimized production build:

```bash
npm run build


