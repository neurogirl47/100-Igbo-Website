document.getElementById("submit").addEventListener("submit", wakandize, false);

function wakandize(){

	document.getElementById("result").innerHTML = "T\'Ch"+document.wform.fname.value;


}