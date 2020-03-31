const input = document.querySelector("#valor");
const visivel = document.querySelector("#visivel");
const btns = document.querySelectorAll("#num");
const bts = document.querySelectorAll("#opr");

let opt = [];
let total = 0;

visivel.value = "0";

for(let bt of bts ) {
	bt.addEventListener("click", function(){
	    let opr = bt.getAttribute("value");

	    if(opr == "cls"){
			input.value = "";
			visivel.value = "0";
			total = 0;
			opt = [];
		}

		if(opr == "="){
			visivel.value = total;
		}

		if(opr == "+" && input.value != ""){	

			let val = input.value;

			opt.push(val,"+");

			total += parseInt(val, 10);

			visivel.value = opt.join("");

			input.value = "";
			
		}

		if(opr == "-"  && input.value != ""){
			let val = input.value;
			let t = 0;

			opt.push(val,"-");

			if(total == 0){
				total = parseInt(val, 10);
			}else{
				total -= parseInt(val, 10);
			}

			visivel.value = opt.join("");

			input.value = "";
		}

		if(opr == "*" && input.value != ""){	

			let val = input.value;

			opt.push(val,"*");

			if(total == 0)
				total = 1;

			total *= parseInt(val, 10);

			visivel.value = opt.join("");

			input.value = "";
			
		}

		if(opr == "/"  && input.value != ""){
			let val = input.value;

			opt.push(val,"/");

			if(val == "0"){
				input.value = "";
				return visivel.value = "Divisão por 0";
			}
			
			if(total == 0){
				total = parseInt(val, 10);
			}else{
				total /= parseInt(val, 10);
			}

			visivel.value = opt.join("");

			input.value = "";
		}
		
	});
}

/*
	* Resolver o problema do número negativo no IF(menos "-");
	* Resolver a divisão de 0 por um úmero qualquer;
	* Resolver a operação complexa com todos os opeadores.
*/

for(let btn of btns ) {
	btn.addEventListener("click", function(){
		let valor = input.value;
		let v = btn.getAttribute("value");

		input.value = (valor+v);
	});
}