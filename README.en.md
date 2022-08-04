### [Читать на русском](/README.md)

# About

Next.js version of this app. The subtle differences are absence of some loading animations due to server-side data fetching (SSG) and lazy loading of modal components

# Installation

Project uses admin SDK to connect to the database and requires credentials, if you need them then contact me lmao (i know nobody ever needs this). When you got credentials clone this repo, switch branch and install dependencies. 

```
git clone git@github.com:arkdich/food-order-app.git
```
```
git checkout next
```
```
npm i
```
Create `.env.local` file in the root of the project and put credentials in then start dev server

```
npm run dev
```
