// Filter
// 
// I got tired of rewriting the code for filtering a list when I needed it, so here's a plugin.
// 
// Call plugin on the input element and pass jQuery objects to the settings.
// 
// $('#search').filter({
//   'container' : $('ul'), 
//   'item'      : $('li'),
//   'text'      : $('a')
// });
// Container = your element that contains the things you want to filter
// Item = the elements you want to show/hide
// Text = the element inside your Item that you want to search

(function($) {
  $.fn.filter = function(options) {
    var settings = $.extend( {
      'container'        : null,
      'item' : null,
      'text' : null
    }, options);

    jQuery.expr[":"].Contains = function(a, i, m) {
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    this.each(function() {
      var $this = $(this);
      $this.change(function() {
        var filter = $this.val();
        var container = settings['container'];
        var item = settings['item'];
        var text = settings['text'];
        if (filter) {
          container.find("." + text.attr('class') + ":not(:Contains(" + filter + "))").parent(item).slideUp();
          container.find("." + text.attr('class') + ":Contains(" + filter + ")").parent(item).slideDown();
        } else {
          container.find(item).slideDown();
        }
        return false;
      }).keyup(function() {
        $this.change();
      });
    });
  };
})(jQuery);
