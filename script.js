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
			link.href = "https://open.spotify.com/track/7hn8Q8WAxFdL4aZ159GI7C?si=rdyIFQCNQjSWr_Tyb3p1HQ";
			link.target = "_blank";
			link.click();
            var imagem = document.getElementById("imagem");
			imagem.src = "./love.jpeg";
			imagem.style.display = "block";
            var textoImagem = document.getElementById("texto-imagem");
			textoImagem.textContent = "Eu prometo te amar por muito mais que mil anos <3";
			textoImagem.style.display = "block";
		});
