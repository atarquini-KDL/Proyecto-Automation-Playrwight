import { test, expect } from '@playwright/test';
import { getVersion } from '../Utils/counter';
import { AdvisoryPage } from '../pages/AdvisoryPage';

test.describe('Smoke Suite Profesional - Advisory Portal', () => {
    
    test.setTimeout(60000);

    test('ST-01: Validación de carga visual completa', async ({ page }) => {
        // ARRANGE
        const nroEjecucion = await getVersion();
        const advisory = new AdvisoryPage(page);
        
        // ACT
        await advisory.cargar();
        await advisory.prepararImagenesParaCaptura();

        // ASSERT
        await expect(page).toHaveURL(/.*advisory/);
        
        // EVIDENCIA
        const path = `./screenshots/Advisory/ST-01_Evidence_v${nroEjecucion}.png`;
        await page.screenshot({ path, fullPage: true });
        
        console.log(`LOG: Test Finalizado. Evidencia: v${nroEjecucion}`);
    });
});