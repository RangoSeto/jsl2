var getbtnmodal = document.getElementById("btn-modal");
var getmodalbox = document.getElementById("loginmodal");
var getbtnclose = document.querySelector(".btn-close");

getbtnmodal.addEventListener("click",function(){
	// getmodalbox.style.display = "block";
	openmodal();
});

getbtnclose.addEventListener('click',closemodal); //ဒီမှာfunction invoke လုပ်ရင် () မပါရ ,ပါရင်တန်းအလုပ်လုပ်မှာမလို့

window.onclick = function(e){
	if(e.target === getmodalbox){
		// getmodalbox.style.display = "none";
		closemodal();
	}
}

function openmodal(){
	getmodalbox.style.display="block";
}

function closemodal(){
	getmodalbox.style.display = "none";
}