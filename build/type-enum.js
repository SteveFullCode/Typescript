"use strict";
// Type enum
var DesignColors;
(function (DesignColors) {
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
//console.log(DesignColors.black);
var Status;
(function (Status) {
    Status[Status["ADMIN"] = 0] = "ADMIN";
    Status[Status["USER"] = 1] = "USER";
    Status[Status["SUPPORT"] = 2] = "SUPPORT";
})(Status || (Status = {}));
console.log(Status.SUPPORT);
