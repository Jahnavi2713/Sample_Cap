sap.ui.define([
    "samplecap/project1/controller/BaseController",
],
function (BaseController) {
    "use strict";

    return BaseController.extend("samplecap.project1.controller.Dashboard", {
        onInit: function () {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();
            this.oModel = this.oOwnerComponent.getModel();
            this.oRouter.getRoute("dashboard").attachMatched(this._onRouteMatched, this);
        },
        onPressLogin:function(){
            console.log("Hi");
        }
    });
});
