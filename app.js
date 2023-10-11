new Vue({
  el: "#app",
  data: {
    error: false,
    success: false,
    a: 0,
    b: 0,
    age: 20,
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
  computed: {
    addToA: function () {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB: function () {
      console.log("addToB");
      return this.b + this.age;
    },
  },
});
