class Currency {
	constructor(firstCurrency, secondCurrency){
		this.firstCurrency = firstCurrency;
		this.secondCurrency = secondCurrency;
		this.url = 'https://api.exchangerate.host/latest?base='; // para biriminin değişeceği için yazılmadı
		this.amount = null; // her event oluştuğunda değişeceğinden null atandı

	}

	exchange(){
		return new Promise ((resolve,reject) => {
			fetch(this.url + this.firstCurrency)  // verimizi response ebject şeklinde verecek. resp.object --> json alınır
			.then(response => response.json())  // response.json() promis döner
			.then(data => {
				const parite  = data.rates[this.secondCurrency];
				const amountNumber = Number(this.amount);
				let resoult = parite * amountNumber;
				console.log(resoult); 
				resolve(resoult)
			})
			.catch(err => reject(err))  // hata verdiği durumda hata yakalanır
		});
	}
	changeAmount(amount){
		this.amount = amount;
	}
	changeFirstCurrency(newFirstCurrency){
		this.firstCurrency = newFirstCurrency;
	}
	changeSecondCurrency(newSecondCurrency){
		this.secondCurrency = newSecondCurrency;
	}
}




