$(function() {
	$(".js-switcher").click(function(e) {
		
		var checkbox = $(e.target).parent().find("input")
		console.log("clicked", checkbox)
		checkbox.prop("checked", true)
	})
})