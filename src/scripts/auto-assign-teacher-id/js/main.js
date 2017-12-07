import $ from 'jquery';

export default function() {
  $(document).ready(function() {
    var teacherNumber = $('#ps-data').data('ps');
    var teacherIdField = $('[name=teachernumber]')[0];
    teacherIdField.value = teacherNumber.teacherId;
    teacherIdField.setAttribute('readonly', 'readonly');
  });
}
