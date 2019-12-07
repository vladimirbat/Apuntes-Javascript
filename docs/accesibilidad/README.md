

## Niveles de prioridad de accesibilidad
La accesibilidad web se divide en un espectro de tres niveles de prioridad:

- **Prioridad 1**: son aquellos puntos que un desarrollador Web tiene que cumplir ya que, de otra manera, ciertos grupos de usuarios no podrían acceder a la información del sitio Web.
- **Prioridad 2**: son aquellos puntos que un desarrollador Web debería cumplir ya que, si no fuese así, sería muy difícil acceder a la información para ciertos grupos de usuarios.
- **Prioridad 3**: son aquellos puntos que un desarrollador Web debería cumplir ya que, de otra forma, algunos usuarios experimentarían ciertas dificultades para acceder a la información.

Fuente: [Paloma Elena Carretero](https://www.linkedin.com/in/paloma-elena-design/)

## Niveles de conformidad
En función a los anteriores de prioridad de accesibilidad se establecen los niveles de conformidad:

- **Nivel de Conformidad “A”**: todos los puntos de verificación de prioridad 1 se satisfacen.
- **Nivel de Conformidad “Doble A”**: todos los puntos de verificación de prioridad 1 y 2 se satisfacen.
- **Nivel de Conformidad “Triple A”**: todos los puntos de verificación de prioridad 1,2 y 3 se satisfacen.

Fuente: Paloma Elena Carretero

## El foco
El foco en los controles de formulario, por defecto se ordena por la posición en el DOM.
Atributo tabindex:
- **mayor que cero**: los elementos con valores de tabindex mayores que cero serán los primeros en la secuencia de tabulación y entre sí se ordenaran por valores de menor a mayor.
- **igual a cero**: seguiran el orden en el que aparecen  en el DOM, pero siempre después de los que tienen valores mayores que cero.
- **menor que cero (-1)**: estos elementos no pueden recibir el foco mediante el teclado.

## ARIA

Permite definir semanticamente elementos que lo necesiten (por ejemplo cuando se cambia con estilos la funcionalidad de un elemento). Si tuvieramos un *li* que mediante estilos trabajara como un *checkbox*, indicaríamos mediante los atributos **role** y **aria-checked** que, respectivamente, hace función de checkbox y su valor incialmente está seleccionado.

```html
    <li tabindex="0" class="checkbox" role="checkbox" checked aria-checked="true">
        recibir ofertas comerciales
    </li>
```

Los elementos que hacen la función estándar no necesitan agregación de etiquetas Aria.

**aria-label** permite indicar la descripción de un elemento:

```html
    <button aria-label="screen reader only label"></button>
```

Con **aria-controls** se puede indicar que un elemento influye en el comportamiento de otro:

```html
    <div role="scrollbar" aria-controls="principal"></div>
    <div id="principal">
        ...
    </div>
```

Con **aria-live** se puede indicar que el contenido puede cambiar (está vivo) para que la herramienta asistencial pueda avisarnos de esos cambios:

```html
    <div aria-live="true">
      <span>PUNTOS: 400</span>
    </div>
```

Cuando se cree un widget personalizado, el atributo **role** debe estar en la misma etiqueta que **tabindex** para que se le puedan aplicar las acciones de teclado.

A continuación se muestra los valores más importantes que puede tomar **role**:

![Listado de aria roles](./img/aria-roles.jpg)

## Referencia ARIA oficial

- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
## ARIA Labels y relaciones

- **aria-label**: indica el significado y usabilidad de algo reescribiendo cualquier otra descripción incluso la etiqueta \<label>.
- **aria-labelledby**: apunta al id (o varios id) de otro elemento (u otros elementos) del DOM que tiene la descripción del elemento. Puede apuntar a elementos ocultos que por defecto serian ignorados por la herramienta. Nota: aria-labelledby prevalece sobre aria-label y label.
- Otros atributos de relación: aria-activedescendant, aria-controls, aria-describedby y aria-owns. Consultarlos en (Etiquetas y relaciones de ARIA)[https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships].
- **aria-hidden**: permite indicar un bloque que debe ser ignorado por la herramienta (aunque puede contener elementos apuntados por *aria-labelledby*).
- **aria-live**: Puede tomar los valores *off*, *polite*, *assertive* para indicar los valores de urgencia con la que se tiene que avisar de los cambios del elemento. Los atributos aria-atomic, aria-relevant y aria-busy están relacionados con aria-live y su significado se puede consultar en [Cómo ocultar y actualizar contenido](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content).

## Estilos accesibles
Consultar [Estilos accesibles](https://developers.google.com/web/fundamentals/accessibility/accessible-styles).

## Auditoria
La auditoría se puede realizar de forma manual o apoyandose en herramientas como lighthouse.

[How To Do an Accessibility Review](https://developers.google.com/web/fundamentals/accessibility/how-to-review)

[Volver al índice de temas](../../README.md)
