$(document).ready(function () {
  $('#verificarBtn').click(function () {
    const palavra = $('#palavra').val().trim().toLowerCase();

    if (palavra === 'charme') {
      window.location.href = 'sucesso.html';
    } else {
      window.location.href = 'erro.html';
    }
  });
});
