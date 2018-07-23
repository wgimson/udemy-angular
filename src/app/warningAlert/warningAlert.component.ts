import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<div class='warning-alert'><span>Warning!</span></div>`,
  styleUrls: ['warningAlert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
