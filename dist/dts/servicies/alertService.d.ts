import { AlertType } from 'tss-angular/entities';
import { IAlertService } from './iAlertService';
export declare class AlertService implements IAlertService {
    private $rootScope;
    private $timeout;
    constructor($rootScope: any, $timeout: any);
    add(type: AlertType, msg: string, autoClose?: boolean): void;
    closeAlert(alert: any): void;
    closeAlertIndex(index: any): void;
}
