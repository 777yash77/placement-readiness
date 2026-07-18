Dynamic JSON-Driven Form Generator
Overview

This project is a simple React/Next.js application that generates a form dynamically using a JSON schema. Instead of hardcoding form fields, the application reads field definitions from a JSON object and renders them automatically.

Features

* Dynamic form generation from JSON
* Input validation (Age must be 18 or older)
* Conditional fields
* Displays the "Company Name" field only when the "Employed" checkbox is selected
* Easy to extend by adding new fields to the JSON schema

Technologies Used

* Next.js
* React
* JavaScript
* CSS

Project Structure

```text
app/
├── components/
│   └── FormGenerator.js
└── page.js
```

Form Fields

| Field        | Type     | Validation                                 |
| ------------ | -------- | ------------------------------------------ |
| Full Name    | Text     | Required                                   |
| Age          | Number   | Must be 18 or older                        |
| Employed     | Checkbox | Optional                                   |
| Company Name | Text     | Displayed only when "Employed" is selected |

How It Works

1. The application reads a JSON schema containing the form fields.
2. Each field is generated automatically based on its configuration.
3. Conditional rules determine whether specific fields should be displayed.
4. The form validates the age field and ensures the user is above the required age limit.

Running the Project

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application:

```text
http://localhost:3000
```
