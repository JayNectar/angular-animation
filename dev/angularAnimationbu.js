
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

            scope.hideElement = function(){
                element.addClass('add-hidden');
            };

            scope.showElement = function(){
                element.removeClass('add-hidden');
            };

            scope.isHidden = function(){
                return element.hasClass('add-hidden');
            };

            scope.$watch('show', function(newValue, oldValue) {
                if(newValue != undefined){
                    scope.show = newValue;
                    if(scope.show){
                        if(scope.isHidden()){
                            scope.showElement();
                        }
                        scope.itemIn();
                    }else{
                        if(scope.elementDisplayed){
                            scope.itemOut();
                        }else{
                            scope.hideElement();
                        }

                    }
                }
            }, true);

            if(scope.auto){
                scope.itemAuto();
            };


            scope.buildAutoClasses = function(){
                var duration = '';
                var delay = '';
                var iterationCount = 1;
                if(scope.inDuration != undefined){
                    duration = 'duration-' + scope.autoDuration;
                }
                if(scope.inDelay != undefined){
                    delay = 'delay-' + scope.autoDelay;
                }
                if(scope.inIterationCount != undefined){
                    iterationCount = 'iteration-count-' + scope.autoIterationCount;
                }
                return scope.auto + ' ' + duration + ' ' + delay + ' ' + iterationCount + ' animated';
            };

            scope.buildInClasses = function(){
                var duration = '';
                var delay = '';
                var iterationCount = 1;
                if(scope.inDuration != undefined){
                    duration = 'duration-' + scope.inDuration;
                }
                if(scope.inDelay != undefined){
                    delay = 'delay-' + scope.inDelay;
                }
                if(scope.inIterationCount != undefined){
                    iterationCount = 'iteration-count-' + scope.inIterationCount;
                }
                return scope.in + ' ' + duration + ' ' + delay + ' ' + iterationCount + ' animated';
            };

            scope.buildOutClasses = function(){
                var duration = '';
                var delay = '';
                var iterationCount = 1;
                if(scope.outDuration != undefined){
                    duration = 'duration-' + scope.outDuration;
                }
                if(scope.outDelay != undefined){
                    delay = 'delay-' + scope.outDelay;
                }
                if(scope.outIterationCount != undefined){
                    iterationCount = 'iteration-count-' + scope.outIterationCount;
                }
                return scope.out + ' ' + duration + ' ' + delay + ' ' + iterationCount + ' animated';
            };
        }
    }
}]);