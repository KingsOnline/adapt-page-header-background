define(["coreJS/adapt"], function(Adapt) {
  Adapt.on("pageView:postRender", function() {
    var currentPageModel = Adapt.contentObjects._byAdaptID[Adapt.location._currentId][0];
    if (currentPageModel.get('_pageHeaderBackground') == undefined || currentPageModel.get('_pageHeaderBackground')._link == "")
      return;
    $('.page-header').css('background', 'url(' + currentPageModel.get('_pageHeaderBackground')._link + ')');
    $('.page-header').css('background-size', 'cover');
  });

});
