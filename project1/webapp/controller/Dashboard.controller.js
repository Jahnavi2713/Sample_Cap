sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("samplecap.project1.controller.Dashboard", {
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
