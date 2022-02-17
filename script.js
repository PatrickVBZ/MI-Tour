const expires = new Date();
expires.setTime(expires.getTime() + (30*24*60*60*1000));

document.addEventListener('DOMContentLoaded', (event) => {
	let coll = document.getElementsByClassName("collapsible");
	let i;
	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function(){toggleCollapsible(this)});
	  if (i > 0) coll[i].disabled = true;
	}
	loadStoredAnswers();
})

function toggleCollapsible(x) {
    x.classList.toggle("active");
    let content = x.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
};

function storeAnswer(antwortFeld) {
	document.cookie = antwortFeld.id + "=" + encodeURI(antwortFeld.value) + "; expires=" + expires.toUTCString() + ";path=/";
}

function deleteAnswer(antwortFeld) {
	document.cookie = antwortFeld + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.getElementById("antwort01").value = "";
}

function deleteAllAnswers() {
	if (window.confirm("Willst du wirklich alle Anworten löschen?")) {		
		deleteAnswer("antwort01");
		deleteAnswer("antwort02a");
		deleteAnswer("antwort02b");
		deleteAnswer("antwort03");
		deleteAnswer("antwort04");
		deleteAnswer("antwort05");
		deleteAnswer("antwort06");
		deleteAnswer("antwort07a");
		deleteAnswer("antwort07b");
		deleteAnswer("antwort08a");
		deleteAnswer("antwort08b");
		deleteAnswer("antwort08c");
		deleteAnswer("antwort08d");
		location.reload();
	}
}

function loadAnswer(antwortFeld) {
	let re = new RegExp(antwortFeld + "=([^;]+)");
	let value = re.exec(document.cookie);
	return (value != null) ? decodeURI(value[1]) : null;
}

function loadStoredAnswers() {
	if (antwort = loadAnswer("antwort01")) {
		toggleCollapsible(document.getElementById("submitButton01"));
		document.getElementById("antwort01").value = antwort;
		correctAnswer("01", "02");
	}
	if (antwort = loadAnswer("antwort02a")) {
		document.getElementById("antwort02a").value = antwort;
	}
	if (antwort = loadAnswer("antwort02b")) {
		document.getElementById("antwort02b").value = antwort;
		correctAnswer("02", "03");
	}
	if (antwort = loadAnswer("antwort03")) {
		document.getElementById("antwort03").value = antwort;
		correctAnswer("03", "04");
	}
	if (antwort = loadAnswer("antwort04")) {
		document.getElementById("antwort04").value = antwort;
		correctAnswer("04", "05");
	}
	if (antwort = loadAnswer("antwort05")) {
		document.getElementById("antwort05").value = antwort;
		correctAnswer("05", "06");
	}
	if (antwort = loadAnswer("antwort06")) {
		document.getElementById("antwort06").value = antwort;
		correctAnswer("06", "07");
	}
	if (antwort = loadAnswer("antwort07a")) {
		document.getElementById("antwort07a").value = antwort;
	}
	if (antwort = loadAnswer("antwort07b")) {
		document.getElementById("antwort07b").value = antwort;
		correctAnswer("07", "08");
	}
	if (antwort = loadAnswer("antwort08a")) {
		document.getElementById("antwort08a").value = antwort;
	}
	if (antwort = loadAnswer("antwort08b")) {
		document.getElementById("antwort08b").value = antwort;
	}
	if (antwort = loadAnswer("antwort08c")) {
		document.getElementById("antwort08c").value = antwort;
	}
	if (antwort = loadAnswer("antwort08d")) {
		document.getElementById("antwort08d").value = antwort;
		correctAnswer("08", "09");
	}
}

function correctAnswer(pres, next) {
	document.getElementById("submitButton" + pres).disabled = true;
	let buttonQuizPres = document.getElementById("buttonQuiz" + pres);
	buttonQuizPres.classList.toggle("done");
	toggleCollapsible(buttonQuizPres);
	let buttonQuizNext = document.getElementById("buttonQuiz" + next);
	buttonQuizNext.disabled = false;
	toggleCollapsible(buttonQuizNext);
}

function correctField(field) {
	field.classList.remove("not-done");
	field.disabled = true;
	storeAnswer(field);
}

function inputCheck_01() {
	let x = document.getElementById("antwort01");
	if (x.value !== "") {
		correctField(x);
		correctAnswer("01", "02");
	} else {
		x.classList.add("not-done");
	}
}

function inputCheck_02() {
	let x = document.getElementById("antwort02a");
	let y = document.getElementById("antwort02b");
	if (x.value !== "" && y.value !== "") {
		correctField(x);
		correctField(y);
		correctAnswer("02", "03");
	} else {
		if (x.value == "") {
			x.classList.add("not-done");
		} else {
			x.classList.remove("not-done");
		}
		if (y.value == "") {
			y.classList.add("not-done");
		} else {
			y.classList.remove("not-done");
		}
	}
}

function inputCheck_03() {
	let x = document.getElementById("antwort03");
	if (x.value !== "") {
		correctField(x);
		correctAnswer("03", "04");
	} else {
		x.classList.add("not-done");
	}
}

function inputCheck_04() {
	let x = document.getElementById("antwort04");
	if (x.value !== "") {
		correctField(x);
		correctAnswer("04", "05");
	} else {
		x.classList.add("not-done");
	}
}

function inputCheck_05() {
	let x = document.getElementById("antwort05");
	if (x.value !== "") {
		correctField(x);
		correctAnswer("05", "06");
	} else {
		x.classList.add("not-done");
	}
}

function inputCheck_06() {
	let x = document.getElementById("antwort06");
	if (x.value !== "") {
		correctField(x);
		correctAnswer("06", "07");
	} else {
		x.classList.add("not-done");
	}
}

function inputCheck_07() {
	let x = document.getElementById("antwort07a");
	let y = document.getElementById("antwort07b");
	if (x.value !== "" && y.value !== "") {
		correctField(x);
		correctField(y);
		correctAnswer("07", "08");
	} else {
		if (x.value == "") {
			x.classList.add("not-done");
		} else {
			x.classList.remove("not-done");
		}
		if (y.value == "") {
			y.classList.add("not-done");
		} else {
			y.classList.remove("not-done");
		}
	}
}

function inputCheck_08() {
	let a = document.getElementById("antwort08a");
	let b = document.getElementById("antwort08b");
	let c = document.getElementById("antwort08c");
	let d = document.getElementById("antwort08d");
	if (a.value !== "" && b.value !== "" && c.value !== "" && d.value !== "") {
		correctField(a);
		correctField(b);
		correctField(c);
		correctField(d);
		correctAnswer("08", "09");
	} else {
		if (a.value == "") {
			a.classList.add("not-done");
		} else {
			a.classList.remove("not-done");
		}
		if (b.value == "") {
			b.classList.add("not-done");
		} else {
			b.classList.remove("not-done");
		}
		if (c.value == "") {
			c.classList.add("not-done");
		} else {
			c.classList.remove("not-done");
		}
		if (d.value == "") {
			d.classList.add("not-done");
		} else {
			d.classList.remove("not-done");
		}
	}
}