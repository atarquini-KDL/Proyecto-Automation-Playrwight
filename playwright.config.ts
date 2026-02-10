import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true, // Esto activa la "multilínea" real
  
  // Usamos el archivo de autenticación que ya tenemos
  use: {
    storageState: 'auth/user.json',
    baseURL: 'https://tu-url-de-advisory.com', // Poné la URL base acá
  },

  projects: [
    {
      name: 'Desktop-Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile-Safari',
      use: { ...devices['iPhone 13'] }, // Playwright emula el tamaño y el user-agent
    },
  ],
});