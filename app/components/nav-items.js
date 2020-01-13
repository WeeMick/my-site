import Component from "@ember/component";

export default Component.extend({
  items: [
    {
      title: "Home",
      location: "index",
      active: true
    },
    {
      title: "Paris",
      location: "paris",
      active: false
    },
    {
      title: "Versailles",
      location: "versailles",
      active: false
    },
    {
      title: "Alps",
      location: "alps",
      active: false
    }
  ]
});
