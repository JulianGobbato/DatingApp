import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { ListsComponent } from './components/lists/lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MemberEditComponent } from './components/members/member-edit/member-edit.component';
import { PreventUnsaveChangesGuard } from './guards/prevent-unsave-changes.guard';

const routes: Routes = [
  {path: "", pathMatch:"full", component:HomeComponent},
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children:[
      {path: "members", component:MemberListComponent},
      {path: "members/:username", component:MemberDetailComponent},
      {path: "member/edit", component:MemberEditComponent, canDeactivate:[PreventUnsaveChangesGuard]},
      {path: "lists", component:ListsComponent},
      {path: "messages", component:MessagesComponent},
    ]
  },
  {path: "not-found", component:NotFoundComponent},
  {path: "**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
