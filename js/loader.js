var opts = {
	lines: 9, // The number of lines to draw
	length: 6, // The length of each line
	width: 8, // The line thickness
	radius: 28, // The radius of the inner circle
	corners: 0.8, // Corner roundness (0..1)
	rotate: 0, // The rotation offset
	direction: 1, // 1: clockwise, -1: counterclockwise
	color: '#000', // #rgb or #rrggbb or array of colors
	speed: 1.2, // Rounds per second
	trail: 70, // Afterglow percentage
	shadow: false, // Whether to render a shadow
	hwaccel: false, // Whether to use hardware acceleration
	className: 'spinner', // The CSS class to assign to the spinner
	zIndex: 2e9, // The z-index (defaults to 2000000000)
	top: '55%', // Top position relative to parent
	left: '50%' // Left position relative to parent
};
var target = document.getElementById('loader');
var spinner = new Spinner(opts).spin(target);
