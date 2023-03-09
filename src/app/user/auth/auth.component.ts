import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(public modal:ModalService) { }

  ngOnInit(): void {
    this.modal.register('auth')
  }

  ngOnDestroy(): void {
      this.modal.unregister('auth')
  }



}
