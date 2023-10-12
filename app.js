Vue.component("greet", {
  template:
    "<h2>{{title}} <button @click='changeTitle'>change title</button></h2>",
  data: function () {
    return {
      title: "Title template",
    };
  },
  methods: {
    changeTitle: function () {
      this.title = "Update title";
    },
  },
});
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
