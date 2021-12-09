import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  open(type, message, action, duration?) {
    this.snackBar.open(message, action, {
      duration: duration ? duration : 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['app-snackbar-' + type],
    });
  }
}
