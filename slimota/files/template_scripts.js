/*--------------------------------------------------------------
# Copyright (C) joomla-monster.com
# License: http://www.joomla-monster.com/license.html Joomla-Monster Proprietary Use License
# Website: http://www.joomla-monster.com
# Support: info@joomla-monster.com
---------------------------------------------------------------*/

window.addEvent("domready",function(){
	var $b = $(document.getElementsByTagName('body')[0]);	
	// smoothscroll init
	new SmoothScroll();		
	//
	if($('stylearea')){
		$A($$('.style_switcher')).each(function(element,index){
			element.addEvent('click',function(event){
				var event = new Event(event);
				event.preventDefault();
				changeStyle(index+1);
			});
		});
		new SmoothScroll();
	}
});
// Function to change backgrouns
function changeStyle(style){
	var file = $template_path+'/css/style'+style+'.css';
	new Asset.css(file);
	//new Cookie.set('jm_style_jm0013',style,{duration: 200,path: "/"});
	var expireDate = new Date()
	var days = 100;
//set "expstring" to either future or past date, to set or delete cookie, respectively
	var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
	document.cookie = "jm_style_jm0013="+style+"; expires="+expireDate.toGMTString()+"; path=/";
}
