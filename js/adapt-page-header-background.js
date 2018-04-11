define(["coreJS/adapt"], function(Adapt) {
  Adapt.on("pageView:postRender", function() {
    var currentPageModel = Adapt.contentObjects._byAdaptID[Adapt.location._currentId][0].get('_pageHeaderBackground');
    if (!currentPageModel || !currentPageModel.src)
      return;
    $('.page-header').css('background', 'url(' + currentPageModel.src + ')');
    $('.page-header').css('background-size', 'cover');
  });
});
