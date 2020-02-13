import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styles: []
})
export class RadiobuttonComponent implements OnInit {

    field: FieldConfig;
    group: FormGroup;
    constructor() {}
    ngOnInit() {}

}
