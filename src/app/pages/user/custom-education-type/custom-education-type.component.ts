import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-custom-education-type',
  templateUrl: './custom-education-type.component.html',
  styleUrls: ['./custom-education-type.component.css'],
})
export class CustomEducationTypeComponent implements OnInit {
  @Input() options!: any[];
  @Output() checkedValue = new EventEmitter();

  constructor() {}

  checkValue: any[] = [];

  ngOnInit() {}

  onChecked(value: any, status: any) {
    if (status.target.checked) this.checkValue.push(value);
    else this.checkValue = this.checkValue.filter((x) => x !== value);
    this.checkedValue.next(this.checkValue);
  }
}
