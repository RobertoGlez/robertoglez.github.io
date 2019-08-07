function onInit(){
	// changeText();
}


function changeText(){
	const habilidades = [
		"desarrollador web",
		"diseñador web",
		"modelador 3d",
		"diseñador",
		"producción digital",
	]
	change(habilidades,20);
}

function change(hab,seg){
	let dom_span = document.getElementById("textoInicio");
	let num = 0;
	let max = hab.length - 1;
	const time = seg * 100;
	let int = setInterval(()=>{
		console.log(hab[num]);
		
		dom_span.innerText = hab[num];
		
		if(num == max){
		 	// clearInterval(int);
		 	num = 0;
		}else{
			num++;
		}
	},time);
}