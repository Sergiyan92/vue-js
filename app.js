new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  config: {
    keyCodes: {
      f2: 113,
    },
  },
  methods: {
    changeName: function () {
      console.log("Name is updated");
    },
    substract: function (e) {
      e.stopPropagation();
      this.counter--;
    },
  },
});
