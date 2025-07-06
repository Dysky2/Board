import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class userService {

    private apiUrl = 'http://localhost:8080/api/users';

    constructor(private http: HttpClient) {}

    getUserById(userId: String) {
        return this.http.post<User>(`${this.apiUrl}/userId`, userId)
    }

    getLoggedUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/loggedUser`, user);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}/all`);
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/create`, user)
    }

    isAccountExists(user: User) {
        return this.http.post(`${this.apiUrl}/isExist`, user)
    }

    logIn(user: User) {
        return this.http.post<User>(`${this.apiUrl}/logIn`, user)
    }
}