import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    logo = faTwitter;
}