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
  ],
};
