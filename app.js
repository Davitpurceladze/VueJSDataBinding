const app = Vue.createApp({
  data() {
    return {
      myName: "Davit",
      myAge: 24,
      myAgeInFiveYears: "",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    };
  },
  methods: {
    favouriteNumber() {
      return Math.random();
    },
    myAgeAfterFiveYears() {
      this.myAgeInFiveYears = this.myAge + 5;
      return this.myAgeInFiveYears;
    },
  },
});

app.mount("#assignment");
