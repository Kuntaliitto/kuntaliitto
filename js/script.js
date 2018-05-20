(function ($) {

  //headroom.js
  $(document).ready(function(){
    $('.header-wrapper').headroom({
      "offset": 70,
      "tolerance": 0,
      "classes": {
        "initial": "headroom",
        "pinned": "headroom--pinned",
        "unpinned": "headroom--unpinned"
      },
    });
  });

  // Hamburger.
  $('.js-hamburger-button').click(function(){
    $(this).toggleClass('hamburger-button--opened');
    $('.header-afterfix').toggleClass('is-open');
    $('html, body').toggleClass('is-noscroll');
  });

  //search overlay
  $('.js-search, .js-close-search').click(function(){
    $('.overlay').fadeToggle(250);
  });

  /**
   * Open submenu on click and close it's siblings.
   *
   */
  Drupal.behaviors.kuntaliittoSubmenus = {
    attach: function (context, settings) {
      $('.js-open-submenu', context).click(function() {
        var $parent = $(this).closest('.menu--main-menu'),
            $subMenu = $(this).siblings('.menu__sub-menu');

        // Set the action to take: open or close submenu.
        var action = $(this).hasClass('is-active') ? 'close' : 'open';

        // Initial state is to have all submenus closed and icons set to inactive.
        $parent.find('.js-open-submenu').removeClass('is-active');
        $parent.find('.menu__sub-menu').attr('aria-expanded', false);

        // Set the menu trail to this element as expanded.
        $(this).parents('.menu__sub-menu').attr('aria-expanded', true);
        // Set all the parent item icons in the current menu trail as active.
        $(this).parents('.menu-item').each(function() {
          $(this).children('.js-open-submenu').addClass('is-active');
        });

        if (action == 'open') {
          $(this).addClass('is-active');
          $subMenu.addClass('is-open').attr('aria-expanded', true);
        }
        else {
          $(this).removeClass('is-active');
        }
      });

      $( document ).ready(function() {
        // Expand the whole active tree when submenu is open.
        $('.menu-item--active-trail').each(function(){
          $(this).parent().addClass('is-open').attr('aria-expanded', true);
          $(this).parent().siblings('.icon-plus').addClass('is-active');
        });

      });

    }
  };

  /**
   * Open submenu on click and close it's siblings.
   *
   */
  Drupal.behaviors.kuntaliittoBookMenu = {
    attach: function (context, settings) {
      $('.js-open-book-menu', context).click(function() {
        var $subMenu = $(this).siblings('.menu--sub-menu');

        // Set the action to take: open or close submenu.
        var action = $(this).hasClass('is-active') ? 'close' : 'open';

        if (action == 'open') {
          $(this).addClass('is-active');
          $subMenu.slideDown().attr('aria-expanded', true);
        }
        else {
          $(this).removeClass('is-active');
          $subMenu.slideUp().attr('aria-expanded', false);

          // Close child menus when closing parent.
          $subMenu.find('.js-open-book-menu').removeClass('is-active');
          $subMenu.find('.menu--sub-menu').slideUp().attr('aria-expanded', false);
        }
      });
    }
  };

  /**
   * Collapse search results on click.
   *
   */
  Drupal.behaviors.kuntaliittoCollapseSearchResults = {
    attach: function (context, settings) {
      $('.js-collapse-search-results', context).click(function() {
        $(this).toggleClass('is-collapsed');
      });
    }
  };

})(jQuery);
