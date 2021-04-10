$(document).ready(function(){
	  // dragable
	  $( "#draggable" ).draggable();
	  // resizeable
	  $( "#resizable" ).resizable({
      animate: true
    });
    // selectable
    $( "#selectable" ).selectable();
    // accordion
    $( "#accordion" ).accordion({
     	collapsible: true
    });
    // autocomplete
    var aTags = [ "psd", "html", "css", "js", "jq", "php" ];
    $( "#tags" ).autocomplete({
      source: aTags
    });
    // checkbox
    $( ".c_input" ).checkboxradio();
    // dtaepicker
    $( "#datepicker" ).datepicker();
    // dialog
    $( "#dialog" ).dialog();
    // progressbar
    $( "#progressbar" ).progressbar({
      value: 50
    });
    // slide
    $( "#slider" ).slider();
    // tab
    $( "#tabs" ).tabs({
      collapsible: true
    });
    // toolpit
    $( document ).tooltip();
    //dropable

});
