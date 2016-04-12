System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ROOM_STATE, ROOM_RATING, ROOM_SPEED, RoomModel;
    return {
        setters:[],
        execute: function() {
            (function (ROOM_STATE) {
                ROOM_STATE[ROOM_STATE["INACTIVE"] = 0] = "INACTIVE";
                ROOM_STATE[ROOM_STATE["ACTIVE"] = 1] = "ACTIVE";
            })(ROOM_STATE || (ROOM_STATE = {}));
            exports_1("ROOM_STATE", ROOM_STATE);
            (function (ROOM_RATING) {
                ROOM_RATING[ROOM_RATING["G"] = 0] = "G";
                ROOM_RATING[ROOM_RATING["R"] = 1] = "R";
            })(ROOM_RATING || (ROOM_RATING = {}));
            exports_1("ROOM_RATING", ROOM_RATING);
            (function (ROOM_SPEED) {
                ROOM_SPEED[ROOM_SPEED["SLOW"] = 0] = "SLOW";
                ROOM_SPEED[ROOM_SPEED["MEDIUM"] = 1] = "MEDIUM";
                ROOM_SPEED[ROOM_SPEED["FAST"] = 2] = "FAST";
            })(ROOM_SPEED || (ROOM_SPEED = {}));
            exports_1("ROOM_SPEED", ROOM_SPEED);
            RoomModel = (function () {
                function RoomModel(name, id, rating, speed) {
                    this.name = name;
                    this.id = id || '';
                    this.content_rating = rating || ROOM_RATING.G;
                    this.speed = speed || ROOM_SPEED.MEDIUM;
                    this.state = ROOM_STATE.INACTIVE;
                    this.loaded = false;
                    this.last_activity = window.Firebase.ServerValue.TIMESTAMP;
                }
                return RoomModel;
            }());
            exports_1("RoomModel", RoomModel);
        }
    }
});
//# sourceMappingURL=models.room.js.map