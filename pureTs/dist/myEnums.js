"use strict";
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;
////we can do it in a proper way with the help of enum
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const seat = SeatChoice.AISLE;
