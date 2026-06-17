// Seleciona o botão pelo seu ID
document.getElementById('btn-contato').addEventListener('click', function() {
      const numero = "43999329272";     // ← TROQUE pelo seu número (com DDD)
      const mensagem = "Olá! Vim pelo site e gostaria de mais informações.";

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
  });