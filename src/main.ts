declare var require: any;
declare var requirejs: any;

require.config({
  baseUrl: "/js",
  paths: {
    test: "test",
    module1: "module1"
  }
});

requirejs(['test'], function() {

});
