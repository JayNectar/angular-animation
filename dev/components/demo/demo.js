
app.component('demo', {
    templateUrl: '/components/demo/demo.html',
    controller: ['$scope', '$timeout',
        function($scope, $timeout ){
            hljs.initHighlightingOnLoad();


            $scope.isDisplayed = true;

            $scope.show = function(){
                $scope.isDisplayed = true;
            };
            $scope.hide = function(){
                $scope.isDisplayed = false;
            };


        }]
});
