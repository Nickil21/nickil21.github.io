let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = localStorage.getItem('theme');

if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
} else {
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');
   	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
   	localStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
    localStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addEventListener("change", prefersColorTest);


function modeSwitcher() {
	let theme = localStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
	} else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
}
