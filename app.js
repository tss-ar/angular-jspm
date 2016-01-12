var directives = require('./directives');
var components = require('./components');
var tssHighlight_1 = require('./filters/tssHighlight');
var servicies = require('./servicies');
angular.module('TSS.AngularJs', [
    'ui.bootstrap.dateparser',
    'ui.bootstrap.position'
])
    .directive('datepickerPopup', directives.datepickerPopup)
    .directive('datetimepicker', directives.datetimepicker)
    .directive('draggable', directives.draggable)
    .directive('feedback', components.feedback)
    .directive('fileModel', directives.fileModel)
    .directive('focusMe', directives.focusMe)
    .directive('ngEnter', directives.ngEnter)
    .directive('preview', directives.preview)
    .directive('pxStyle', directives.pxStyle)
    .directive('rcDisabled', directives.rcDisabled)
    .directive('removeHref', directives.removeHref)
    .directive('sort', components.sort)
    .directive('webcam', directives.webcam)
    .provider('rcDisabled', servicies.RcDisabledProvider)
    .service('alertService', servicies.AlertService)
    .filter('tssHighlight', tssHighlight_1.tssHighlight);
