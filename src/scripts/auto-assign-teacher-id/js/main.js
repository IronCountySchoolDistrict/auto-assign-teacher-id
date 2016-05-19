/*global $j*/
(function($){
  $(document).ready(function () {

    //fetch js https://github.com/github/fetch json example
    fetch('/ws/schema/query/org.irondistrict.autoid.queries.teacher')
      .then(function(response){
        return response.json()
      }).then(function (json) {
        var teacherIdField = $('[name=teachernumber]')[0];
        console.log(json.teacherId);
        teacherIdField.value = json.TEACHERNUMBER;
        teacherIdField.setAttribute('readonly', 'readonly');
      }).catch(function(ex){
        console.log('parsing error', ex)
      })


  });
})($j);
