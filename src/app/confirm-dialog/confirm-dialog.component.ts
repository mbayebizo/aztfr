import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  modalTitle: string;
  message: string;
  no: string;
  yes: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
             ) {
    this.modalTitle = data.title;
    this.message = data.message;
    this.yes = 'oui';
    this.no = 'non';
  }

  ngOnInit() {
  }

}
