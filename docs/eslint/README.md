# ESLint
## Migrar proyectos de TSLint a ESLint

Instalar las dependencias de ESLint y el puente de TypeScript y ESLint:
```console
    npm install --save-dev eslint @typescript-eslint/{eslint-plugin parser eslint-plugin-tslint}
    npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/eslint-plugin-tslint
```
Convertir las reglas de TSLint (del archivo tslint.json) a ESLint (.eslintrc.js)
```console
    npx tslint-to-eslint-config
```

