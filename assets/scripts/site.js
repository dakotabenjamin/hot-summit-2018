---
---

{% include js/jquery.min.js %}
{% include js/jquery.bxslider.min.js %}
{% include js/venues.js %}


$(document).ready(function(){

	$("#day26").show();

    $(".schedule-nav-date").click(function(event){
       $(".schedule-table-item").hide();
       $("#" + event.target.name).show();
    });

});