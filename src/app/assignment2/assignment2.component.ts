import { Component } from "@angular/core";

@Component({
  selector: "app-assignment2",
  templateUrl: "assignment2.component.html"
})
export class Assingment2Component {
  username: string = "";

  getUserName() {
    return this.username;
  }

  usernameIsEmtpy() {
    if (this.username) {
      return true;
    }
    return false;
  }

  resetUserName() {
    this.username = "";
  }
}
