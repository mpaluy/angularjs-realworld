describe('directive: video', function() {
  var element, scope;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile, $templateCache) {
    scope = $rootScope.$new();

    var templatesHTML = $templateCache.get('demo-templates');//TODO: change this url (html2JS config)

    $compile(templatesHTML)(scope);

    element =
        '<demo-video video-data="videoData"><demo-video>';

    scope.videoData = {video: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'};

    element = $compile(element)(scope);

    scope.$digest();

  }));


  describe('with the first given value', function() {
      it("should have video source set", function() {
        var isolated = element.isolateScope();
        expect(isolated.videoData.video).toBe("http://clips.vorwaerts-gmbh.de/VfE_html5.mp4");
      });
      it("should have a video element", function(){
        var video = element.find('video');
        expect(video.length).toBeGreaterThan(0);
      });
      it("video element should have correct source", function(){
        var video = element.find('video');
        var isolated = element.isolateScope();
        expect(video.find('source')[0].getAttribute("src")).toBe(isolated.videoData.video);
      });
    });
});

