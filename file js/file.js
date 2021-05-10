function tabbar(type,element) {
	let nameparth = document.getElementsByClassName('comment');
	for(let i = 0;i < nameparth.length;i++){
		nameparth[i].style.background = 'red';
	}
	element.style.background ='orange';
	//tab-bar
	document.getElementById(type).style.display ='block';
	switch(type){
		case 'trand':
			document.getElementById('best-sell').style.display ='none';
			document.getElementById('new').style.display ='none';
			break;
		case 'best-sell':
			document.getElementById('trand').style.display ='none';
			document.getElementById('new').style.display ='none';
			break;
		case 'new':
			document.getElementById('best-sell').style.display ='none';
			document.getElementById('trand').style.display ='none';
			break;
	}	
}