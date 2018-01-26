define(["coreJS/adapt"], function(Adapt) {
  Adapt.on("pageView:postRender", function() {
    var currentPageModel = Adapt.contentObjects._byAdaptID[Adapt.location._currentId][0];
    if (currentPageModel.get('_pageHeaderBackground') == undefined || currentPageModel.get('_pageHeaderBackground')._link == "")
      return;
      var e = currentPageModel.get('_pageHeaderBackground')._link;
      e = e.slice(0, 7) + "en/" + e.slice(7);
    $('.page-header').css('background', 'url(' + e + ')');
    $('.page-header').css('background-size', 'cover');
  });

});
