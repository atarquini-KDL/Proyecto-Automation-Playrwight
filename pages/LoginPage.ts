import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Estos son los selectores reales que obtuviste con el codegen
        this.usernameInput = page.getByRole('textbox', { name: 'Email' }); 
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log In' });
    }
    async handleMFA() {
        console.log("⚠️ Esperando ingreso manual del código MFA en el navegador...");
        // Espera a que el campo del código aparezca y tú lo llenes
        await this.page.waitForURL(/.*dashboard/, { timeout: 60000 }); 
    }
    async navigate() {
        await this.page.goto('/'); // Usa la baseUrl definida en el config
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}