
module.exports = function (app) {
    require('./voucherController.js')(app);
    require('./voucherService.js')(app);
}