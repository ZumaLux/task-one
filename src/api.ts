const heroes = [
  {
    name: "Batman",
    sex: "male",
    realName: "Bruce Wayne",
    photo: "https://images-na.ssl-images-amazon.com/images/I/61u%2BrIiOPrL._AC_SX425_.jpg",
  },
  {
    name: "Iron Man",
    sex: "male",
    realName: "Tony Start",
    photo:
      "https://image.ceneostatic.pl/data/products/90415806/i-figurka-avengers-endgame-1-6-iron-man-mark-lxxxv-32-cm.jpg",
  },
  {
    name: "Wonder Woman",
    sex: "female",
    realName: "Diana, Princess of the Amazons",
    photo:
      "https://static.wikia.nocookie.net/marvel_dc/images/c/cc/Wonder_Woman_Vol_5_4_Textless.jpg/revision/latest?cb=20160810132845",
  },
  {
    name: "Black Widow",
    sex: "female",
    realName: "Natasha Romanoff",
    photo: "http://prodimage.images-bn.com/pimages/9781419752544_p0_v1_s1200x630.jpg",
  },
  {
    name: "Black Widow",
    sex: "female",
    realName: "Natasha Romanoff",
    photo: "http://prodimage.images-bn.com/pimages/9781419752544_p0_v1_s1200x630.jpg",
  },
  {
    name: "Black Widow",
    sex: "female",
    realName: "Natasha Romanoff",
    photo: "http://prodimage.images-bn.com/pimages/9781419752544_p0_v1_s1200x630.jpg",
  },
  {
    name: "Black Widow",
    sex: "female",
    realName: "Natasha Romanoff",
    photo: "http://prodimage.images-bn.com/pimages/9781419752544_p0_v1_s1200x630.jpg",
  },
  {
    name: "Black Widow",
    sex: "female",
    realName: "Natasha Romanoff",
    photo: "http://prodimage.images-bn.com/pimages/9781419752544_p0_v1_s1200x630.jpg",
  },
  {
    name: "Black Widow",
    sex: "female",
    realName: "Natasha Romanoff",
    photo: "http://prodimage.images-bn.com/pimages/9781419752544_p0_v1_s1200x630.jpg",
  },
];

export const getHeroes = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.9) {
        resolve(heroes);
      } else {
        reject("There was an error");
      }
    }, (Math.random() * (1 - 1) + 1) * 1000);
  });
