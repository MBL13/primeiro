function aparece() {
	const x = document.querySelector(".menu ul");
	const y = document.querySelectorAll(".extra");
	const a = document.querySelector(".sim");

	a.classList.toggle("nao");
	x.classList.toggle("mostrar");
	
	for (var i = 0; i <= y.length - 1; i++) {
		y[i].classList.toggle("mostrar");
	}
}
 function login(event) {
    event.preventDefault(); 

    const nome = document.querySelector("#nome").value;
    const senha = document.querySelector("#senha").value;
    const enviar = document.querySelector("#mandar");
    const x = document.querySelector("#teste");

    if (nome === "Jay" && senha === "password") {
      x.style.display = "block";
      x.innerHTML =
        "<h1 class='futuro' title='Obrigado por usar o site " + nome + "' onclick='muda()'>" +
        nome +
        "</h1> <hr/>" +
        "<h2 class='futuro'>Seja bem-vindo</h2>";

        setTimeout(() => {
          window.location.href = "admin/admin.html?admin=Jay";
        }, 2000);
    } else {
      x.style.display = "block";
      x.innerHTML =
        "<h1 class='futuro' title='Obrigado por usar o site' onclick='muda()'>" +
        "Ups!!!" +
        "</h1> <hr/>" +
        "<h2 class='futuro'>Senha ou usuário inexistentes...</h2>";
    }
  }
function muda(){
	$("body").toggleClass("dark");
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

	$(".gen label").click(function(){
        for (let i = $(".gen label").length - 1; i >= 0; i--) {
            $(".gen label i").removeClass("activado")
        }
        $(this).children()[0].classList.add("activado");      
    });


});

