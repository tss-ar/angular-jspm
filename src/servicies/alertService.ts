import {AlertType} from 'tss-angular/entities';
import {IAlertService} from './iAlertService';

/*@ngInject*/
export class AlertService implements IAlertService {
    constructor(
        private $rootScope,
        private $timeout
    ) {
        $rootScope.alerts = [];
    }

    add(type: AlertType, msg: string, autoClose: boolean = true) {
        var alert = {
            type: type,
            msg: msg,
            close: () => {
                this.closeAlert(alert);
            }
        }

        this.$rootScope.alerts.push(alert);

        if (autoClose) {
            this.$timeout(() => {
                alert.close();
            }, 12000);
        }
    }

    closeAlert(alert) {
        this.closeAlertIndex(this.$rootScope.alerts.indexOf(alert));

    }

    closeAlertIndex(index) {
        this.$rootScope.alerts.splice(index, 1);
    }
}