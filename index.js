$(document).ready(function() {
    $(".cont").hide();
    $(".container0").show();
    
    $(".cont>.header>.link0").click(function() {
        $(".cont").hide();
        $(".container0").show();
    });
    
    $(".cont>.header>.link1").click(function() {
        $(".cont").hide();
        $(".container1").show();
    });
    
    $(".cont>.header>.link2").click(function() {
        $(".cont").hide();
        $(".container2").show();
    });
});