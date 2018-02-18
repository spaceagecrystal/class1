$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

	$('#button-4').hover(function(){
		$('#button-5').toggle('slow');
	});

	$('#button-11').click(function() {
	$(this).animate(
    { height: "10px" }, // what we are animating
    'slow', // how fast we are animating
    'easeOutBounce', // the type of easing
    function() { // the callback
    });
	});

	$('#button-12').click(function() {
	$(this).animate(
    { width: "50px" }, // what we are animating
    'slow', // how fast we are animating
    'easeOutBounce', // the type of easing
    function() { // the callback
    });
	});
	
	$('#button-13').click(function() {
	$(this).animate(
    { 
	borderTopLeftRadius: 90, 
    borderTopRightRadius: 90, 
    borderBottomLeftRadius: 90, 
    borderBottomRightRadius: 90
   	}, // what we are animating
    'slow', // how fast we are animating
    'easeOutBounce', // the type of easing
    function() { // the callback
    });
	});

	$('#button-14').click(function() {
	$(this).animate(
    { 
	borderTopLeftRadius: 90, 
    borderTopRightRadius: 90, 
    borderBottomLeftRadius: 90, 
    borderBottomRightRadius: 90,
    width: "40px",
    height: "40px",
    marginLeft: "45%",
    marginTop: "28%"
   	}, // what we are animating
    'slow', // how fast we are animating
    'easeOutBounce', // the type of easing
    function() { // the callback
    });
	});

	$('#button-15').click(function() {
	$(this).animate(
    { 
	borderTopLeftRadius: 90, 
    borderTopRightRadius: 90, 
    borderBottomLeftRadius: 90, 
    borderBottomRightRadius: 90,
    width: "40px",
    height: "40px",
    marginLeft: "45%",
    marginTop: "28%"
   	}, // what we are animating
    'slow', // how fast we are animating
    'easeInOutBack', // the type of easing
    function() { // the callback
    });
	});

	$('#button-16').click(function() {
	$(this).animate(
    { height: "10px",
     marginTop: "45%"}, // what we are animating
    'slow', // how fast we are animating
    'easeOutBounce', // the type of easing
    function() { // the callback
    });
	});

	$('#button-17').click(function() {
	$(this).animate(
    { 
	borderTopLeftRadius: 90, 
    borderTopRightRadius: 90, 
    borderBottomLeftRadius: 90, 
    borderBottomRightRadius: 90,
    width: "90px",
    height: "90px",
    marginLeft: "45%"
   	}, // what we are animating
    'slow', // how fast we are animating
    'easeInOutBack', // the type of easing
    function() {
	$(this).animate(
    {      
    marginTop: "100%" }, 'slow');
     // the callback
    });
	});

		$('#button-18').click(function() {
	$(this).animate(
    { 
	borderTopLeftRadius: 90, 
    borderTopRightRadius: 90, 
    borderBottomLeftRadius: 90, 
    borderBottomRightRadius: 90,
   	}, // what we are animating
    'slow', // how fast we are animating
    'easeInOutBack', // the type of easing
    function() {
	$(this).animate(
    {      
    marginTop: "100%" }, 1500);
     // the callback
    });
	});

	$('#button-19').click(function() {
	$(this).animate(
    { 
	borderTopLeftRadius: 90, 
    borderTopRightRadius: 90, 
    borderBottomLeftRadius: 90, 
    borderBottomRightRadius: 90,
   	}, // what we are animating
    'slow', // how fast we are animating
    'easeInCirc', // the type of easing
    function() {
	
    });
	});

	$('#button-20').click(function() {
		alert("hey there!")
	});

    $('#button-21').click(function() {
	$(this).animate(
    { 
     marginTop: "-70px"}, // what we are animating
    'slow', // how fast we are animating
    'easeOutCirc', // the type of easing
    function() { // the callback
    });
	});

 	$('#button-34').click(function() {
		$(this).css('background-color', '#de455e');
				$("#button-37").css('background-color', '#000');

	});

	$('#button-35').click(function() {
		$(this).css('background-color', '#f02bc8');
				$("#button-39").css('background-color', '#000');

	});
	$('#button-36').click(function() {
		$(this).css('background-color', '#712bf0');
	});
	$('#button-37').click(function() {
		$(this).css('background-color', '#2badf0');
	});
	$('#button-38').click(function() {
		$(this).css('background-color', '#2bf067');
	});
	$('#button-39').click(function() {
		$(this).css('background-color', '#eac522');
	});
	$('#button-40').click(function() {
		$(this).css('background-color', '#ff6f00');
		$("#button-35").css('background-color', '#000');
	});
	$('#button-41').click(function() {
		$(this).css('background-color', '#sef2b59');
	});


    $('#button-41').click(function() {
	$(this).animate(
    { 
     opacity: 0 }, // what we are animating
    'slow', // how fast we are animating
    function() { // the callback
    	$("#button-42").animate(
    { 
     opacity: 0 }, // what we are animating
    'slow', // how fast we are animating
    function() { // the callback
    	 	$("#button-43").animate(
    { 
     opacity: 0 }, // what we are animating
    'slow', // how fast we are animating
    function() { // the callback
    	
    });
    });
    });
	});




});

