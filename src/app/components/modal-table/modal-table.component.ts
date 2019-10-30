import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TableDialogComponent} from './table-dialog/table-dialog.component';

export interface DialogData {
  d0: number;
  dk: number;
  qimin: number;
  qimax: number;
}

@Component({
  selector: 'app-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.scss']
})
export class ModalTableComponent implements OnInit {
  @Input() dataTable;
  constructor(public dialog: MatDialog) { }
  showModal(): void {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '900px',
      data: this.dataTable
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

}

