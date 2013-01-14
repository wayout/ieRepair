$(document).ready(function() {
	
	var $sUrl = $('#Surl');
	var bannerBox = $('#slideImg');
	
	var ind = 1;
	var max = 5;
	var interval = 5;
	
	var urlS = ['http://www.mak-p.ru/' , 'http://www.kniga.ru/' , 'http://www.ticketland.ru/' , 'http://www.tvmtv.ru/gallery/event.php?id=247', 'http://www.ultratour.ru/'];
	
	setInterval (function () 
	{
		
		$sUrl.attr('href', urlS[ind]);
		ind++;
		var newsrc = 'img/banners/main/'+ind+'.jpg';
	 	bannerBox.attr('src', newsrc);
		if (ind>max-1)
		ind=1;
	}
	, interval*1000);
	

});
