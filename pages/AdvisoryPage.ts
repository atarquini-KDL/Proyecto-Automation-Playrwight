import { Page, Locator } from '@playwright/test';

export class AdvisoryPage {
    readonly page: Page;
    readonly advisorCards: Locator;

    constructor(page: Page) {
        this.page = page;
        // Centralizamos el selector "rebelde" aquí
        this.advisorCards = page.locator('div.advisor-card, .advisor-item, a div');
    }

    async cargar() {
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async prepararImagenesParaCaptura() {
        // Ejecutamos el scroll técnico
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.page.waitForTimeout(2000);
        await this.page.evaluate(() => window.scrollTo(0, 0));

        // Aseguramos que los asesores se carguen
        const target = this.advisorCards.nth(5);
        await target.scrollIntoViewIfNeeded();
        
        // Tiempo de renderizado final
        await this.page.waitForTimeout(7000);
    }
}