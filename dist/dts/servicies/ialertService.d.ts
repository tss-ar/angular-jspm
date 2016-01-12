import { AlertType } from 'tss-angular/entities';
export interface IAlertService {
    add(type: AlertType, msg: string, autoClose: boolean): any;
    closeAlert(alert: any): any;
}
