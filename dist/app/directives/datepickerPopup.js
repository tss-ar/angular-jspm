function datepickerPopup() {
    'ngInject';
    return {
        restrict: 'EAC',
        require: 'ngModel',
        link: function (scope, element, attr, controller) {
            console.warn('directive tss:datepickerPopup is now deprecated.');
            //remove the default formatter from the input directive to prevent conflict
            controller.$formatters.shift();
        }
    };
}
exports.datepickerPopup = datepickerPopup;

//# sourceMappingURL=datepickerPopup.js.map
