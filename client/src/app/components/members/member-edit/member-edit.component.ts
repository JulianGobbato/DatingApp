import { MemberService } from 'src/app/services/member.service';
import { AccountService } from './../../../services/account.service';
import { Member } from 'src/app/models/Member';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm:NgForm
  member:Member;
  user:User;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }

  constructor(private accountService:AccountService, private memberService:MemberService, private toastr:ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member => this.member = member)
  }

  updateMember(){
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('El perfil se actualizo correctamente')
      this.editForm.reset(this.member)
    })
  }

}
