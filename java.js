
var divi=document.getElementById('div1');
	var divd=document.getElementById('div2');
	var bcuad=document.getElementById('hd1');
	var bquees=document.getElementById('hd2');
	var bsoluc=document.getElementById('hd3');
	var dcuad=document.getElementById('hdd1');
	var dcuad=document.getElementById('hdd1');
	var dquees=document.getElementById('hdd2');
	var dsoluc=document.getElementById('hdd3');
	var dmostrar=document.getElementById('r1');
	var a=document.getElementById('va');
	var b=document.getElementById('vb');
	var c=document.getElementById('vc');


var quees=function () {

	
	dcuad.className="oculto";
	dquees.className="hd2";
	dsoluc.className="oculto";
	
}


var soluc=function () {

	dcuad.className="oculto";
	dquees.className="oculto";
	dsoluc.className="hd3";
	
}

var resolver=function () {

	var sa=a.value;
	var sb=b.value;
	var sc=c.value;

	var suma=parseFloat(sa)+parseFloat(sb)-parseFloat(sc);


	dmostrar.innerHTML=("<br>"+suma);
}
