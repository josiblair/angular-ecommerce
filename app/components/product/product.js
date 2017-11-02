angular.module('ecommerce').component('product', {
    templateUrl: "app/components/product/product.html",
    controller: function() {
        
    },
    controllerAs: 'pd',
    bindings: {
        product:"<",  //4 types of binding: (<) One Way Binding, (=) Two Way Binding, (@)String Binding, and (&) Action Binding
        buttonLabel:"@",
        buttonAction:"&"
    }
})