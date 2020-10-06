let checkPincodeBtn = document.getElementById("check-pincode");
let pincodeInputBox = document.getElementById("pincode");
let addToCartBtn = document.getElementById("addToCartBtn");
let qtyCnt = document.getElementById("qty-count");
let qtyIncBtn = document.getElementById("qty-increment");
let qtyDecBtn = document.getElementById("qty-decrement");
let quantity = parseInt(qtyCnt.innerText);
let price = document.getElementById("price");
let productPrice = 2599;
checkPincodeBtn.onclick = () => {
	let pincode = pincodeInputBox.value;
	console.log(pincode);
	if (pincode !== "560017" && pincode !== "560103") {
		addToCartBtn.disabled = true;
	} else addToCartBtn.disabled = false;
};

qtyIncBtn.onclick = (e) => {
	qtyCnt.innerText = ++quantity;
	price.innerText = quantity * 2599;
};

qtyDecBtn.onclick = (e) => {
	if (quantity > 1) qtyCnt.innerText = --quantity;
	price.innerText = quantity * 2599;
};
