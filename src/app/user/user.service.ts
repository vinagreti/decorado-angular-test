/*
* User Service
*
* Handle user authentication and CRUD operations
*
* As this demo has no back-end, we are mocking a DB in LocalStorage
* This service simulates an Ajax API call retunring promises with data from LocalStorage
* As this demo has no back-end, the credentials check is done on client without security concerns
* As this demo has no back-end, we to ensure the presence of the default admin user
*/

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';
import { JsonStorageService } from './../json-storage'

const defaultAdminUser = new User({ id: '1', name: 'Admin', isAdmin: true, username: 'admin', password: 123 });

interface LoginData{
    username: string;
    password: string;
}

@Injectable()
export class UserService {

    private _users: User[];
    private _user:  User;

    users: BehaviorSubject<User[]>;
    user: BehaviorSubject<User>;

    constructor(
        private jsonStorageService: JsonStorageService,
        private router: Router,
    ) {
        console.info('UserService started');

        this.getUsersFromDb()
        .then(this.startUsers)
        .then(this.ensureDefaultAdminUser);

        this.getUserFromDb()
        .then(this.startUser);
    }

    /* As this demo has no back-end, the credentials check is done on client without security concerns  */
    private authenticate(loginData: LoginData): User {
        let user: User = this.get(loginData.username);

        if(user){
            return user.password == loginData.password ? new User(user) : undefined;
        } else {
            return undefined;
        }
    }

    /* As this demo has no back-end, we ensure the presence of the default admin user  */
    private ensureDefaultAdminUser = () => {
        let user = this.get(defaultAdminUser.username);
        if(!user){
            this._users.push(defaultAdminUser)
        } else {
            user.password = defaultAdminUser.password;
        }
        this.users.next(this._users);
    }

    /* As this demo has no back-end, we are mocking a DB in LocalStorage */
    private getUsersFromDb(){
        return this.jsonStorageService.get('usersDB');
    }

    private getUserFromDb(){
        return this.jsonStorageService.get('user');
    }

    private persistUsers = (users: User[]) => {
        this._users = users;
        this.jsonStorageService.set('usersDB', users);
    }

    private persistUser = (user: User) => {
        this._user = user;
        this.jsonStorageService.set('user', user);
    }

    private startUsers = (users: User[] = []) => {
        this.users = new BehaviorSubject<User[]>(users);
        this.users.subscribe(this.persistUsers);
    }

    private startUser = (user: User = new User()) => {
        this.user = new BehaviorSubject<User>(user);
        this.user.subscribe(this.persistUser);
    }
    
    /*
    * CRUD OPERATIONS
    */
    create = (user: User) => {
        this._users.push(user)
        this.users.next(this._users);
    }

    delete = (user: User) => {
        let userPosition = this._users.indexOf(user);
        this._users.splice(userPosition, 1);
        this.users.next(this._users);
    }

    get = (username): User => {
        return this._users.find((user: any) => user.username === username);
    }

    update = (user: User) => {
        let _user = this.get(user.username);
        _user = user;
        this.users.next(this._users);
    }

    /*
    * AUTH OPERATIONS
    */
    login = (LoginData: LoginData): Promise<User> => {
        return new Promise((res, rej) => {
            let user = this.authenticate(LoginData);

            if(user){
                this.user.next(user);
                res(user);
            } else {
                rej("Invalid credentials");
            }
        })
    }

    logout = () => {
        this.user.next(new User());
        this.router.navigate(['/']);
    }

    /*
    * HELPERS
    */
    isLoggedIn = () => {
        return this._user && this._user.id;
    }

    userLevel = () => {
        return 'admin';
    }
}
