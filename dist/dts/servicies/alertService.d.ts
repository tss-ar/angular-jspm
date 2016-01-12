export declare class AlertService {
    private $rootScope;
    private $timeout;
    constructor($rootScope: any, $timeout: any);
    add: (type: any, msg: string, autoClose?: boolean) => void;
    closeAlert: (alert: any) => void;
    closeAlertIndex: (index: any) => void;
}
