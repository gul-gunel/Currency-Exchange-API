// Element seçme
const amount = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstCurrency,secondCurrency);

eventListeners();
function eventListeners(){

	amount.addEventListener("input", exchangeCurrency); // input değiştiğinde fonksiyon çalışsın

	firstCurrency.onchange = function(){
		currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
		ui.changeFirst();
	};  // burada addEventLi... kullandığımızda bazı browserlarda hata veriyor onchange kullanılmalı

	secondCurrency.onchange = function(){
		currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
		ui.changeSecond();
	};

};

function exchangeCurrency(){
	// console.log("#amount id'li inputa giriş olduğunda console yaz");

	currency.changeAmount(amount.value);
	currency.exchange() // exchange fetch fonksiyonu kullanarak json objesini alır. json obesine ulaşırız
		.then(result => {
			ui.displayResult(result);
		})
		.catch(err => console.err(err));
}

