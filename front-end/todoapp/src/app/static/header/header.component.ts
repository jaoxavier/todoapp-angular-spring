import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewProjectComponent } from 'src/app/dialog/new-project/new-project.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(
    private dialog: MatDialog
  ){}

  openDialog(){
    this.dialog.open(NewProjectComponent);
  }
}
