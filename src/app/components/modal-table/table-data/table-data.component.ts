import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  @Input() data;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource ;
  displayedColumns: string[] = ['nr', 'di', 'qi', 'qc', 'lambdai', 'lambdac'];
  constructor() { }

  ngOnInit() {
   this.dataSource = new MatTableDataSource<Element>(this.data);
   this.dataSource.paginator = this.paginator;
  }

}

export interface Element {
  nr: number;
  di: number;
  qi: number;
  qc: number;
  lambdai: number;
  lambdac: number;
}
