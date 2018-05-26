(function ($, Drupal) {
  Drupal.behaviors.umnw_throbber = {

    selector: 'body',
    throbberStyle: {
      // 'background-color': 'rgba(255,255,255,0.5)',
      'background': 'rgba(255,255,255,0.5) url("https://www.drupal.org/files/issues/throbber_13.gif") no-repeat center center',
      'width': '100%',
      'height': '100%',
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'z-index': 1000
    },


    /**
     * Set selector class attribute.
     *
     * @param selector
     */
    setSelector: function (selector) {
      Drupal.behaviors.umnw_throbber.selector = selector;
    },

    /**
     * Want a Json object with pattern attribute_name: value to style the container of throbber.
     *
     * @param throbberStyle
     */
    setThrobberStyle: function (throbberStyle) {
      Drupal.behaviors.umnw_throbber.throbberStyle = throbberStyle;
    },

    /**
     * Add throbber to selector.
     */
    add: function () {
      $(Drupal.behaviors.umnw_throbber.selector).append('<div id="umnw-throbber">&nbsp;</div>');

      // Add style to throbber and img.
      $.each(Drupal.behaviors.umnw_throbber.throbberStyle, function (property, value) {
        $('#umnw-throbber').css(property, value);
      });
    },

    /**
     * Remove throbber.
     */
    remove: function () {
      $('#umnw-throbber').remove();
    }
  };
})(jQuery, Drupal);