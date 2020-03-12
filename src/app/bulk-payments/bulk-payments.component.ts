import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'bulk-payments',
  templateUrl: './bulk-payments.component.html',
  styleUrls: ['./bulk-payments.component.css']
})
export class BulkPaymentsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['batchid', 'fileName', 'paymentPlan','uploadDate', 'payees', 'action'];
  dataSource = new MatTableDataSource<Payments>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface Payments {
  batchid: string;
  fileName: string;
  paymentPlan: string;
  uploadDate: string;
  payees: number;
  action: string;
}

const ELEMENT_DATA: Payments[] = [
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fdgh'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fghj'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fghjk'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fdgh'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fghj'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fghjk'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fdgh'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fghj'},
  {batchid: '1b5d5b482f83e44e7', fileName: 'bulk_upload_21Jul2018', paymentPlan: 'One-time', uploadDate: 'JUL 21 2018 17:00:38', payees: 8, action:'fghjk'}
  
];
