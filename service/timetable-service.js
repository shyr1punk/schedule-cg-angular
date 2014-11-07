angular.module('schedule').factory('timetableService',function() {

	var timetableService = {
        /**
         * Set timetable data, received from server
         *
         * @param data
         */
        setTimetable: function (data) {
           timetableData = data;
        },

        /**
         * Get timetable data
         *
         * @returns {Object}
         */
        getTimetable: function () {
            return timetableData;
        }
    }, timetableData;

	return timetableService;
});