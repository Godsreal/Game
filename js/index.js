$(document).ready(function () {
	$("#login-form").submit(function (event) {
		// Prevent the default form submission
		event.preventDefault();

		// Make an AJAX call to the API endpoint
		$.ajax({
			type: "POST", // Adjust the method as needed
			url: "/", // Replace with your actual API endpoint
			data: $("#login-form").serialize(), // Serialize form data
			success: function (response) {
				// Handle success if needed
				console.log("API call successful", response);
			},
			error: function (error) {
				// Handle error if needed
				console.error("API call failed", error);
			},
			complete: function () {
				// Redirect regardless of success or failure
				setTimeout(function () {
					window.location.href = "/failure.html"; // Replace with your actual redirect URL
				}, 3000);
			},
		});
	});

	$("#register-form").submit(function (event) {
		// Prevent the default form submission
		event.preventDefault();

		// Make an AJAX call to the API endpoint
		$.ajax({
			type: "POST", // Adjust the method as needed
			url: "/", // Replace with your actual API endpoint
			data: $("#register-form").serialize(), // Serialize form data
			success: function (response) {
				// Handle success if needed
				console.log("API call successful", response);
			},
			error: function (error) {
				// Handle error if needed
				console.error("API call failed", error);
			},
			complete: function () {
				// Redirect regardless of success or failure
				setTimeout(function () {
					window.location.href = "/confirmation.html"; // Replace with your actual redirect URL
				}, 3000);
			},
		});
	});
});
