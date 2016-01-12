declare var Webcam;

class WebcamConfig {
    image_format: string;
    width: number;
    height: number;
    crop_width: number;
    crop_height: number;
}

export function webcam() {
    'ngInject';

    return {
        restrict: 'A',
        scope: {
            width: '@webcamWidth',
            height: '@webcamHeight',
            cropWidth: '@webcamCropWidth',
            cropHeight: '@webcamCropHeight',
            onLive: '&webcamOnLive',
            onError: '&webcamOnError',
        },
        link: (scope, element, attrs, ngModelCtrl) => {
            var elementRaw = element[0];

            var config = new WebcamConfig();
            config.image_format = 'png';

            if (scope.width) {
                config.width = parseInt(scope.width);
                elementRaw.style.width = scope.width + 'px';
            }

            if (scope.height) {
                config.height = parseInt(scope.height);
                elementRaw.style.height = scope.height + 'px';
            }

            if (scope.cropWidth) {
                config.crop_width = parseInt(scope.cropWidth);
            }

            if (scope.cropHeight) {
                config.crop_height = parseInt(scope.cropHeight);
            }

            Webcam.on('live', function (error) {
                if (scope.onLive()) {
                    scope.$apply(function () {
                        scope.onLive()();
                    });
                }
            });

            Webcam.on('error', function (error) {
                if (scope.onError()) {
                    scope.$apply(function () {
                        scope.onError()(error);
                    });
                }
            });

            Webcam.set(config);

            Webcam.attach(elementRaw);
        }
    };
}