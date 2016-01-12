export declare function webcam(): {
    restrict: string;
    scope: {
        width: string;
        height: string;
        cropWidth: string;
        cropHeight: string;
        onLive: string;
        onError: string;
    };
    link: (scope: any, element: any, attrs: any, ngModelCtrl: any) => void;
};
