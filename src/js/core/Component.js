import { observe } from "./observer.js";

export default class Component {
  state;
  props;
  $el;

  constructor($el, props) {
    this.$el = $el;
    this.props = props;
    this.setup(); 
  }

  setup() {
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  template() { return ""; }
  render() { this.$el.innerHTML = this.template(); }
  setEvent() {};
  mounted() {};
}