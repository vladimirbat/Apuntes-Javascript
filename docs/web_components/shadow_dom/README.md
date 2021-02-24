# Shadow DOM
Shadow DOM permite adjuntar a un elemento del DOM un árbol de elementos hijos encapsulados respecto al DOM global.

A un elemento del DOM se le puede insertar un arbol de elementos hijo en modo shadow (sombra). Esto significa que esos elementos hijo solamente podrán ser accedidos (y por lo tanto modificados) bajo cirtas condiciones.

Se crea un arbol Shadow dentro del div 'container'. A este arbol se le pueden agregar elementos mediante su objeto ShadowRoot. Si el modo del arbol es 'closed',entonces el objeto ShadowRoot solamente es accesible como el valor que retorna el attachShadow en su creación. Por el contrario, si el mode del arbol es 'open', entonces también se puede acceder al ShadowRoot mediante la propiedad shadowRoot del 'container'.


