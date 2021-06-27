import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { MatTableDataSource } from '@angular/material/table';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent implements OnInit {

  public messages: Array<any> = [];
  public dataTable: Array<any> = [];
  public dataSource: MatTableDataSource<any>;
  public displayedColumns: Array<string> = ['name', 'phone', 'email', 'message'];
  constructor(
    private _databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this._databaseService.getAllMessages().then(
      (response) => {
        this.messages = response;
        this.dataTable = this.messages;
        this.dataSource = new MatTableDataSource(this.messages[0]);
        this.dataSource['data'] = this.messages;
      }
    );
  }

}
