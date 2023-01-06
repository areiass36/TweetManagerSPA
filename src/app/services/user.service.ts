import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscription, tap } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class UserService {


    constructor(private http: HttpClient) {
    }

    public get(id: string): Observable<User> {
        return this.http.get<User>(`/user/${id}`);
    }

    public delete(id: string): Observable<string> {
        return this.http.delete<string>(`/user/${id}`);
    }
}