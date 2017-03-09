import Vue from 'vue';
import Component from 'vue-class-component';

@Component
class App extends Vue {
    name = "Max";
}

new App({ el: "#app" });