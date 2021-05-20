import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-amount',
  templateUrl: './button-amount.component.html',
  styleUrls: ['./button-amount.component.css']
})
export class ButtonAmountComponent implements OnInit {

  @Input() balance;

  constructor() { }

  ngOnInit(): void {
  }

}
