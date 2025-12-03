# SmartQA Cypress Test

Este proyecto contiene las pruebas automatizadas E2E usando Cypress.

## Configuración para GitHub Actions

Para que las pruebas funcionen correctamente en GitHub Actions, necesitas configurar los siguientes secretos en tu repositorio:

### Secretos requeridos:

1. **CYPRESS_RECORD_KEY**: Tu clave de grabación de Cypress Dashboard
   - Ve a tu proyecto en [Cypress Dashboard](https://dashboard.cypress.io/)
   - Copia la Record Key
   - Agrégala como secreto en GitHub

2. **CYPRESS_PROJECT_ID**: El ID de tu proyecto en Cypress Dashboard
   - Se encuentra en tu archivo `cypress.config.js`
   - También disponible en Cypress Dashboard

### Cómo agregar secretos en GitHub:

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Secrets and variables** > **Actions**
3. Haz clic en **New repository secret**
4. Agrega cada secreto con su respectivo nombre y valor

## Ejecución local

```bash
# Instalar dependencias
npm install

# Abrir Cypress en modo interactivo
npm run cypress:open

# Ejecutar pruebas en modo headless
npm run cypress:run

# Ejecutar con grabación en Dashboard
npx cypress run --record --key YOUR_RECORD_KEY
```

## Estructura del proyecto

```
├── cypress/
│   ├── e2e/              # Archivos de pruebas
│   ├── fixtures/         # Datos de prueba
│   └── support/          # Comandos y configuraciones
├── .github/
│   └── workflows/
│       └── cypress.yml   # Configuración de GitHub Actions
└── cypress.config.js     # Configuración principal de Cypress
```

## Características del workflow

- ✅ Ejecuta en Ubuntu latest
- ✅ Usa Node.js 18.x
- ✅ Instala dependencias con npm ci
- ✅ Ejecuta pruebas en paralelo
- ✅ Graba resultados en Cypress Dashboard
- ✅ Sube screenshots en caso de fallos
- ✅ Sube videos de todas las ejecuciones
- ✅ Se ejecuta en push y pull requests a main/master/develop

## Personalización

Si tu aplicación necesita ser iniciada antes de ejecutar las pruebas, descomenta y modifica las líneas correspondientes en el archivo `cypress.yml`:

```yaml
start: npm start
wait-on: 'http://localhost:3000'
wait-on-timeout: 120
```