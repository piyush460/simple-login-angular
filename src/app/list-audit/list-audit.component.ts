import { UserService } from '@/_services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({ templateUrl: 'list-audit.component.html' })

export class LisAuditComponent implements OnInit {

    users;

    constructor(
        private userService: UserService,
    ) {

    }

    ngOnInit(): void {
        this.loadAllAudits()
        
    }

    private loadAllAudits() {
        this.userService.getAudit()
            .pipe(first())
            .subscribe(users => {
                console.log(users)
                this.users = users});
    }
}