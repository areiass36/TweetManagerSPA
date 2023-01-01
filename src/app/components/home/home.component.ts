import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environment/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    authenticate = faLock;

    constructor(private activatedRoute: ActivatedRoute,
        private authService: AuthService) {

        this.activatedRoute.queryParams.subscribe(p => this.authenticateApp(p['code']));
    }

    private authenticateApp(code: string): void {
        if (!code)
            return;
        this.authService.authenticate(code).subscribe(
            r => {
                console.log(r);
            })
    }

    openTwitter(): void {
        window.open(`${environment.twitterAuthUrl}`, "_self");
    }

}