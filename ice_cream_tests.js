describe('Registration Numbers function', function () {
    it('should return error message if user did not select container', () => {
        const error1 = IceCreamFactory();

        var result = error1.addItems({})
        assert.equal(result.msg, 'Please select container of your choice!')
    })

    it('should return error message if there is no flavour selected', () => {
        const error2 = IceCreamFactory();
        var result = error2.addItems({container: 'Paper Cup'})

        assert.equal(result.msg, 'Choose flavour of your choice!')
    });

    it('should return error message if there is no flavour selected', () => {
        const error2 = IceCreamFactory();


        var result = error2.totalPrices({price: 4.00})
        assert.equal(4.00, result.getTotalCost())
    });
});