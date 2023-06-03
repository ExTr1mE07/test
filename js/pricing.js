let pricing = document.querySelectorAll('.pricing-counter-p')
pricing.forEach(pricingItem => {
    pricingItem.innerHTML = 0
    let pricingEnd =  pricingItem.getAttribute('data-pricing')
    let increament = pricingEnd / 20
    function pricingNumber(){
        let pricingValue = +pricingItem.innerHTML
        if(pricingValue < pricingEnd){
            pricingValue += Math.round(increament) 
            pricingItem.innerHTML = pricingValue
            setTimeout(pricingNumber, 100)
        }else{
            pricingItem.innerHTML = pricingEnd
        }
    }
    pricingNumber()
})