import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscription, tap } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class AuthService {

    userLoginSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null as any);

    constructor(private http: HttpClient) {
        const json = localStorage.getItem("user")!;
        const user = json != "" ? JSON.parse(json) : null;
        this.userLoginSubject = new BehaviorSubject<User>(user);
    }

    public authenticate(code: string): Observable<User> {
        const headers = new HttpHeaders({ Authorization: `Bearer ${code}` });
        return this.http.post<User>('/auth/twitter', null, { headers })
            .pipe(
                tap((u: User) => {
                    localStorage.setItem("user", JSON.stringify(u));
                    this.userLoginSubject.next(u);
                }));
    }
}