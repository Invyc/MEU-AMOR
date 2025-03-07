// Criar corações animados
function createHeart() {
    const heart = document.createElement("div");
        heart.classList.add("heart");
            heart.innerHTML = "❤️";
                heart.style.left = Math.random() * 100 + "vw";
                    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
                        document.querySelector(".hearts").appendChild(heart);
                            setTimeout(() => { heart.remove(); }, 5000);
                            }
                            setInterval(createHeart, 300);

                            // Tentar forçar o autoplay da música
                            window.onload = function() {
                                let iframe = document.querySelector("iframe");
                                    iframe.src += "&autoplay=1";
                                    };