const app = Vue.createApp({
  data() {
    return {
      Name: "sanglee",
      Age: 13,
      NewAge: 5,
      ImgUrl: "https://picsum.photos/250/250",
    };
  },
  methods: {
    MyRandomNumber() {
      const RandomNumber = Math.random();
      return RandomNumber;
    },
  },
});

app.mount("#assignment");
