const app = Vue.createApp({
  // data: function() {} << 얘랑 동일함
  data() {
    return {
      courseGoalA: "첫번째 코스입니다.",
      courseGoalB: "두번째 코스입니다.",
      vueLink: "https://vuejs.org",
    };
  },

  methods: {
    outputGoal() {
      const RandomNumber = Math.random();
      if (RandomNumber < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
