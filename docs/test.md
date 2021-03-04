<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="/demo.js"></script>
 
<div id="text"></div>

<script>
$().ready(function(){
    $.getJSON( "/sample-data.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});
</script>
 
