import { AccountService } from './../../services/account.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  @Output() cancelRegister= new EventEmitter
  model: any = {}

  constructor(private accountService:AccountService, private toastr: ToastrService,) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.registerUser(this.model).subscribe({
      next: (() =>{
        this.cancel()
      }),
      error: (error=> this.toastr.error(error.error))
    })
  }

  cancel(){
    this.cancelRegister.emit(false)
  }

}
