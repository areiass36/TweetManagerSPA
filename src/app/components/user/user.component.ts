import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    user: User = {} as any;

    constructor(
        private router: Router
    ) {
        const json = localStorage.getItem("user")!;
        this.user = json != "" ? JSON.parse(json) : null;

        if (!this.user)
            this.router.navigate(['']);
    }

}