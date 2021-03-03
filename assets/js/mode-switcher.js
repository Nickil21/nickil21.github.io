let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
} else {
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');
   	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
	} else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		//let theme = sessionStorage.getItem('theme');
		//console.log("this was triggered");
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-sun\"></i>';
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = '<i class=\"fas fa-moon\" style="color: grey"></i>';
}