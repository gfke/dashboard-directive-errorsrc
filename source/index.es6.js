'use strict';

export default (ngModule) => {
    ngModule.directive('gfkeErrorSrc', [
        () => ({
            restrict: 'A',
            link: (scope, element, attrs) => {
                let defaultSrc = attrs.src,
                    errorHandler = () => {
                        if (attrs.gfkeErrorSrc) {
                            element.attr('src', attrs.gfkeErrorSrc);
                        } else if (attrs.src) {
                            element.attr('src', defaultSrc);
                        }
                    };

                element.bind('error', errorHandler);

                scope.$on('$destroy', () => {
                    // Properly remove the error handler
                    element.unbind('error', errorHandler);

                    // Prevent memory leaks
                    defaultSrc = undefined;
                });
            }
        })
    ]);
};
