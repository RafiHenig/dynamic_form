import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styles: []
})
export class CheckboxComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }

}
