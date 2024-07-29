sap.ui.define([
    "samplecap/project1/controller/BaseController",
],
function (BaseController) {
    "use strict";

    return BaseController.extend("samplecap.project1.controller.View1", {
        onInit: function () {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();
            this.oModel = this.oOwnerComponent.getModel();
        },
        onPressLogin:function(){
            this.oRouter.navTo("dashboard");
        }
    });
});
