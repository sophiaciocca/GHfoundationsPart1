function createCalculator() {

    //return new calculator object that has the following properties:
    return {
        total: 0,

        value: function() {
            return this.total;
        },

        add: function(x) {
            this.total = this.total + x;

        },

        subtract: function(y) {
            this.total = this.total - y;
        },

        clear: function() {
            this.total = 0;
        }        
    }

};