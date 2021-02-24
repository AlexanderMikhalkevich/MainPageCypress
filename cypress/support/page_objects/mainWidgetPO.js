
export class MainPage {

    elements = {
        //mainWidget
        homepageWidget: '#mainWidget',
       
       //Offer type
        widgetBuyOfferTypeBtn: 'button[tabid="0"]', 
        widgetSellOfferTypeBtn: 'button[tabid="1"]', 

        //Button to show modal window "Payment methods"
        widgetPaymentMethodsBtn: '.d-flex > .text-nowrap',
        
        //Crypto currency buttons
        widgetCryptoCurrencyTetherBtn: '.MainWidgetBody__widget>div:nth-child(2) button:nth-child(2)',
        widgetCryptoCurrencyBTCBtn: '.MainWidgetBody__widget>div:nth-child(2) button:nth-child(1)',  
    };
    
    openPaymentMethodsModalWindow(offerType, cryptoCurrency){

        cy.get(offerType).click()
        cy.get(cryptoCurrency).click()         
        cy.get(this.elements.widgetPaymentMethodsBtn).click()
    }
    
}

export const onMainWidgetPage = new MainPage()

