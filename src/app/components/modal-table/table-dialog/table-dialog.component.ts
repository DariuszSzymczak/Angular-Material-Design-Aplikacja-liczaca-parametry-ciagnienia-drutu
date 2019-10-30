import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../modal-table.component';


@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss']
})
export class TableDialogComponent implements OnInit {
  displayedColumns: string[] = ['di', 'qi', 'qc', 'lambdai', 'lambdac'];
  dataSource: { d0: number; dk: number; qimin: number; qimax: number };
  countMin: number;
  countMax: number;
  steps: number;
  stepsTable: any;
  renderTable: boolean;
  constructor(
    public dialogRef: MatDialogRef<TableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {

    this.dialogRef.close();
  }

  // zmieniam konwencje
  ngOnInit() {
    this.dataSource = {d0: this.data.d0, dk: this.data.dk, qimin: this.data.qimin, qimax: this.data.qimax};
    console.log(this.dataSource);
    this.renderTable = false;
  }

  public calculateData(qi: number, isMin: boolean) {
    let count = 1;
    let di = this.dataSource.d0;
    let qc = 0;
    let lambdai = 0;
    let lambdac = 0;
    let table = [];
    let lasttable = {nr: 1, di, qi, qc: 100, lambdai: 1, lambdac: 1};
    let loopCounter = 0;
    // table.push(lasttable);
    console.log("calcdata start with params: ");
    console.log(this.dataSource)
    console.log('calcdata: ' + di + ' , dk: ' + this.dataSource.dk);
    // @ts-ignore
    while (parseFloat(di) > parseFloat(this.dataSource.dk)) {
    loopCounter++;
      if (count === 1) {
        di = Math.round(Math.sqrt(Math.pow(this.dataSource.d0, 2) * (-qi / 100 + 1)) * 100) / 100;
        lambdai = Math.round(Math.pow(this.dataSource.d0 / di, 2) * 100) / 100;
        lambdac = lambdai;
        qc = qi;
        lasttable = {nr: count++, di, qi, qc, lambdai, lambdac};
      } else {
        di = Math.round(Math.sqrt(Math.pow(lasttable.di, 2) * (-qi / 100 + 1)) * 100) / 100;
        if (di < this.dataSource.dk) {
          di  = this.dataSource.dk;
          qi = Math.round( (1 - Math.pow(di / lasttable.di, 2) ) * 10000) / 100 ;
        }
        lambdai = Math.round(Math.pow(lasttable.di / di, 2) * 100) / 100;
        lambdac = Math.round(Math.pow(this.dataSource.d0 / di, 2) * 100) / 100;
        qc = Math.round( (1 - Math.pow( di / this.dataSource.d0, 2) ) * 10000) / 100  ;
        console.log("dzielenie di / do ::  di: "+di+"  ::  qc:"+qc);
        lasttable = {nr: count++, di, qi, qc, lambdai, lambdac};
      }

      table.push(lasttable);
    }
    console.log("calcData after loop: ")
    console.log(table)
    console.log("loopcounter: "+loopCounter)
    if (isMin === true) {
      this.countMin = count;
    } else {
      this.countMax = count;
    }
    return table;

  }

  calculateSteps() {
    if (this.steps === undefined ) { this.steps = this.countMin - 1; }

    let  count = 1;
    let di = this.dataSource.d0;
    console.log('sprawdzam to di');
    console.log(di);
    let qc = 0;
    let qi = 0;
    const lambdac = Math.round( Math.pow(this.dataSource.d0 / this.dataSource.dk, 2) * 100 ) / 100 ;
    let lambdai = lambdac;
    const step =  ((this.dataSource.d0 - this.dataSource.dk) / this.steps) ;
    console.log(step);
    const table = [];
    let lasttable = {nr: 0, di, qi: 0, qc: 0, lambdai, lambdac};
    console.log("calcSteps start with params: ")
    console.log(this.dataSource)
    for (let x = 0 ; x < this.steps ; x++) {
      // @ts-ignore
      di = Math.round((parseFloat(di , 10) - parseFloat(step, 10))*100)/100;
      if ( di < this.dataSource.dk) {
        di = this.dataSource.dk;
        qi = Math.round((1 - Math.pow(di / lasttable.di, 2)) * 10000) / 100;
        qc = Math.round((1 - Math.pow(di / this.dataSource.d0, 2)) * 10000) / 100;
      }
      lambdai = Math.round(lambdac / count * 100) / 100;
      if (count === 2) {qi = Math.round((1 - Math.pow(di / lasttable.di, 2)) * 10000) / 100; }
      qc = Math.round((1 - Math.pow(di / this.dataSource.d0, 2)) * 10000) / 100;

      lasttable = {nr: count++, di, qi, qc, lambdai, lambdac};
      table.push(lasttable);
    }
    this.stepsTable = table;
    console.log('stepsTable after Loop: ');
    console.log(this.stepsTable);
    return table;
  }


}
