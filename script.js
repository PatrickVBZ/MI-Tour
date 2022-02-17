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

function loadAnswer(antwortFeld) {
	let re = new RegExp(antwortFeld + "=([^;]+)");
	let value = re.exec(document.cookie);
	return (value != null) ? decodeURI(value[1]) : null;
}

function loadStoredAnswers() {
	if (antwort01 = loadAnswer("antwort01")) document.getElementById("antwort01").value = antwort01;
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