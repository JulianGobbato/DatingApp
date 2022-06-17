import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { NgxGalleryModule } from '@kolkov/ngx-gallery';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    TabsModule.forRoot(),
    HttpClientModule,
    NgxGalleryModule,
  ],
  exports: [
    TooltipModule,
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
  ]
})
export class SharedModule { }
