let nao = document.getElementById("nao");
		nao.addEventListener("mouseover", function() {
			setTimeout(function() {
				var randomX = Math.floor(Math.random() * window.innerWidth);
				var randomY = Math.floor(Math.random() * window.innerHeight);
				nao.style.position = "absolute";
				nao.style.top = randomY + "px";
				nao.style.left = randomX + "px";
			}, Math.floor(Math.random() * 100));
		});
let sim = document.getElementById("sim");
		sim.addEventListener("click", function() {
			var link = document.createElement("a");
			link.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
			link.target = "_blank";
			link.click();
            var imagem = document.getElementById("imagem");
			imagem.src = "./love.jpeg";
			imagem.style.display = "block";
            var textoImagem = document.getElementById("texto-imagem");
			textoImagem.textContent = "Aeee Te amo mil milhões! <3";
			textoImagem.style.display = "block";
		});