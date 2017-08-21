import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './../../user/';

// Admin Level
@Injectable()
export class AdminGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { console.log('AdminGuardService STARTED') }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.isAdmin()) {
            return true;
        } else {
            return false;
        }
    }
}

// Logged Level
@Injectable()
export class LoggedGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { console.log('LoggedGuardService STARTED') }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.userService.isLoggedIn();
    }
}

// Public Level
@Injectable()
export class PublicGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { console.log('PublicGuardService STARTED') }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return !this.userService.isLoggedIn();
    }
}
