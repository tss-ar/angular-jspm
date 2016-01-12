/*@ngInject*/
function preview() {
    return {
        restrict: 'A',
        scope: {
            previewdest: '=preview'
        },
        link: function (scope, element, attrs) {
            if (!window.FileReader)
                return;
            element.on('change', function () {
                var elementRaw = element[0];
                if (!elementRaw.files || !elementRaw.files[0])
                    return;
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.$apply(function () {
                        scope.previewdest = e.target.result;
                    });
                };
                reader.readAsDataURL(elementRaw.files[0]);
            });
        }
    };
}
exports.preview = preview;
