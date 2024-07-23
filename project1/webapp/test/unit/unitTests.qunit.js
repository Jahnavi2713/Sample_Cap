/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sample_cap/project1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
