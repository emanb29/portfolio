"use strict";angular.module("portfolioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).run(["$rootScope",function(a){a.$on("$locationChangeSuccess",function(a,b){$(".nav.navbar-nav li").removeClass("active"),$(".nav.navbar-nav li a").each(function(a,c){if(c.href===b){var d=$(this);d.parent().addClass("active"),document.title="Ethan Bell - "+d.text()}})})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/demos",{templateUrl:"../views/demos.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("portfolioApp").controller("MainCtrl",["$scope",function(a){a.skills=[{name:"JavaScript",percent:85,color:"light-blue"},{name:"jQuery",percent:75,color:"cyan"},{name:"node.js",percent:60,color:"teal"},{name:"AngularJS",percent:70,color:"green"},{name:"ExpressJS",percent:65,color:"light-green"},{name:"ECMAScript 6",percent:80,color:"lime"},{name:"Chrome",percent:85,color:"yellow"},{name:"MongoDB",percent:70,color:"amber"},{name:"SQL/MySQL",percent:76,color:"orange"},{name:"PHP",percent:75,color:"deep-orange"},{name:"Laravel",percent:70,color:"red"},{name:"MVC/MVVM",percent:60,color:"pink"},{name:"OOP",percent:85,color:"purple"},{name:"Git",percent:75,color:"deep-purple"},{name:"Cordova/XDK",percent:80,color:"indigo"}]}]),angular.module("portfolioApp").controller("AboutCtrl",["$scope",function(a){a.clients={intel:{url:"//intel.com/",img:"images/intel.png"},languageTwin:{url:"//languagetwin.com/",img:"images/languagetwin.png"},loneFir:{img:"images/flfc.png",url:"//friendsoflonefircemetery.org/"},intoItPR:{url:"//intoitpr.com",img:"images/intoitpr.png"},gelatoGal:{img:"images/gelatogal.jpg"}}}]),angular.module("portfolioApp").controller("ContactCtrl",["$scope",function(a){a.socialLinks={github:{icon:"fa-github",url:"//github.com/emanb29"},facebook:{icon:"fa-facebook-square",url:"//www.facebook.com/emanb29"},twitter:{icon:"fa-twitter",url:"//twitter.com/emanb29"}}}]),angular.module("portfolioApp").directive("galleryStandardize",["$interval",function(a){return{restrict:"A",link:function(b,c){var d=0;a(function(){var a=0,b=c.find(".thumbnail");return b.each(function(b,c){var d=$(c).height();d>a&&(a=d)}),a===d?!1:void b.each(function(b,c){var d=$(c).height();if(a+8>d){var e=(a-d)/2+4;$(c).css({"padding-top":e,"padding-bottom":e})}})},40)}}}]);