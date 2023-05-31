# TechTrove

TechTrove is a web application that allows users to search for phones by brand or model.

## Features

- Users can select an item to view detailed specifications such as the operating system, dimensions, battery, weight, and more.
- The project utilizes JSON files to render the page with data and provides the ability to add products to the cart, displaying the number of items added.
- The cart data is persisted using local storage, ensuring that the user's selections are saved even if they leave the page.

## Technologies Used

- `React`: A popular JavaScript library for building user interfaces.
- `Vite`: A fast and lightweight build tool for modern web applications.
- `Jest`: A JavaScript testing framework used for unit testing the project.
- `Husky`: A Git hook manager that allows developers to automate tasks and enforce pre-commit and pre-push hooks in their Git repositories.

# Getting Started

To use this repository and run the TechTrove web application, please follow these steps:

1. Clone the repository to your local machine using the following command:

```console
git clone git@github.com:marcelabpetroli/tech-trove.git
```

2. Install the dependencies:

```console
npm install
```

3. Start the project:

```console
npm run dev
```

# Persistence

TechTrove uses local storage to persist the cart data. This means that if you add items to the cart and then leave the page or close the browser, your selections will be saved and can be retrieved when you revisit the application.

Please note that local storage is specific to each browser and device. If you switch to a different browser or device, the cart data will not be transferred.
