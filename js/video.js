http://i3.ytimg.com/vi/6fo9fz7NMXI/default.jpg


var embedBox; var previd;
//<iframe  width="580" height="327" src="http://www.youtube-nocookie.com/embed/NYV-dqLsCjI?rel=0" frameborder="0" allowfullscreen></iframe>

function setVideo (vUrl)
{
	var embedCode = '<iframe  width="580" height="327" src="http://www.youtube-nocookie.com/embed/'+vUrl+'?rel=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
	embedBox.html(embedCode);
}

	

$(document).ready(function()
{
	previd = $('#previd');
	embedBox = $('#Vwrap');
	$('.vbut').click(function()
	{
		setVideo($(this).attr('rel'));
	});
	
previd.click(function () {
	setVideo('NYV-dqLsCjI');

});
});
	