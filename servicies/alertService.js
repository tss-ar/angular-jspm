// import {AlertType} from '../../entities';
/*@ngInject*/
var AlertService = (function () {
    AlertService.$inject = ['$rootScope', '$timeout'];
    function AlertService($rootScope, $timeout) {
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        $rootScope.alerts = [];
    }
    AlertService.prototype.add = function (type, msg, autoClose) {
        var _this = this;
        if (autoClose === void 0) { autoClose = true; }
        var alert = {
            type: type,
            msg: msg,
            close: function () {
                _this.closeAlert(alert);
            }
        };
        this.$rootScope.alerts.push(alert);
        if (autoClose) {
            this.$timeout(function () {
                alert.close();
            }, 12000);
        }
    };
    AlertService.prototype.closeAlert = function (alert) {
        this.closeAlertIndex(this.$rootScope.alerts.indexOf(alert));
    };
    AlertService.prototype.closeAlertIndex = function (index) {
        this.$rootScope.alerts.splice(index, 1);
    };
    return AlertService;
})();
exports.AlertService = AlertService;
