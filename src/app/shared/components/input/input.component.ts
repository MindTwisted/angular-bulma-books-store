import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() public componentId: string;
  @Input() public componentLabel = '';
  @Input() public value: string;
  @Output() public valueChange = new EventEmitter<string>();

  constructor() {
  }

  public ngOnInit(): void {
  }
}
