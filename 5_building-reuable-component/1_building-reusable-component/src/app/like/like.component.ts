import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive')isActive: boolean = true;
  @Input('likesCount')likesCount: number = 0;

  onClick() {
    this.likesCount  += this.isActive ? -1 : 1;  
    this.isActive = !this.isActive;
  }
}
