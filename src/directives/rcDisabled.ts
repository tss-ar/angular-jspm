export function rcDisabled(rcDisabled) {
    'ngInject';
    
    return {
        restrict: 'A',
        link: (scope, element, attributes) => {
            scope.$watch(attributes.rcDisabled, function (isDisabled) {
                isDisabled = isDisabled ? isDisabled : false;
                rcDisabled.disable(element, isDisabled);
            });
        }
    }
}