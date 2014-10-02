/*global $j*/
var custom = {};

custom.parsePsData = function () {
    'use strict';
    var data = {};
    try {
        data.psData = $j.parseJSON($j('#ps-data').data().ps);
    } catch (e) {
        data.exceptionMsg = e.message;
    }
    return data;
};

custom.insertTeacherId = function (psData) {
    'use strict';
    var teacherIdField = $j('[name=teachernumber]')[0];
    teacherIdField.value = psData.teacherId;
    teacherIdField.setAttribute('readonly', 'readonly');
};

custom.main = function () {
    'use strict';
    var psData = custom.parsePsData().psData;
    custom.insertTeacherId(psData);
};

$j(document).ready(function () {
    'use strict';
    custom.main();
});