function empty(){$(".empty").height($("#H").innerHeight())}!function(n,o,e,t,a,i,c){n.GoogleAnalyticsObject=a,n[a]=n[a]||function(){(n[a].q=n[a].q||[]).push(arguments)},n[a].l=1*new Date,i=o.createElement(e),c=o.getElementsByTagName(e)[0],i.async=1,i.src=t,c.parentNode.insertBefore(i,c)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-76075660-1","auto"),ga("send","pageview"),$(document).ready(function(){$(".empty").height($("#H").innerHeight()),window.onresize=empty,$(window).scroll(function(){$(document).scrollTop()>=$("#H").innerHeight()-100?$(".navbar-fixed-top").css("background-color","#393939"):$(".navbar-fixed-top").css("background-color","transparent")})}),$(document).ready(function(){$("li img").on("click",function(){var n=$(this).attr("src"),o='<img src="'+n+'" class="img-responsive"/>';$("#myModal").modal(),$("#myModal").on("shown.bs.modal",function(){$("#myModal .modal-body").html(o)}),$("#myModal").on("hidden.bs.modal",function(){$("#myModal .modal-body").html("")})})});