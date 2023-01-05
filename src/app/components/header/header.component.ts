import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    logo = faTwitter;

    user: User = {} as any;

    constructor(
        private authService: AuthService,
        private router: Router) {
        this.authService.userLoginSubject.subscribe(u => this.user = u);
    }

    logout(): void {
        localStorage.removeItem("user");
        this.authService.userLoginSubject.next({} as any);
        this.router.navigate(['']);
    }
}