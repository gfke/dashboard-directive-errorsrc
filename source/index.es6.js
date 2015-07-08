'use strict';

export default (ngModule) => {
    ngModule.directive('gfkeErrorSrc', [
        () => ({
            restrict: 'A',
            link: (scope, element, attrs) => {
                let defaultSrc = attrs.src;
                element.bind('error', () => {
                    if (attrs.errSrc) {
                        element.attr('src', attrs.errorSrc);
                    } else if (attrs.src) {
                        element.attr('src', defaultSrc);
                    }
                });
            }
        })
    ]);
};