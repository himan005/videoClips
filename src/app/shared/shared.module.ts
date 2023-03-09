import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { TabComponent } from './components/tab/tab.component';



@NgModule({
  declarations: [
    NavComponent,
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ]
})
export class SharedModule { }
