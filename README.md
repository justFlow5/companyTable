# Company Table

## Description

The website's purpose is to fetch data of companies using a given API and presents its results in the form of a table.

## Preview

Website is hosted on Netlify and it's available for [preview].

---

## Installation

Clone this repository and install dependencies inside project directory.

```
git clone git@github.com:justFlow5/companyTable.git
cd company-table
npm install
```

## Usage

To run this project in development mode use:

```
npm start
```

---

## Pages

### MainPage

The main page that stores most of the application's logic and renders all components.
When the user enters the page it makes an initial request to the server to display the first page of results.
After that app makes requests to get the rest of the results. It improves UX because in order to display every result app has to make 300 requests and do math operations to calculate incomes of companies which takes a few seconds, but when the initial request is made first results are displayed to the user almost immediately.

---

## Main components

### Table

Render the whole table.

### TableHead

Used to display header in the table. When clicked one time it sorts the table in ascending order. After clicking the second time it sorts the table in descending order.

### TableRow

Render table row. Before initial fetch is made, this component renders empty row. When the fetch is complete, the component renders filled table row.

### Pagination

Generate page numbers based on number of results.

### FilterBox

Filter results based on a user input.

### ItemsPerPageInput

Display buttons that allow you to change how many results are displayed per page.

### Header

The main header that plays a role of table caption.

---

Created with [Create React App](https://github.com/facebook/create-react-app).
Styled with [Styled-Components](https://github.com/styled-components/styled-components).

[preview]: https://cocky-joliot-640ef5.netlify.app
