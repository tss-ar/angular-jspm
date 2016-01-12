/*@ngInject*/
var AlertService = (function () {
    AlertService.$inject = ['$rootScope', '$timeout'];
    function AlertService($rootScope, $timeout) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.add = function (type, msg, autoClose) {
            if (autoClose === void 0) { autoClose = true; }
            var alert = {
                type: type,
                msg: msg,
                close: function () {
                    _this.closeAlert(alert);
                }
            };
            _this.$rootScope.alerts.push(alert);
            if (autoClose) {
                _this.$timeout(function () {
                    alert.close();
                }, 12000);
            }
        };
        this.closeAlert = function (alert) {
            _this.closeAlertIndex(_this.$rootScope.alerts.indexOf(alert));
        };
        this.closeAlertIndex = function (index) {
            _this.$rootScope.alerts.splice(index, 1);
        };
        $rootScope.alerts = [];
    }
    return AlertService;
})();
exports.AlertService = AlertService;

//# sourceMappingURL=alertService.js.map
