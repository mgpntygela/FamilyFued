document.addEventListener("DOMContentLoaded", function () {
	// Create splash screen container
	const splash = document.createElement("div");
	splash.id = "splash-screen";
	splash.style.position = "fixed";
	splash.style.top = "0";
	splash.style.left = "0";
	splash.style.width = "100%";
	splash.style.height = "100%";
	splash.style.display = "flex";
	splash.style.justifyContent = "center";
	splash.style.alignItems = "center";
	splash.style.backgroundColor = "#0e3165";
	splash.style.zIndex = "9999";
	splash.style.transition = "opacity 0.5s ease-out";

	// Add logo to splash screen
	const logo = document.createElement("img");
	logo.src = "Logo.png";
	logo.style.width = "70%";
	logo.style.maxWidth = "400px";

	// Append elements
	splash.appendChild(logo);
	document.body.appendChild(splash);

	// Hide splash screen after 3 seconds
	setTimeout(function () {
		splash.style.opacity = "0";
		setTimeout(function () {
			document.body.removeChild(splash);
		}, 500);
	}, 3000);
});
