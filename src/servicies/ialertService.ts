import {AlertType} from 'tss-angular/entities';

export interface IAlertService {
     add(type: AlertType, msg: string, autoClose: boolean);
      closeAlert(alert);      
}