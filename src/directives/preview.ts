interface IWindow extends Window {
    FileReader: FileReader;
}

interface IFileReaderOnLoadEvent extends Event {
    target: IFileReaderOnLoadEventTarget;
}

interface IFileReaderOnLoadEventTarget extends EventTarget {
    result: string;
}

/*@ngInject*/
export function preview() {
    return {
        restrict: 'A',
        scope: {
            previewdest: '=preview'
        },
        link: (scope, element, attrs) => {
            if (!(<IWindow>window).FileReader)
                return;

            element.on('change', function () {
                var elementRaw = element[0];

                if (!elementRaw.files || !elementRaw.files[0])
                    return;

                var reader = new FileReader();

                reader.onload = function (e: IFileReaderOnLoadEvent) {
                    scope.$apply(function () {
                        scope.previewdest = e.target.result;
                    });
                };

                reader.readAsDataURL(elementRaw.files[0]);
            });
        }
    };
}