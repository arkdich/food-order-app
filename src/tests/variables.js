export const productsRef = {
  docs: [
    {
      id: '0tm7iWSKEY3971platI4',
      data() {
        return {
          title: 'Пепперони',
          img: {
            thin: '/stub',
            classic: '/stub',
          },
          categories: ['spicy', 'cheese'],
          ingredients: [
            'Пикантная пепперони',
            'увеличенная порция моцареллы',
            'томатный соус',
          ],
          style: {
            thin: { normal: 490, large: 710 },
            classic: { small: 400, normal: 610, large: 810 },
          },
          price: { large: 749, small: 485, normal: 639 },
        };
      },
    },
  ],
};

export const specialsRef = {
  docs: [
    {
      data() {
        return {
          discounts: { category: 'pizzas', cheese: 12 },
          title: 'Сырный день!',
        };
      },
    },
  ],
};

export const productsMock = {
  '0tm7iWSKEY3971platI4': {
    style: {
      classic: {
        large: 810,
        normal: 610,
        small: 400,
      },
      thin: {
        normal: 490,
        large: 710,
      },
    },
    img: {
      thin: '/stub',
      classic: '/stub',
    },
    ingredients: [
      'Пикантная пепперони',
      'увеличенная порция моцареллы',
      'томатный соус',
    ],
    categories: ['spicy', 'cheese'],
    price: {
      large: 749,
      normal: 639,
      small: 485,
    },
    title: 'Пепперони',
    id: '0tm7iWSKEY3971platI4',
  },
  '7gO5GkpRIXmbS6SLiZjs': {
    categories: ['meat', 'spicy'],
    ingredients: [
      'Цыпленок',
      'ветчина',
      'пикантная пепперони',
      'острая чоризо',
      'моцарелла',
      'томатный соус',
    ],
    style: {
      classic: {
        large: 860,
        normal: 645,
        small: 450,
      },
      thin: {
        normal: 520,
        large: 740,
      },
    },
    price: {
      large: 899,
      normal: 699,
      small: 575,
    },
    img: {
      classic: '/stub',
      thin: '/stub',
    },
    title: 'Мясная',
    id: '7gO5GkpRIXmbS6SLiZjs',
  },
};

export const specialsMock = {
  discounts: { category: 'pizzas', cheese: 12 },
  title: 'Сырный день!',
};
