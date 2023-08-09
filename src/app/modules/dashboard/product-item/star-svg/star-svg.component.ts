import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-svg',
  templateUrl: './star-svg.component.svg',
  styleUrls: ['./star-svg.component.scss']
})
export class StarSvgComponent {
  @Input() fillColor: String = '';
}
