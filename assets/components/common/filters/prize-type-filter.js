'use strict';
    angular.module('app.common').filter("prizeTypeFilter", function (AppConfig) {
        var prizeSystems = AppConfig.prize_types;
        return function(key) {
            for (var i in prizeSystems) {
                var prize = prizeSystems[i];
                if (prize.value == key) {
                    return prize.label;
                }
            }
        };
    });
