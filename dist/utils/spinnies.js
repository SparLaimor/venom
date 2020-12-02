"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpinnies = void 0;
var Spinnies = require("spinnies");
var spinnies = null;
function getSpinnies(options) {
    if (!spinnies) {
        spinnies = new Spinnies(options);
    }
    return spinnies;
}
exports.getSpinnies = getSpinnies;
//# sourceMappingURL=spinnies.js.map