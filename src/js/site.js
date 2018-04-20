// BgClip Headings
(function($) {
  let s;
  let BgClip = {
    settings: {
      heading: $('.js-bg-clip'),
    },
    init() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents() {
      $(window).on('load resize scroll', $.proxy(this.getBgClip, this));
    },

    getBgClip() {
      s.heading.each(function() {
        const layerOffset = $(this)
          .closest('article, section')
          .offset();
        const containerOffset = layerOffset.top - $(window).scrollTop();
        BgClip =
          containerOffset -
          $(this)
            .css('top')
            .replace(/[^-\d\.]/g, '') -
          $(this)
            .css('margin-top')
            .replace(/[^-\d\.]/g, '');
        $(this).css('clip', `rect(${BgClip}px, auto, auto, auto)`);
      });
    },
  };
  BgClip.init();
})(jQuery);

/* ---------------------------------------------
  Height 100%
--------------------------------------------- */
function js_height_init() {
  (function($) {
    $('.js-height-full').height($(window).height());
    $('.js-height-parent').each(function() {
      $(this).height(
        $(this)
          .parent()
          .first()
          .height()
      );
    });
  })(jQuery);
}

/* ---------------------------------------------
  Scroll navigation
--------------------------------------------- */

function init_scroll_navigate() {
  $('a.scrollLink').click(function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
  });
}

/* ---------------------------------------------
  Scroll Spy
--------------------------------------------- */

function init_scroll_spy() {
  // Cache selectors
  let lastId;
  const topMenu = $('#top-menu');
  const topMenuHeight = topMenu.outerHeight() + 15;
  // All list items
  const menuItems = topMenu.find('a');
  // Anchors corresponding to menu items
  const scrollItems = menuItems.map(function() {
    const item = $($(this).attr('href'));
    if (item.length) {
      return item;
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
    let href = $(this).attr('href'),
      offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: offsetTop,
        },
        300
      );
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    const fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    const id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent()
        .removeClass('active')
        .end()
        .filter(`[href='#${id}']`)
        .parent()
        .addClass('active');
    }
  });
}

// Navbar
function init_nav_show() {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 220) {
      $('.site-header').removeClass('site-header__show');
    } else {
      $('.site-header').addClass('site-header__show');
    }
  });
}
/* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */

$(window).load(() => {
  $(window).trigger('scroll');
  $(window).trigger('resize');
});

$(document).ready(() => {
  init_scroll_navigate();
  init_scroll_spy();
  init_nav_show();
  $(window).trigger('resize');
});

$(window).resize(() => {
  js_height_init();
});
