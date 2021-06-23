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