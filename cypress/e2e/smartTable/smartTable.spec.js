/// <reference types = "cypress" />
import SmartTable from "../../pageObjects/SmartTable.js"

describe ('Check creating new item', ()=>{
    const smartTable = new SmartTable ()
    before (()=> {
        smartTable.navigate ()
    })
    it ('Create item with valid data, check data in the table and edit selected item', ()=>{
        const itemData ={
            id: '3',
            firstName: 'John',
            lastName: 'Doe',
            userName: 'JD',
            email: "test@example.com",
            age: '26'
        }
        const editItemData ={
            id: '5',
            firstName: 'Leeloo',
            lastName: 'Dallas',
            userName: '5Element',
            email: "test34@example.com",
            age: '18'   
        }

 //Creating new item

    smartTable.fillForCreate(itemData)   

    smartTable.firstNameInput.should('be.visible').invoke('val').should('eq', itemData.firstName)
    smartTable.lastNameInput.should('be.visible').invoke('val').should('eq', itemData.lastName)
    smartTable.userNameInput.should('be.visible').invoke('val').should('eq', itemData.userName)
    smartTable.emailInput.should('be.visible').invoke('val').should('eq', itemData.email)
    smartTable.ageInput.should('be.visible').invoke('val').should('eq', String(itemData.age))

    smartTable.submitButton .should('be.visible').click()

// Checking data in the table after creating new item
    smartTable.checkCellValues(itemData);

// Edit selected item
    smartTable.editButton.should('be.visible').click()

    smartTable.idInputEdit.should('be.visible')
    smartTable.firstNameInputEdit.should('be.visible')
    smartTable.lastNameInputEdit.should('be.visible')
    smartTable.userNameInputEdit.should('be.visible')
    smartTable.emailInputEdit.should('be.visible')
    smartTable.ageInputEdit.should('be.visible')

    smartTable.fillForEdit(editItemData)  

    smartTable.firstNameInputEdit.invoke('val').should('eq', editItemData.firstName)
    smartTable.lastNameInputEdit.invoke('val').should('eq', editItemData.lastName)
    smartTable.userNameInputEdit.invoke('val').should('eq', editItemData.userName)
    smartTable.emailInputEdit.invoke('val').should('eq', editItemData.email)
    smartTable.ageInputEdit.invoke('val').should('eq', editItemData.age)

    smartTable.cancelEditButton.should('be.visible')
    smartTable.submitEditButton .should('be.visible').click()

// Check data in the table after editing 
smartTable.checkCellValues(editItemData)
    }) })