/* global $j, custom*/

custom.runTests = function () {
// Load qunit files
    var qunit = $j('#qunit');
    $j('body').children().not('#qunit').css({'display': 'none'});
    $j('body').prepend(qunit);

    test('DOM selections properly return results', function () {
        notEqual($j('#ps-data').length, 0, '#ps-data selector returned results');
        equal($j('[name=teachernumber]').length, 1, 'page contains only one DOM element with name teachernumber');
    });

    test('psData is properly parsed and correct', function () {
        var parsedPsData = custom.parsePsData();
        strictEqual(parsedPsData.exceptionMsg, undefined, 'ps data parses with no exceptions');
        ok(parsedPsData.psData.hasOwnProperty('teacherId'), 'ps data object has property teacherId');
    });

    test('new teacher id gets inserted', function () {
        var psData = custom.parsePsData().psData;
        custom.insertTeacherId(psData);
        equal($j('[name=teachernumber]').val(), psData.teacherId, 'Value of teachernumber field matches teacherId');
    });
}