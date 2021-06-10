$(document).ready(function (){


    function formatState (state) {
        if (!state.id) {
          return state.text;
        }
        var baseUrl = "/reduslim/img/image 7.png";
        var $state = $(
          '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
      };
      
      $(".js-example-templating").select2({
        templateResult: formatState
      });


})