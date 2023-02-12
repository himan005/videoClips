import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    NavComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    ModalComponent
  ]
})
export class SharedModule { }
