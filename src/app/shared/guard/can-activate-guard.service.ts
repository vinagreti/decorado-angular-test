import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './../../user/';

// Admin Level
@Injectable()
export class AdminGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { console.log('AdminGuardService STARTED') }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.isAdmin()) {
            this.userService.user.subscribe((user) => {
                if (!this.userService.isAdmin()) {
                    this.router.navigate(['/']);
                }
            });
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}

// Logged Level
@Injectable()
export class LoggedGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { console.log('LoggedGuardService STARTED') }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.isLoggedIn()) {
            this.userService.user.subscribe((user) => {
                if (!this.userService.isLoggedIn()) {
                    this.router.navigate(['/']);
                }
            });
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}

// Public Level
@Injectable()
export class PublicGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { console.log('PublicGuardService STARTED') }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.userService.isLoggedIn()) {
            this.userService.user.subscribe((user) => {
                if (this.userService.isLoggedIn()) {
                    this.router.navigate(['/']);
                }
            });
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
