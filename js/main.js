(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    var titles = document.querySelectorAll('article.card'),
        links = document.querySelectorAll('.archive a'),
        activeItem;

    Array.prototype.map.call(titles, function(title) {
      title.addEventListener('click', function() {
        activeItem = document.querySelector('article.active');

        activeItem.classList.remove('active');

        this.classList.add('active');
      });
    });

    Array.prototype.map.call(links, function(link) {
      link.addEventListener('click', function() {
        var title = this.getAttribute('href');
        title = title.substr(1, title.length);
        selectedItem = document.getElementById(title);
        activeItem = document.querySelector('article.active');

        activeItem.classList.remove('active');
        selectedItem.classList.add('active');
      });
    });
  });
})();
