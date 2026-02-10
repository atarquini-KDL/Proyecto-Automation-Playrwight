# Hackett QA Challenge - Advisory Portal

## 🚀 Descripción
Este proyecto contiene una suite de pruebas automatizadas (Smoke Tests) para el portal de Advisory. Se ha diseñado siguiendo estándares de industria para garantizar robustez y escalabilidad.

## 🛠️ Tecnologías y Patrones Aplicados
* **Playwright**: Framework principal de automatización.
* **Page Object Model (POM)**: Organización de selectores y acciones en clases independientes para facilitar el mantenimiento.
* **Evidence Versioning**: Sistema de trazabilidad que genera capturas de pantalla únicas por cada ejecución (`v1`, `v2`, etc.).
* **Hybrid Persistence**: Lógica inteligente que utiliza un contador local (`JSON`) o variables de entorno en la nube (`GitHub Actions`).
* **Lazy Loading Handling**: Estrategia de scroll automático para asegurar la carga completa de imágenes pesadas antes de la captura.

## 📁 Estructura del Proyecto
* `tests/`: Scripts de prueba.
* `pages/`: Clases POM (Page Object Model).
* `utils/`: Herramientas de soporte (contadores, lógica compartida).
* `auth/`: Almacenamiento de estado de sesión (Storage State).

## 🏃 Cómo ejecutar
1. Instalar dependencias: `npm install`
2. Ejecutar el Smoke Test: 
   ```bash
   npx playwright test tests/smoke-suite.spec.ts --headed

3. Reporte detallado
   npx playwright test tests/smoke-suite.spec.ts --headed && npx playwright show-report