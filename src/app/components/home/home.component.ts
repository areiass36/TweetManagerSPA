import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environment/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    authenticate = faLock;

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe(p => {
            console.log(p['code'])
        })
    }

    auth(): void {
        window.open(`${environment.twitterAuthUrl}`, "_self");
    }
}