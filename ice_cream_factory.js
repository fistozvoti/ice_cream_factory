function IceCreamFactory() {
    var totalCost = 0;
    var iceCreamArrray = [
        {container: "Plain Cone", price: 3.00},
        {container: "Sugar Cone", price: 4.00},
        {container: "Paper Cup", price: 5.00},

        {topping: "Crumbed Peanuts", price: 2.50},
        {topping: "Caramal Dip", price: 2.00},
        {topping: "Chocolate Dip", price: 3.00},
        {topping: "Smarties", price: 1.50},
        {topping: "Oreos", price: 3.50},
        {topping: "Astros", price: 2.50},

        {flavour: "Strawberry", price: 3.00},
        {flavour: "Vanilla", price: 3.50},
        {flavour: "Chocolate", price: 4.00}];
    
    let checkingErrors = {
        error : false,
        msg : ''
    }


    function checkErrors(error, message) {
        checkingErrors.error = error;
        checkingErrors.msg = message;
        return checkingErrors;
    }

    function addItems(item) {

        if (item.container === undefined) {
            return checkErrors(true, 'Please select container of your choice!');
        }
        if(item.flavour === undefined){
            return checkErrors(true, 'Choose flavour of your choice!')
        }
    }

    function totalPrices() {

        for (let i = 0; i < iceCreamArrray.length; i++) {
            const total = iceCreamArrray[i];
            totalCost += total[i].price
            return totalCost;
        }
        
            
    }

    function getTotalCost() {
        return totalCost;
    }

    return {
        addItems,
        totalPrices,
        getTotalCost
    }
}