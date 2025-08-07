const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    showAlert() {
      alert("알람이 울렸습니다.");
    },

    setName(e) {
      this.output1 = e.target.value;
    },
    setName2(e) {
      if (e.key === "Enter") this.output2 = e.target.value;
    },
  },
});

app.mount("#assignment");
