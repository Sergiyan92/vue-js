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
  methods: {
    changeTitle: function () {
      // this.title = this.$refs.input.value;
      console.log(this.$refs);
    },
  },
});
