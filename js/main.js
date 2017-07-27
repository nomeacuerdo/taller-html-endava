(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    var titles = document.querySelectorAll('article.card'),
        activeItem;

    Array.prototype.map.call(titles, function(title) {
      title.addEventListener('click', function() {
        activeItem = document.querySelector('article.active');

        activeItem.classList.remove('active');

        this.classList.add('active');
      });
    });
  });
})();
