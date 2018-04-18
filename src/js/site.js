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
