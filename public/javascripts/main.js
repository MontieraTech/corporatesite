
function message() {
	$('#thanks').show();
	setInterval(function(){
		$('#thanks').hide();
	}, 7000);
}


function loadSite(data){

	document.title = data.title;

	if(data.logo.img){
		$("#logoImage").attr("src", data.logo.img);
	}

	$("#logoText").html("<h3 style='margin:0;padding:10px 0 0 0'>" + data.logo.txt + "</h1>");

	$(".cname").text(data.company_name);
	$(".cmail").text(data.email);
	$(".curl").text(data.url);
	$(".cphone").text(data.phone);

	$("#tou").attr("href", data.terms_of_use);
	$("#pp").attr("href", data.privacy_policy);
}


$(document).ready(function(){

	$.ajax({
	  url: "http://" + location.host + "/config",
	  data: {},
	  success: function(data){
	  	loadSite(data);
	  },
	  dataType: "json"
	});


	$('#thanks').hide();

	function scrollToContact(delay){
		  $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 900);
	}

	$("#home_btn").click(function(){
		  $('html, body').animate({
                    scrollTop: $("#home").offset().top
                }, 200);
	});

	$("#about_us_btn").click(function(){
		  $('html, body').animate({
                    scrollTop: $("#about_us").offset().top
                }, 800);
	});

	$("#blog_btn").click(function(){
		  $('html, body').animate({
                    scrollTop: $("#blog").offset().top
                }, 1000);
	});

	$("#contact_btn").click(function(){
		scrollToContact(1400);
	});

	$("#linkparter_btn").click(function(){
		scrollToContact(900)
	});

	$("#contactus_btn").click(function(){
		scrollToContact(900)
	});


	var amountScrolled = 300;

	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.back-to-top').fadeIn('slow');
		} else {
			$('a.back-to-top').fadeOut('slow');
		}
	});

	$('a.back-to-top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});

	$('#facebook').click(function(){
		window.location.replace("https://facebook.com");
	});
	$('#twitter').click(function(){
		window.location.replace("https://twitter.com");
	});
	$('#linkedin').click(function(){
		window.location.replace("https://linkedin.com");
	});

	$('#submit_form').click(function(){
		//message();
		var url = 'http://204.145.74.53:4000/sendmail';
		var data = {
			  from_: "bulkitc11@gmail.com",
			  to_ : "partners@stellarisdigital.com",
			  subject:$('#subject').val(),
			  template : "<html><body>email:"+ $('#email').val() +"name : " +$('#name').val()+" <br/> message : "+  $('#message').val() +"</body></html>"
			};
		$.post(url,data,function(data,status,xhr){
			message();
			console.log(data);
			console.log(status);
			console.log(xhr);
		},"json");
	});
});


function gohome(){
	location.href = "/index.html";
}