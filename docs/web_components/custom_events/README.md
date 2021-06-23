# Custom Events

```javascript
const CalculadoraEvent = new CustomEvent('calculadoraEvent', options);
```

```javascript
const cancelled = this.dispatchEvent(CalculadoraEvent)
```

```javascript
element.addEventListener('calculadoraEvent', (event)=>{});
```

## Cancelación de un evento

```javascript
element.addEventListener('calculadoraEvent', (event)=>{
    event.preventDefault();
    console.log('El receptor ha cancelado la acción del evento');
});
```

```javascript
const cancelled = this.dispatchEvent(CalculadoraEvent);
if(!cancelled) {
    this.navigate();
}
```