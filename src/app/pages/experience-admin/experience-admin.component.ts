import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpComponent } from 'src/app/common/confirm-pop-up/confirm-pop-up.component';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
    selector: 'app-experience-admin',
    templateUrl: './experience-admin.component.html',
    styleUrls: ['./experience-admin.component.scss']
})
export class ExperienceAdminComponent implements OnInit {

    experiences: Experience[] = [];
    displayedColumns: string[] = ['experience', 'image', 'actions'];
    dataSource = this.experiences;

    constructor(private experienceSvc: ExperienceService,
        private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.experiences = this.experienceSvc.getExperiences();
        this.dataSource = this.experiences;
    }

    openConfirmPopUp(action: string): void {
        let object: string = "experiencia";
        this.matDialog.open(ConfirmPopUpComponent, {
            data: {
                action: action,
                object: object,
                send: false,
                admin: true,
                service: this.experienceSvc,
            }
        });
    }

    reject(id: number) {
        this.experienceSvc.reject(id);
        this.openConfirmPopUp("eliminar");
    }

    agree(id: number) {
        this.experienceSvc.agree(id);
        this.openConfirmPopUp("hacer visible");
    }

}