import "jquery";
import "fastclick";
import "foundation/css/foundation.css!";
import "./css/company.css!";
import "foundation";
import "foundation/js/foundation/foundation.reveal";
import "foundation/js/foundation/foundation.topbar";
import {Router} from "aurelia-router";

export class App {
  router: Router;
  configureRouter(config, router: Router) {
    config.title = "Aurelia";
    config.map([
      { route: ["", "welcome"], name: "welcome", moduleId: "welcome", nav: true, title: "Welcome" },
      { route: "users", name: "users", moduleId: "users", nav: true, title: "Github Users" },
      { route: "child-router", name: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }
    ]);
    this.router = router;
  }
  attached() {
    $(document).foundation();
  }
}
