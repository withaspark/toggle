(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = function (root, jQuery) {
            if (jQuery === undefined) {
                jQuery = (typeof window !== 'undefined')
                        ? require('jquery')
                        : require('jquery')(root);
            }
            factory(jQuery);
            return jQuery;
        };
    }
    else {
        factory(jQuery);
    }
}(function ($) {

  'use strict';



  var defaults = {};



  function Toggle(options) {
    this.config = $.extend({}, defaults, options);

    this.init();
  }



  Toggle.prototype.init = function () {
      // On change of the select value, change state of toggle handle
      $('body').on('change', '.toggle', function() {
          var $select = $(this),
              name = $select.attr('name'),
              $container = $(".toggle-container[data-attr-name='" + name + "']"),
              $toggle = $container.find('.toggle-handle'),
              state = (!! Number($select.val())) || $select.val() == "true";

          if (state) {
              $container.addClass('toggle-on');
              $toggle.addClass('toggle-on');
          } else {
              $container.removeClass('toggle-on');
              $toggle.removeClass('toggle-on');
          }
      });

      // Trigger change now
      $('.toggle').trigger('change');

      // Swap value on click of our toggle container
      $('body').on('click', '.toggle-container', function() {
          var $container = $(this),
              $select = $("select[name='" + $container.attr('data-attr-name') + "']");

          if ($container.hasClass('disabled')) {
              return;
          }

          $select.val(1 - parseInt($select.val())).trigger('change');
      });
  };



  $.fn.toggleable = function (method, arg) {
      if (typeof method === 'undefined') {
          method = 'load';
      }

      switch (method) {
          case 'load':
              $('select.toggle').each(function (i, v) {
                  var $select = $(v),
                      value = $select.val(),
                      name = $select.attr('name'),
                      $toggle = $('<span class="toggle-container" data-attr-name="' + name + '"><div class="toggle-handle"></div></span>');

                  $select.after($toggle);
                  $select.hide();

                  if ($select.is(':disabled')) {
                      $toggle.addClass('disabled');
                  }
              });
              break;
          default:
              console.log('something default');
              break;
      }

      new Toggle({});
  };

})(jQuery);