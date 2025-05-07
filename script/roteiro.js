function aparece() {
	x = document.querySelector(".menu ul");
	y = document.querySelectorAll(".extra");
	a = document.querySelector(".sim");

	a.classList.toggle("nao");
	x.classList.toggle("mostrar");
	
	for (var i = 0; i <= y.length - 1; i++) {
		y[i].classList.toggle("mostrar");
	}
}
function usuario(){
		let x = document.getElementById("teste");
		let y = document.getElementById("nome");
		x.style.display = "block";
		x.innerHTML = 
			"<h1 class='futuro' title='Obrigado por usar o site "+ y.value +"' onclick='muda()'>"
			+ y.value +
			"</h1> <hr/>" +
		 	"<h2 class='futuro'>Seja bem-vindo</h2>";
		
	}
function muda(){
	document.body.classList.toggle("dark")
}


$(document).ready(function(){
	$("#pesquisa").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		
		$(".meio *").filter(function() {
		    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		  });
	});

	$(".seguir").on("click", function(){
		$(this).toggleClass("seguindo");

		if( $(this).text() == "Seguir" ){
			$(this).text("Seguindo");
		} 
		else {
			$(this).text("Seguir");
		} 

	});
});

