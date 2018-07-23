import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div class='success-alert'><span>Success!</span></div>`,
  styleUrls: ['successAlert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
