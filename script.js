/* PS3 Themes Hub - JavaScript mínimo e compatível */
/* Funciona mesmo se o JavaScript estiver desativado (navegação HTML normal) */

function init() {
  // Destacar link ativo do menu (se possível)
  try {
    var path = window.location.pathname;
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      if (href && path.indexOf(href) !== -1 && href !== 'index.html' && href !== './' && href !== '/') {
        links[i].className = (links[i].className ? links[i].className + ' ' : '') + 'active';
      }
    }
  } catch (e) {}

  // Pesquisa simples no cliente (filtra cartões visíveis)
  var searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.onsubmit = function(e) {
      if (e && e.preventDefault) e.preventDefault();
      var input = document.getElementById('search-input');
      if (!input) return false;
      var q = input.value.toLowerCase();
      var cards = document.getElementsByClassName('theme-card');
      for (var j = 0; j < cards.length; j++) {
        var text = cards[j].innerText || cards[j].textContent || '';
        text = text.toLowerCase();
        if (q === '' || text.indexOf(q) !== -1) {
          cards[j].style.display = 'inline-block';
        } else {
          cards[j].style.display = 'none';
        }
      }
      return false;
    };
  }
}

// Compatibilidade com attachEvent (navegadores antigos) e addEventListener
if (window.addEventListener) {
  window.addEventListener('load', init, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', init);
} else {
  window.onload = init;
}
