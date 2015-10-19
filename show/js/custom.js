Reveal.addEventListener('ready', function() {
  $('.codeblock').each(function(i, block) {
    var $block = $(block);
    $block
      .load($block.attr('data-source'), function() {
        Prism.highlightElement(block);
        console.log("highlighted!");
      });
  });
});
