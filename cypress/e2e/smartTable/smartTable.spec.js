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
 
    smartTable.idInput.should('be.visible')
    smartTable.firstNameInput.should('be.visible')
    smartTable.lastNameInput.should('be.visible')
    smartTable.userNameInput.should('be.visible')
    smartTable.emailInput.should('be.visible')
    smartTable.ageInput.should('be.visible')

    smartTable.fillForCreate(itemData)   

    smartTable.firstNameInput.invoke('val').should('eq', itemData.firstName)
    smartTable.lastNameInput.invoke('val').should('eq', itemData.lastName)
    smartTable.userNameInput.invoke('val').should('eq', itemData.userName)
    smartTable.emailInput.invoke('val').should('eq', itemData.email)
    smartTable.ageInput.invoke('val').should('eq', itemData.age)

    smartTable.cancelButton.should('be.visible')
    smartTable.submitButton .should('be.visible').click()

// Checking data in the table after creating new item
    smartTable.idCell.should('be.visible')
    smartTable.idCell.invoke('text').should('eq', itemData.id)

    smartTable.firstNameCell.should('be.visible')
    smartTable.firstNameCell.invoke('text').should('eq', itemData.firstName)

    smartTable.lastNameCell.should('be.visible')
    smartTable.lastNameCell.invoke('text').should('eq', itemData.lastName)

    smartTable.userNameCell.should('be.visible')
    smartTable.userNameCell.invoke('text').should('eq', itemData.userName)

    smartTable.emailCell.should('be.visible')
    smartTable.emailCell.invoke('text').should('eq', itemData.email)

    smartTable.ageCell.should('be.visible')
    smartTable.ageCell.invoke('text').should('eq', itemData.age)

// Edit selected item
    smartTable.editButton.should('be.visible').click()

    smartTable.idInputEdit.should('be.visible').clear()
    smartTable.firstNameInputEdit.should('be.visible').clear()
    smartTable.lastNameInputEdit.should('be.visible').clear()
    smartTable.userNameInputEdit.should('be.visible').clear()
    smartTable.emailInputEdit.should('be.visible').clear()
    smartTable.ageInputEdit.should('be.visible').clear()

    smartTable.fillForEdit(editItemData)  

    smartTable.firstNameInputEdit.invoke('val').should('eq', editItemData.firstName)
    smartTable.lastNameInputEdit.invoke('val').should('eq', editItemData.lastName)
    smartTable.userNameInputEdit.invoke('val').should('eq', editItemData.userName)
    smartTable.emailInputEdit.invoke('val').should('eq', editItemData.email)
    smartTable.ageInputEdit.invoke('val').should('eq', editItemData.age)

    smartTable.cancelEditButton.should('be.visible')
    smartTable.submitEditButton .should('be.visible').click()

// Check data in the table after editing 
    smartTable.idCell.should('be.visible')
    smartTable.idCell.invoke('text').should('eq', editItemData.id)

    smartTable.firstNameCell.should('be.visible')
    smartTable.firstNameCell.invoke('text').should('eq', editItemData.firstName)

    smartTable.lastNameCell.should('be.visible')
    smartTable.lastNameCell.invoke('text').should('eq', editItemData.lastName)

    smartTable.userNameCell.should('be.visible')
    smartTable.userNameCell.invoke('text').should('eq', editItemData.userName)

    smartTable.emailCell.should('be.visible')
    smartTable.emailCell.invoke('text').should('eq', editItemData.email)

    smartTable.ageCell.should('be.visible')
    smartTable.ageCell.invoke('text').should('eq', editItemData.age)
    })
    })