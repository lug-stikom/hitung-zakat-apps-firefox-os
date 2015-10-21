$(document).ready(function(){
	$("#menuZakatFitrah").hide();
	$("#menuZakatSimpanan").hide();
	$("#menuZakatProfesi").hide();
	$("#menuZakatNiaga").hide();  
	$("#idMenuUtama").show();
	$("#idFooter").show();
	$("#idFooter2").hide();
	$("#divAbout").hide();
	//$("#idBody").attr("style", "background-image:url('img/bg_other.jpg');");

	$("#idZakatFitrah").click(function() {
		$("#idBody").attr("style", "background-image:url('img/bg_other.jpg');").fadeIn(1000);
		$("#menuZakatFitrah").attr("style", "animation: rightToCurrent 0.4s forwards;");
		$("#idMenuUtama").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(130);
		$("#idFooter").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(800);
		$("#idFooter2").attr("style", "animation: rightToCurrent 0.4s forwards;");
	});

	$("#idZakatSimpanan").click(function() {
		$("#idBody").attr("style", "background-image:url('img/bg_other.jpg');").fadeIn(1000);
		$("#menuZakatSimpanan").attr("style", "animation: rightToCurrent 0.4s forwards;");
		$("#idMenuUtama").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(130);
		$("#idFooter").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(800);
		$("#idFooter2").attr("style", "animation: rightToCurrent 0.4s forwards;");
	});

	$("#idZakatProfesi").click(function() {
		$("#idBody").attr("style", "background-image:url('img/bg_other.jpg');").fadeIn(1000);
		$("#menuZakatProfesi").attr("style", "animation: rightToCurrent 0.4s forwards;");
		$("#idMenuUtama").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(130);
		$("#idFooter").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(800);
		$("#idFooter2").attr("style", "animation: rightToCurrent 0.4s forwards;");
	});

	$("#idZakatNiaga").click(function() {
		$("#idBody").attr("style", "background-image:url('img/bg_other.jpg');").fadeIn(1000);
		$("#menuZakatNiaga").attr("style", "animation: rightToCurrent 0.4s forwards;");
		$("#idMenuUtama").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(130);
		$("#idFooter").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(800);
		$("#idFooter2").attr("style", "animation: rightToCurrent 0.4s forwards;");
	});

	$("#idFooter2").click(function(){
		$("#idBody").attr("style", "background-image:url('img/bg.jpg');").fadeIn(1000);
		$("#menuZakatFitrah").hide();
		$("#menuZakatSimpanan").hide();
		$("#menuZakatProfesi").hide();
		$("#menuZakatNiaga").hide();
		$("#divAbout").hide();
		$("#idMenuUtama").attr("style", "animation: leftToCurrent 0.4s forwards;");
		$("#idFooter").attr("style", "animation: leftToCurrent 0.6s forwards;").fadeIn(800);
		$("#idFooter2").attr("style", "animation: currentToRight 0.6s forwards;").fadeOut(200); 
	});

	$("#idAbout").click(function() {
		$("#idBody").attr("style", "background-image:url('img/bg_other.jpg');").fadeIn(1000);
		$("#divAbout").attr("style", "animation: rightToCurrent 0.4s forwards;");
		$("#idMenuUtama").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(130);
		$("#idFooter").attr("style", "animation: currentToLeft 0.4s forwards;").fadeOut(800);
		$("#idFooter2").attr("style", "animation: rightToCurrent 0.4s forwards;");
	});
});