export default class SmartTable {
    _url = '/pages/tables/smart-table'
    _formSelector = 'thead > tr:nth-child(3)'
    _tableItemSelector = 'tbody>tr:first-child'
    navigate(){
        cy.visit(this._url)
        cy.get('a.ng2-smart-action-add-add').click()
    }
    fillForCreate ({id, firstName, lastName, userName, email, age}){
        this.idInput.type(id)
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.userNameInput.type(userName)
        this.emailInput.type(email)
        this.ageInput.type(age)
    }
    fillForEdit ({id, firstName, lastName, userName, email, age}){
        this.idInputEdit.type(id)
        this.firstNameInputEdit.type(firstName)
        this.lastNameInputEdit.type(lastName)
        this.userNameInputEdit.type(userName)
        this.emailInputEdit.type(email)
        this.ageInputEdit.type(age)
    }
    get idInput (){
      return  cy.get(`${this._formSelector} td:nth-child(2) input-editor`)
    }
    get firstNameInput (){
       return cy.get(`${this._formSelector} td:nth-child(3) input`)
    }
    get lastNameInput (){
        return cy.get(`${this._formSelector} td:nth-child(4) input`)
    }
    get userNameInput (){
        return cy.get(`${this._formSelector} td:nth-child(5) input`)
    }
    get emailInput (){
        return cy.get(`${this._formSelector} td:nth-child(6) input`)
    }
    get ageInput (){
        return cy.get(`${this._formSelector} td:nth-child(7) input`)
    }
    get submitButton (){
        return cy.get(`${this._formSelector} td:nth-child(1) a.ng2-smart-action-add-create`)
    }
    get cancelButton (){
        return cy.get(`${this._formSelector} td:nth-child(1) a.ng2-smart-action-add-cancel`)
    }
    get idCell (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(2) div.ng-star-inserted`)
    }
    get firstNameCell (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(3) div.ng-star-inserted`)
    }
    get lastNameCell (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(4) div.ng-star-inserted`)
    }
    get userNameCell (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(5) div.ng-star-inserted`)
    }
    get emailCell (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(6) div.ng-star-inserted`)
    }
    get ageCell (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(7) div.ng-star-inserted`)
    }
    get editButton (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(1) a.ng2-smart-action-edit-edit`)
    }
    get deleteButton (){
        return cy.get(`${this._tableItemSelector} >td:nth-child(1) a.ng2-smart-action-delete-delete`)
    }
    get idInputEdit (){
        return  cy.get(`${this._tableItemSelector} input[placeholder='ID']`)
    }
    get firstNameInputEdit (){
         return cy.get(`${this._tableItemSelector} input[placeholder='First Name']`)
    }
    get lastNameInputEdit (){
          return cy.get(`${this._tableItemSelector} input[placeholder='Last Name']`)
    }
    get userNameInputEdit (){
          return cy.get(`${this._tableItemSelector} input[placeholder='Username']`)
    }
    get emailInputEdit (){
          return cy.get(`${this._tableItemSelector} input[placeholder='E-mail']`)
    }
    get ageInputEdit (){
          return cy.get(`${this._tableItemSelector} input[placeholder='Age']`)
    }
    get submitEditButton (){
          return cy.get(`${this._tableItemSelector} a.ng2-smart-action-edit-save`)
    }
    get cancelEditButton (){
          return cy.get(`${this._tableItemSelector} a.ng2-smart-action-edit-cancel`)
    }
}