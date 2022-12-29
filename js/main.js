let buttElm=document.getElementById("butt");
let nameInput=document.getElementById("name");
let batchInput=document.getElementById("batch");
let fieldInput=document.getElementById("field");
let placeInput=document.getElementById("place");
let brand=[];
buttElm.addEventListener("click",function(){
    let name=nameInput.value;
	let sub=Math.random();
	console.log(name+""+sub);
    let batch=batchInput.value;
	let field=fieldInput.value;
	let place=placeInput.value;
	let idea={}
	    idea["name"]=name;
		idea["batch"]=batch;
		idea["field"]=field;
		idea["place"]=place;
		idea["myfile"]=myfile;
		console.log(idea);
		brand.push(idea);
		nameInput.value="";
		batchInput.value="";
		fieldInput.value="";
		placeInput.value="";
	});
	console.log(brand);