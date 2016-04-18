export declare function webcam($rootScope: any): {
    restrict: string;
    scope: {
        webcam: string;
        width: string;
        height: string;
        cropWidth: string;
        cropHeight: string;
        onLive: string;
        onError: string;
    };
    link: (scope: any, element: any, attrs: any, ngModelCtrl: any) => void;
};
