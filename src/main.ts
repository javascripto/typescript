declare var require: any;
declare var requirejs: any;
declare var MODULE_INITIALIZER: string;

require.config({
  baseUrl: "/js",
  paths: {
    test: "test",
    module1: "module1",
    "page/post-new-page": "page/post-new-page",
    "page/post-list-page": "page/post-list-page"
  }
});

requirejs([MODULE_INITIALIZER], function() {

});
