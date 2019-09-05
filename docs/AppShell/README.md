# Infraestructura visual (Shell) de una App movil
La infraestructuar visual o Shell de una aplicación móvil son los recursos que componen la estructura o esqueleto visual de la aplicación sin incluir los contenidos de cada página o sección.

La distinción de Shell y contenido permite realizar una carga más rápida de la Shell para mejorar la sensación de usuario. Ventajas/Recomendaciones: 
- **El Shell es un candidato indiscutible para ser cacheado por una PWA** desde el principio, mientras que los contenidos se pueden cachear conforme se van visitando.
- **Experiencia de aplicación nativa** porque responde inmediatamente.
- **Soporte sin conexión** la aplicación puede cargar aunque no tenga conexión.
- **Uso efectivo de transferencia de datos** si en el cacheo inicial se cachea solamente la parte indispensable de la aplicación, se hará un uso acotado de datos. Posteriormente se debe valorar el cacheo de otros recursos pero solamente según se vayan empleando (visualizando).

## Requisitos de una PWA efectiva

- Carga rápida.
- Mínimo uso de datos.
- Cachear recursos estáticos.
- Separar contenido de estructura.
- Recuperar bajo demanda el contenido específico de la página o sección de la aplicación.
- Opcionalmente, almacenar en caché contenido dinámico.


## Ejemplo de estructura HTML de un Shell

´´´html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>App Shell</title>
    <link rel="manifest" href="/manifest.json">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/inline.css">
</head>

<body>
    <header class="header">
        <h1 class="header__title">App Shell</h1>
    </header>
    <nav class="nav">
        <!-- Menú principal -->
    </nav>
    <main class="main">
        <!-- Contenido principal -->
    </main>
    <div class="dialog-container">
        <!-- Contenedor de ventana emergente -->
    </div>
    <div class="loader">
        <!-- spinner or placeholders for content -->
    </div>
    <!-- script con la funcionalidad del esqueleto de a aplicación:
          - navegación
          - logica de la UI
          - envío de peticiones 
    -->
    <script src="app.js" async></script>
    <script>
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then().catch();
      }
    </script>
</body>
</html>
´´´