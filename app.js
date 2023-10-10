new Vue({
  el: "#app",
  data: {
    counter: 0,
    name: "",
    cheked: false,
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
