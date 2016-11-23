$(document).ready(function() {
		console.log("READY");

	$("#clicker").click(function() {
		console.log('CLICK');
		$("#morning, #evening").toggleClass("hidden");
		$("body").toggleClass("daytime");
		$("#clicker").toggleClass("moon");
				$("#clicker").toggleClass("sun");

	});
});