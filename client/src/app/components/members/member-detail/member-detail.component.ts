import { MemberService } from 'src/app/services/member.service';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/Member';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member:Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private MemberService:MemberService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();

    this.galleryOptions = [
      {
        height: '500px',
        width: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      }
    ];

  }

  getImages(): NgxGalleryImage[]{
    const imageUrls = []
    for (const photo of this.member.photos)
    imageUrls.push({
      small: photo?.url,
      medium: photo?.url,
      big: photo?.url
    })
    return imageUrls
  }

  loadMember() {
    this.MemberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.galleryImages = this.getImages();
    })
  }

}
