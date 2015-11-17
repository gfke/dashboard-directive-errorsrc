'use strict';

export default (ngModule) => {
    ngModule.directive('gfkeErrorSrc', [
        () => ({
            restrict: 'A',
            link: (scope, element, attrs) => {
                let defaultSrc = attrs.src,
                    errorHandler = () => {
                        let newSrc = null;
                        if (attrs.gfkeErrorSrc) {
                            newSrc = attrs.gfkeErrorSrc;
                        } else if (attrs.src) {
                            newSrc = defaultSrc;
                        }
                        if (newSrc !== null && newSrc !== element.attr('src')) {
                            element.attr('src', newSrc);
                        }
                    };

                element.bind('error', errorHandler);

                let $destroyHandler = scope.$on('$destroy', () => {
                    // Properly remove the error handler
                    element.unbind('error', errorHandler);
                    $destroyHandler();

                    // Prevent memory leaks
                    defaultSrc = undefined;
                });
            }
        })
    ]);
};
