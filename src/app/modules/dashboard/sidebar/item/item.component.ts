import { Component, Inject, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-list-group-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
@Injectable()
export class ItemComponent {
  @Input() content: string = '';
  @Input() imageUrl: string = ''; // Add the imageUrl property
}
