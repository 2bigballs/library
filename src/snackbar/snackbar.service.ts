import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";
import {ColorClassNameEnum} from "./colorClassNameEnum";
import {SnackbarModule} from "./snackbar.module";


@Injectable({
  providedIn: SnackbarService
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string,colorClass:ColorClassNameEnum) {
    this._snackBar.open(message, 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [colorClass],
      duration: 2000,
    });
  }
}
