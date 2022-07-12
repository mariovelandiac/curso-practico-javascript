// Calculamos precios con descuento con las siguientes funciones 

function calculoPrecioDescuento(precio,descuento) {
    if (descuento > 100 || descuento < 0) {
        return "Ingresa un valor válido"
    } else {
        const precioconDescuento = precio*((100-descuento)/100);
        const precioconDescuentoOK = precioconDescuento.toFixed(2);
        return precioconDescuento + " Dolares";
    }
   
}

function calculateprice() {
    const preci = document.getElementById("precio");
    const precio = preci.value;
    const descuent = document.getElementById("descuento");
    const descuento = descuent.value;
    const precio_final = calculoPrecioDescuento(precio,descuento)
    document.getElementById("answerJS").innerHTML = precio_final;
}