let one = new Vue({
  el: "#app-one",
  data: {
    title: "Title one",
  },
  computed: {
    greet: function () {
      return "Hello world";
    },
  },
  methods: {},
});

let two = new Vue({
  el: "#app-two",
  data: {
    title: "Title two",
  },
  computed: {
    greet: function () {
      return "Hello world lozers";
    },
  },
  methods: {
    changeTitleOne: function () {
      one.title = "Change from Vue";
    },
  },
});
two.title = "Change from outside!";
