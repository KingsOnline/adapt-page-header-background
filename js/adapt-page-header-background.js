define(["coreJS/adapt"], function(Adapt) {
  Adapt.on("pageView:ready", function() {
    var currentPageModel = Adapt.contentObjects._byAdaptID[Adapt.location._currentId][0];
    console.log(currentPageModel);
    if (currentPageModel.get('_pageHeaderBackground') == undefined || currentPageModel.get('_pageHeaderBackground')._link == "")
      return;
    console.log('applying');
    $('.page-header').css('background', 'url(' + currentPageModel.get('_pageHeaderBackground')._link + ')');
    $('.page-header').css('background-size', 'cover');
  });

});
