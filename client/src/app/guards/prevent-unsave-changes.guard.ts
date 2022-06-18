import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../components/members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsaveChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(component: MemberEditComponent): boolean {
    if(component.editForm.dirty){
      return confirm('Estas seguro que querer continuar. Tus cambios no guardados se perderan?')
    }
    return true;
  }
  
}
