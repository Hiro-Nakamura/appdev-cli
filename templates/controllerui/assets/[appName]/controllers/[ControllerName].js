
steal(
        // List your Controller's dependencies here:
        'appdev',
//        '<%= appName %>/models/Projects.js',
//        'appdev/widgets/ad_delete_ios/ad_delete_ios.js',
//        '<%= appName %>/views/<%= ControllerName %>/<%= ControllerName %>.ejs',
function(){



    AD.controllers.<%= ControllerName %> = AD.classes.UIController.extend({


        init: function (element, options) {
            var self = this;
            this.options = AD.defaults({
                    templateDOM: '<%= appName %>/views/<%= ControllerName %>/<%= ControllerName %>.ejs',
            }, options);

            this.dataSource = this.options.dataSource; // AD.models.Projects;

            this.initDOM();

            // Call parent init
            AD.classes.UIController.prototype.init.apply(this, arguments);
        },



        initDOM: function () {

            this.element.html(can.view(this.options.templateDOM, {} ));

        },



        '.ad-item-add click': function ($el, ev) {

            ev.preventDefault();
        },


    });


});