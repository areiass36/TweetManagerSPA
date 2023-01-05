import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environment/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    authenticate = faLock;

    user: User = {} as any;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private authService: AuthService) {

        const json = localStorage.getItem("user")!;
        this.user = json != "" ? JSON.parse(json) : null;

        if (this.user)
            this.router.navigate(['me']);


        this.activatedRoute.queryParams.subscribe(p => this.authenticateApp(p['code']));
    }

    private authenticateApp(code: string): void {
        if (!code)
            return;
        this.authService.authenticate(code).subscribe(
            user => {
                console.log(user);
                if (user != null)
                    this.router.navigate(["me"]);
            })
    }

    openTwitter(): void {
        window.open(`${environment.twitterAuthUrl}`, "_self");
    }

}