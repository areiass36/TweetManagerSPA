import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    public authenticate(code: string): Observable<User> {
        const headers = new HttpHeaders({ Authorization: `Bearer ${code}` });
        return this.http.post<User>('/auth/twitter', null, { headers });
    }
}