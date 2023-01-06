import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    user: User = {} as any;
    tweetsDeleted: number = 0;

    constructor(
        private router: Router,
        private userService: UserService,
        private authService: AuthService
    ) {
        const json = localStorage.getItem("user")!;
        this.user = json != "" ? JSON.parse(json) : null;

        if (!this.user)
            this.router.navigate(['']);

        this.loadDeletedTweets();
    }

    private loadDeletedTweets(): void {

        this.tweetsDeleted = this.user.deletedTweetsCount;
        setInterval(() => {
            this.userService.get(this.user._id).subscribe(u => {
                console.log(u);
                if (u)
                    this.tweetsDeleted = u.deletedTweetsCount;
                else
                    this.tweetsDeleted = 0;
            });
        }, 1000);
    }

    deleteUser(): void {
        this.userService.delete(this.user._id).subscribe(u => {
            console.log("deleted");
            localStorage.removeItem("user");
            this.authService.userLoginSubject.next({} as any);
            this.router.navigate(['']);
        })
    }

}