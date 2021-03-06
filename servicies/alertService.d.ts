export interface IAlertService {
    add(type: string, msg: string, autoClose: boolean): any;
    closeAlert(alert: any): any;
}
export declare class AlertService implements IAlertService {
    private $rootScope;
    private $timeout;
    constructor($rootScope: any, $timeout: any);
    add(type: string, msg: string, autoClose?: boolean): void;
    closeAlert(alert: any): void;
    closeAlertIndex(index: any): void;
}
