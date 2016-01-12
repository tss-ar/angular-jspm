function ngEnter() {
    'ngInject';
    return {
        link: function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        }
    };
}
exports.ngEnter = ngEnter;

//# sourceMappingURL=ngEnter.js.map