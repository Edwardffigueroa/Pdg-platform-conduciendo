import {MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatInputModule, MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatInputModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatInputModule, MatIconModule],
})
export class MaterialModule { }