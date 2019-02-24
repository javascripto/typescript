declare var require: any;
declare var requirejs: any;

require.config({
  baseUrl: "/js",
  paths: {
    test: "test",
    module1: "module1",
    "page/post-list-page": "page/post-list-page"
  }
});

requirejs(['page/post-list-page'], function() {

});
