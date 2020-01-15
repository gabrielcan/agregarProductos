class Producto {
    constructor(nombre, precio, cat) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = cat;
    }

}

class Gestion {

    constructor() {
        this.listarProductos = [];
    }
    newproduct(productNuevo) {

        const productoEnLista = this.listarProductos.find(function (producto) {
            return productNuevo.nombre == producto.nombre;
        })

        if (productoEnLista) {
            productoEnLista.cantidad++;
        } else {
            this.listarProductos.push(productNuevo);
            let lista = '';

            for (const producto of this.listarProductos) {
                lista =  lista + `
                <li class="list-group-item">
                        ${producto.nombre}
                    </li>
                `;
                console.log(producto.nombre);
            }
            console.log(lista)
            let lista2 = document.getElementById('lista');
            lista2.innerHTML = lista
        }

    }

}




const gestor = new Gestion();

function inicio(){
   
const nom_prod=document.getElementById('nom').value
const prod1=new Producto(nom_prod,10, categoria[0])  
gestor.newproduct(prod1)

}