
const Clase3 = () => {
    // Sugar Syntax
    /* let valor = 10;
    valor = valor + 1;
    valor++; // Es equivalente a lo de arriba, pero esto está realizado con una sugar syntax
    console.log(valor); */

    // Operador Ternario
    // Código sin operador ternario
    /* const condicion = true;
    let resultado = null;

    if (condicion) {
        resultado = "Verdadero";
    } else {
        resultado = "Falso";
    }

    console.log("El resultado es: " + resultado); */
    // Código utilizando Operador Ternario
    /* const condicion = false;
    let resultado = condicion ? "Verdadero" : "Falso";
    console.log("El resultado es: " + resultado); */

    // Operador Spread (desparramar ...)
    // Operador Spread en Objetos
    /* let producto = {id:1, nombre:"Coca Cola", precio:1800};
    let producto2 = producto; // no crea un nuevo objeto, sino crea la referencia al objeto producto
    console.log(producto.nombre + " $" + producto.precio);
    producto.precio = 2000;
    console.log(producto2);
    let producto3 = {...producto};
    producto.precio = 1800;
    console.log(producto); //precio en $1800
    producto3.nombre = "Coca Cola 2.5L";
    producto3.precio = 2500;
    console.log(producto3); //precio en $2500
    let producto4 = {precio:3000, ...producto, categoria:"bebidas"};
    console.log(producto4); */

    // Operador Spread con Arrays
    /* let nombres = ["Facu", "Consuelo", "Jesica", "Alesio"];
    console.log(nombres);
    let nombres2 = nombres; //no crea un nuevo array, sino crea una referencia al array nombres
    nombres[0] = "David";
    console.log(nombres2);
    let nombres3 = ["María", ...nombres, "Diana"];
    console.log(nombres3);
    nombres.push("Mateo");
    console.log(nombres);
    nombres[1] = "CONSUELO";
    nombres3[0] = "Nahuel";
    console.log(nombres);
    console.log(nombres3); */

    let academia = "Coderhouse";
    let curso = { id: 1, nombre: "React JS", valor: 100000 };
    let estilos = { color: "pink", fontSize: "34px", padding: "20px", backgroundColor: "black" };
    let imagen = "https://cdn.shopify.com/s/files/1/0045/4970/5826/files/A4_23edcb60-0062-42b5-9560-f269fed09542_1000x.jpg?v=1711074436";

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 style={{ color: "yellow", backgroundColor: "black", padding: 20, textTransform: "uppercase" }}>{academia}</h1>
                    <p id="parrafo" className="colorVerde" style={estilos}>{"Cursando " + curso.nombre.toUpperCase() + " en " + academia}</p>
                    <p><img src={imagen} alt="Jean VCP" width={240} /></p>
                </div>
            </div>
        </div>
    )
}

export default Clase3;