
class LoginPage 
{
    get loginForm()
    {
        return $('#login_form')
    }
    fromIsVisible()
    {
        this.loginForm().waitForExist()
    }
    get userNameInput()
    {
        return $('#user_login')
    }
    get passwordInput()
    {
        return $('#user_password')
    }
    get submitButton()
    {
        return $('input[type="submit"]')
    }
    fillForm(username, passwrod)
    {
    fillForm(username, passwrod)
            this.userNameInput.setValue(username)
            this.passwordInput.setValue(passwrod)
    }
    ClickOnLoginButton()
    {
        this.submitButton.click();
    }

}
export default new LoginPage()