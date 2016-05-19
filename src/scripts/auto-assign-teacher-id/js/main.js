/*global $j*/
(function($){
  $(document).ready(function () {

    //fetch js https://github.com/github/fetch json example
    fetch('/ws/schema/query/org.irondistrict.autoid.queries.teacher', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(function(response){
        return response.json()
      }).then(function (json) {
        var teacherIdField = $('[name=teachernumber]')[0];
        teacherIdField.value = json.record[0].teachernumber;
        teacherIdField.setAttribute('readonly', 'readonly');
      }).catch(function(ex){
        console.log('parsing error', ex)
      })


  });
})($j);
