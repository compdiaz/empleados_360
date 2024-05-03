sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("empleados360.controller.App", {
            onInit: function () {

            },

            onPressPaso2: function(oEvent) {

               this.getView().byId("CrearEmpleadoWizard").nextStep();
console.log(oEvent)
                }
        });
    });
