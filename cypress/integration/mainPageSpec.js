/// <reference types="cypress" />

 import { onMainWidgetPage } from '../support/page_objects/mainWidgetPO'

    // "mainWidjet" modal window -> "Payment methods" field functionality 
    
    describe('Main Widget', () => {
        
        // BTC

        describe('Verify "Payment method" section, CryptoCurrency - BTC, Offer type - Sell', () => {
        
            beforeEach('', () => {
            
                cy.openMainPage()
                const offerType = onMainWidgetPage.elements.widgetSellOfferTypeBtn
                const cryptoCurrency = onMainWidgetPage.elements.widgetCryptoCurrencyBTCBtn

                onMainWidgetPage.openPaymentMethodsModalWindow(offerType, cryptoCurrency)

            });
                
            it ('C62555 payment method according to the typed symbols "bank" in the "Search" field  is displayed at modal window', () => {
    
                cy.get('.qa-paymentMethodPickerModalSearch')
                .type('bank')

                cy.get('.qa-paymentMethodPickerModalItemName')
                .first()
                .should('contain', 'Bank')
                    
            })
        
            it ('C62543 "Payment method" input has value "All payment methods" when User clicks on "Select All" button at modal window ("All payment methods" section)', () => {
    
                cy.contains('Select All').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'All Payment Methods')
                                                
            })

            it ('C62530 "Payment method" input has value "Bank transfer" when User choosed this one at modal window ("Popular section")', () => { 
                
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.p-3 > .row.mb-4 > :nth-child(1)').click()
                
                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfer')
        
            })

            it ('C62542 "Payment method" input has value an element which User clicked on "Bank Transfers (Choise)" section at modal window', () => {
        
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.p-3 > :nth-child(5) > :nth-child(1)').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfer')
        
            })

            it ('C62531 "Payment method" input has value "Bank transfers" when User clicked on "View offers for bank transfer" button at modal window ("Bank transfer section")', () => {
        
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.flex-column > .text-nowrap').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfers')
                
        
            })
        
        });  
    
        describe('Verify "Payment method" section, CryptoCurrency - BTC, Offer type - Buy', () => {
        
            beforeEach('', () => {
            
                cy.openMainPage()
                const offerType = onMainWidgetPage.elements.widgetBuyOfferTypeBtn
                const cryptoCurrency = onMainWidgetPage.elements.widgetCryptoCurrencyBTCBtn

                onMainWidgetPage.openPaymentMethodsModalWindow(offerType, cryptoCurrency)

            });
                
            it ('C62555 payment method according to the typed symbols "bank" in the "Search" field  is displayed at modal window', () => {
    
                cy.get('.qa-paymentMethodPickerModalSearch')
                .type('bank')

                cy.get('.qa-paymentMethodPickerModalItemName')
                .first()
                .should('contain', 'Bank')
                    
            })
        
            it ('C62543 "Payment method" input has value "All payment methods" when User clicks on "Select All" button at modal window ("All payment methods" section)', () => {
    
                cy.contains('Select All').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'All Payment Methods')
                                                
            })

            it ('C62530 "Payment method" input has value "Bank transfer" when User choosed this one at modal window ("Popular section")', () => { 
                
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.p-3 > .row.mb-4 > :nth-child(1)').click()
                
                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfer')
        
            })

            it ('C62542 "Payment method" input has value an element which User clicked on "Bank Transfers (Choise)" section at modal window', () => {
        
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.p-3 > :nth-child(5) > :nth-child(1)').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfer')
        
            })

            it ('C62531 "Payment method" input has value "Bank transfers" when User clicked on "View offers for bank transfer" button at modal window ("Bank transfer section")', () => {
        
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.flex-column > .text-nowrap').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfers')
                
        
            })
        
        });  

        // Tether

        describe('Verify "Payment method" section, CryptoCurrency - Tether, Offer type - Sell', () => {
        
            beforeEach('', () => {
            
                cy.openMainPage()
                const offerType = onMainWidgetPage.elements.widgetSellOfferTypeBtn
                const cryptoCurrency = onMainWidgetPage.elements.widgetCryptoCurrencyTetherBtn

                onMainWidgetPage.openPaymentMethodsModalWindow(offerType, cryptoCurrency)

            });
                
            it ('C62555 payment method according to the typed symbols "bank" in the "Search" field  is displayed at modal window', () => {
    
                cy.get('.qa-paymentMethodPickerModalSearch')
                .type('bank')

                cy.get('.qa-paymentMethodPickerModalItemName')
                .first()
                .should('contain', 'Bank')
                    
            })
        
            it ('C62543 "Payment method" input has value "All payment methods" when User clicks on "Select All" button at modal window ("All payment methods" section)', () => {
    
                cy.contains('Select All').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'All Payment Methods')
                                                
            })

            it ('C62530 "Payment method" input has value "Bank transfer" when User choosed this one at modal window ("Popular section")', () => { 
                
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.p-3 > .row.mb-4 > :nth-child(1)').click()
                
                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfer')
        
            })

            it ('C62542 "Payment method" input has value an element which User clicked on "Bank Transfers (Choise)" section at modal window', () => {
        
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.p-3 > :nth-child(5) > :nth-child(1)').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfer')
        
            })

            it ('C62531 "Payment method" input has value "Bank transfers" when User clicked on "View offers for bank transfer" button at modal window ("Bank transfer section")', () => {
        
                cy.get('.Tabs__inner > :nth-child(2)').click()
                cy.get('.flex-column > .text-nowrap').click()

                cy.get(':nth-child(4) > .d-flex > .border-transparent')
                .should('have.value', 'Bank Transfers')
                
        
            })
        
        });  
    
        describe('Verify "Payment method" section, CryptoCurrency - Tether, Offer type - Buy', () => {
       
        beforeEach('', () => {
           
            cy.openMainPage()
            const offerType = onMainWidgetPage.elements.widgetBuyOfferTypeBtn
            const cryptoCurrency = onMainWidgetPage.elements.widgetCryptoCurrencyTetherBtn

            onMainWidgetPage.openPaymentMethodsModalWindow(offerType, cryptoCurrency)

        });
              
        it ('C62555 payment method according to the typed symbols "bank" in the "Search" field  is displayed at modal window', () => {
 
            cy.get('.qa-paymentMethodPickerModalSearch')
              .type('bank')

            cy.get('.qa-paymentMethodPickerModalItemName')
              .first()
              .should('contain', 'Bank')
                
        })
    
        it ('C62543 "Payment method" input has value "All payment methods" when User clicks on "Select All" button at modal window ("All payment methods" section)', () => {
 
            cy.contains('Select All').click()

            cy.get(':nth-child(4) > .d-flex > .border-transparent')
              .should('have.value', 'All Payment Methods')
                                            
        })

        it ('C62530 "Payment method" input has value "Bank transfer" when User choosed this one at modal window ("Popular section")', () => { 
            
            cy.get('.Tabs__inner > :nth-child(2)').click()
            cy.get('.p-3 > .row.mb-4 > :nth-child(1)').click()
             
            cy.get(':nth-child(4) > .d-flex > .border-transparent')
              .should('have.value', 'Bank Transfer')
    
        })

        it ('C62542 "Payment method" input has value an element which User clicked on "Bank Transfers (Choise)" section at modal window', () => {
    
            cy.get('.Tabs__inner > :nth-child(2)').click()
            cy.get('.p-3 > :nth-child(5) > :nth-child(1)').click()

            cy.get(':nth-child(4) > .d-flex > .border-transparent')
              .should('have.value', 'Bank Transfer')
    
        })

        it ('C62531 "Payment method" input has value "Bank transfers" when User clicked on "View offers for bank transfer" button at modal window ("Bank transfer section")', () => {
    
            cy.get('.Tabs__inner > :nth-child(2)').click()
            cy.get('.flex-column > .text-nowrap').click()

            cy.get(':nth-child(4) > .d-flex > .border-transparent')
              .should('have.value', 'Bank Transfers')
            
    
        })
    
    });  
    });
   

