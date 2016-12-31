
app.directive('animation', [function(){
    return {
        restrict: 'A',
        scope: {
            auto: '=?animation',
            show: '=?'
        },
        link: function(scope, element, attrs) {

            scope.auto = scope.auto || '';
            scope.autoDuration = attrs.autoDuration || 6;
            scope.autoDelay = attrs.autoDelay || 2;
            scope.autoIterationCount = attrs.autoIterationCount || 1;

            scope.in = attrs.in || 'fadeIn';
            scope.inDuration = attrs.inDuration || 6;
            scope.inDelay = attrs.inDelay || 2;
            scope.inIterationCount = attrs.inIterationCount || 1;

            scope.out = attrs.out || 'fadeOut';
            scope.outDuration = attrs.outDuration || 5;
            scope.outDelay = attrs.outDelay || 2;
            scope.outIterationCount = attrs.outIterationCount || 1;

            scope.elementDisplayed = false;

            scope.itemIn = function(){
                element.removeClass(scope.buildOutClasses()).addClass(scope.buildInClasses());
                scope.elementDisplayed = true;
            };
            scope.itemOut = function(){
                element.removeClass(scope.buildInClasses()).addClass(scope.buildOutClasses());
                scope.elementDisplayed = false;
            };
            scope.itemAuto = function(){
                element.addClass(scope.buildAutoClasses());
                scope.elementDisplayed = true;
            };


            scope.$watch('show', function(newValue, oldValue) {
                if(newValue != undefined){
                    scope.show = newValue;
                    if(scope.show){
                        element.removeClass('add-hidden');
                        scope.itemIn();
                    }else{
                        if(scope.elementDisplayed){
                            scope.itemOut();
                        }else{
                            element.addClass('add-hidden');
                        }
                    }
                }
            }, true);

            scope.buildAutoClasses = function(){
                var duration = 'duration-' + scope.autoDuration;
                var delay = 'delay-' + scope.autoDelay;
                var iterationCount = 'iteration-count-' + scope.autoIterationCount;
                return scope.auto + ' ' + duration + ' ' + delay + ' ' + iterationCount + ' animated';
            };

            scope.buildInClasses = function(){
                var duration = 'duration-' + scope.inDuration;
                var delay = 'delay-' + scope.inDelay;
                var iterationCount = 'iteration-count-' + scope.inIterationCount;
                return scope.in + ' ' + duration + ' ' + delay + ' ' + iterationCount + ' animated';
            };

            scope.buildOutClasses = function(){
                var duration = 'duration-' + scope.outDuration;
                var delay = 'delay-' + scope.outDelay;
                var iterationCount = 'iteration-count-' + scope.outIterationCount;
                return scope.out + ' ' + duration + ' ' + delay + ' ' + iterationCount + ' animated';
            };


            /*
            **Auto Init
            */

            if(scope.auto){
                scope.itemAuto();
            };
        }
    }
}]);