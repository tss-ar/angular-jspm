import {FeedbackType} from 'entities';

/*@ngInject*/ 
export function feedback() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        templateUrl: '/components/feedback/feedback.html',
        scope: {
            feedback: '=ngModel'
        },
        link: (scope, element, attrs, ngModelCtrl) => {
            scope.feedbackType = FeedbackType;

            if (angular.isDefined(attrs.feedbackShowError)) {
                scope.showError = eval(attrs.feedbackShowError);
            } else {
                scope.showError = true;
            }

            if (angular.isDefined(attrs.feedbackShowErrorAsTooltip)) {
                scope.showErrorAsTooltip = eval(attrs.feedbackShowErrorAsTooltip);
            } else {
                scope.showErrorAsTooltip = false;
            }
        }
    }
}