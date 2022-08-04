### [Read in English](/README.en.md)
# About

Веб-приложение для доставки еды с функцией фильтрации, просмотра товара и корзиной. Так же есть [версия](https://github.com/arkdich/food-order-app/tree/next) этого проекта, переписанная на `Next.js`

- использовал: react, react-router, [styled-components](https://github.com/styled-components/styled-components), для анимаций – [framer-motion](https://github.com/framer/motion)
- данные хранятся в [firestore](https://firebase.google.com/products/firestore), на клиенте используется [redux-toolkit](https://github.com/reduxjs/redux-toolkit)
- все компоненты и хуки покрыты юнит-тестами при помощи [jest](https://github.com/facebook/jest) и [react-testing-library](https://github.com/testing-library/react-testing-library)

## [Онлайн демка](https://arkdich.github.io/food-order-app/?filter=all)

# Features

- фильтрация и секция со скидками на определенные типы пицц

  <img src="https://github.com/arkdich/github-gifs/blob/main/food-order-1.gif" width="400"/>

- выбор теста и размера пиццы

  <img src="https://github.com/arkdich/github-gifs/blob/main/food-order-2.gif" width="400"/>
  
- изменение количества прямо из корзины и оформление заказа

  <img src="https://github.com/arkdich/github-gifs/blob/main/food-order-3.gif" width="400"/>

# Installation

Склонируйте репозиторий и установите зависимости

```
git clone git@github.com:arkdich/food-order-app.git
```

```
npm i
```

Запустите dev сервер

```
npm start
```
