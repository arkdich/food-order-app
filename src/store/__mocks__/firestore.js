export const pizzasRef = {
  docs: [
    {
      id: '0tm7iWSKEY3971platI4',
      data() {
        return {
          title: 'Пепперони',
          img: {
            thin: '',
            classic: '',
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
    {
      id: '7gO5GkpRIXmbS6SLiZjs',
      data() {
        return {
          ingredients: [
            'Цыпленок',
            'ветчина',
            'пикантная пепперони',
            'острая чоризо',
            'моцарелла',
            'томатный соус',
          ],
          img: {
            thin: '',
            classic: '',
          },
          title: 'Мясная',
          price: { normal: 699, large: 899, small: 575 },
          categories: ['meat', 'spicy'],
          style: {
            classic: { normal: 645, large: 860, small: 450 },
            thin: { large: 740, normal: 520 },
          },
        };
      },
    },
  ],
};

export const specialsRef = {
  data() {
    return {
      discounts: { category: 'pizzas', cheese: 12 },
      title: 'Сырный день!',
    };
  },
};
