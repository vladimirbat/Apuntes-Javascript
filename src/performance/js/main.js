console.time('carga');
console.time('load');
document.addEventListener('DOMContentLoaded', () => {
    console.timeEnd('carga');
});
window.addEventListener('load', () => {
    console.timeEnd('load');
});
