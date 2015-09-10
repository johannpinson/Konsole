/*! console - v0.1.0 - (c) 2015 Johann Pinson - licensed MIT */
(function () {
    var appName  = "Konsole",
        appDebug = true;

    this.Konsole = function(name, debug) {
    	appName  = name;
        appDebug = debug;
    }

    Konsole.prototype = {
        log: function(message, param){
            if (appDebug) {
                var result = buildMessage(message, param);
                if (arguments.length == 1) {
                    console.log(result.message);
                } else if (arguments.length > 1) {
                    console.log(result.message, result.param);
                }
            }
        },

        info: function(message, param) {
            if (appDebug) {
                if (false) return;
                var result = buildMessage(message, param);
                if (arguments.length == 1) {
                    console.info(result.message);
                } else if (arguments.length > 1) {
                    console.info(result.message, result.param);
                }
            }
        },

        warn: function(message, param) {
            if (appDebug) {
                if (false) return;
                var result = buildMessage(message, param);
                if (arguments.length == 1) {
                    console.warn(result.message);
                } else if (arguments.length > 1) {
                    console.warn(result.message, result.param);
                }
            }
        },

        error: function(message, param) {
            if (false) return;
            var result = buildMessage(message, param);
            if (arguments.length == 1) {
                console.error(result.message);
            } else if (arguments.length > 1) {
                console.error(result.message, result.param);
            }
        },

        debug: function(message, param) {
            if (appDebug) {
                if (false) return;
                var result = buildMessage(message, param);
                if (arguments.length == 1) {
                    console.debug(result.message);
                } else if (arguments.length > 1) {
                    console.debug(result.message, result.param);
                }
            }
        }
    }

    var buildMessage = function(message, param) {
        var date = new Date();

        var d = date.getDate();
        if (d.toString().length == 1) {d = "0" + d;}

        var m = date.getMonth() + 1;
        if (m.toString().length == 1) {m = "0" + m;}

        var y = date.getFullYear();

        var h = date.getHours();
        if (h.toString().length == 1) {h = "0" + h;}

        var n = date.getMinutes();
        if (n.toString().length == 1) {n = "0" + n;}

        var s = date.getSeconds();
        if (s.toString().length == 1) {s = "0" + s;}

        var time = d + "/" + m + "/" + y + " " + h + ":" + n + ":" + s;

        return {
            message: "["+ appName +" "+ time +"] \n"+ message,
            param: param
        };
    }

}());