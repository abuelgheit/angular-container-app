import { Component } from '@angular/core';
import { BaseModelInterface, Field, FieldType } from 'projects/ng-crud-ui/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements BaseModelInterface {
  title = 'container-app';
  api = '/api/pos/terminal/';
  verbose_name = 'Terminal';
  fields = [
    new Field('ID', 'id', FieldType.Number, false, true),
    new Field('Number', 'number', FieldType.Text, true, true),
    new Field('Description', 'description', FieldType.Text, true, true),
  ];

  listing_fields = [
    'id', 'number', 'description', 'store'
  ];

  actions = [];

  bulk_actions = [];

  list_actions = [
    {title: 'Unlock', action: 'unlock'}
  ];

  unlock(id) {

  }
}
