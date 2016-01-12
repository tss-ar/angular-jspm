
rcDisabled.$inject = ['rcDisabled'];function rcDisabled(rcDisabled) {
    'ngInject';
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.$watch(attributes.rcDisabled, function (isDisabled) {
                isDisabled = isDisabled ? isDisabled : false;
                rcDisabled.disable(element, isDisabled);
            });
        }
    };
}
exports.rcDisabled = rcDisabled;
