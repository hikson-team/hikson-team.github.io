$("#sendmail").on("click", function() {
	var subject = $("#subject").val().trim();
	var email = $("#email").val().trim();
	var name = $("#name").val().trim();
	var message = $("#message").val().trim();

	if(subject == "") {
		$("#errorMess").text("Введите тему вашего сообщения.");
		return false;
	} else if(email == "") {
		$("#errorMess").text("Введите вашу почту.");
		return false;
	} else if(name == "") {
		$("#errorMess").text("Введите ваше имя.");
		return false;
	} else if(message.length < 5) {
		$("#errorMess").text("Введите ваше сообщение.");
		return false;
	}

	$("#errorMess").text("");

});