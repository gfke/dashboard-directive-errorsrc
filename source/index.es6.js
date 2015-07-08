'use strict';

export default (ngModule) => {
    ngModule.directive('gfkeErrorSrc', [
        () => ({
            restrict: 'A',
            link: (scope, element, attrs) => {
                let defaultSrc = attrs.src;
                element.bind('error', () => {
                    if (attrs.gfkeErrorSrc) {
                        element.attr('src', attrs.gfkeErrorSrc);
                    } else if (attrs.src) {
                        element.attr('src', defaultSrc);
                    }
                });
            }
        })
    ]);
};
