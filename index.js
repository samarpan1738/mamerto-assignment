let checkPincodeBtn = document.getElementById("check-pincode");
let pincodeInputBox = document.getElementById("pincode");
let addToCartBtn = document.getElementById("addToCartBtn");

checkPincodeBtn.onclick = () => {
	let pincode = pincodeInputBox.value;
	if (pincode) console.log(pincode);
};

/*

    The web page should be mobile responsive.
    Disable Add to Cart button if pin codes are other than 560017, 560103.
    Handle increment and decrement of quantity buttons.
    The pricing should increase on the basis of quantity button.
*/
