sap.ui.define([
    "samplecap/project1/controller/BaseController",
],
function (BaseController) {
    "use strict";

    return BaseController.extend("samplecap.project1.controller.CreateBookOrder", {
        onInit: function () {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();
            this.oModel = this.oOwnerComponent.getModel();
            this.oRouter.getRoute("create-book-order").attachMatched(this._onRouteMatched, this);
        },
        onPressNavCreate:function(){
            this.oRouter.navTo("create-book-order");
        }
    });
});
