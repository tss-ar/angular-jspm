var entities_1 = require('entities');
/*@ngInject*/
function feedback() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        templateUrl: '/components/feedback/feedback.html',
        scope: {
            feedback: '=ngModel'
        },
        link: function (scope, element, attrs, ngModelCtrl) {
            scope.feedbackType = entities_1.FeedbackType;
            if (angular.isDefined(attrs.feedbackShowError)) {
                scope.showError = eval(attrs.feedbackShowError);
            }
            else {
                scope.showError = true;
            }
            if (angular.isDefined(attrs.feedbackShowErrorAsTooltip)) {
                scope.showErrorAsTooltip = eval(attrs.feedbackShowErrorAsTooltip);
            }
            else {
                scope.showErrorAsTooltip = false;
            }
        }
    };
}
exports.feedback = feedback;

//# sourceMappingURL=feedback.js.map
