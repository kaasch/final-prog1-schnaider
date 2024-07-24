//carrito productos

//para que se abra y se cierre el container de los productos cuando r¿todo la bolsa de tienda 

const btnCart =document.querySelector('.count-products')
const containerCartProducts =document.querySelector('.container-cart-products')

btnCart.addEventListener('click', ()=>{
  containerCartProducts.classList.toggle('hidden-cart') //"switch" add/remove la clase
})

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

//lista de contenedores de todas las cookies (productos) en la tienda
const productList = document.querySelector('.contenedor-items')

//array con todas las cookies (prodcutos)
let allProducts=[]


const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')

const cartEmpty = document.querySelector('.cart-empty')
const cartTotal = document.querySelector('.cart-total')

productList.addEventListener('click', e =>{

    if(e.target.classList.contains('btn-item')){ //si yo hago click en btn item me sale un boolean (si toco en cualquier parte no pasa nada pero si toco en el boton SI)
        const product = e.target.parentElement //me voy al elemento padre, al div que tiene el producto con toda la info

        const infoProduct={ //aca desgoloso todos los elementos
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('.precio-item').textContent,

        };

        const alreadyExists = allProducts.some (product => product.title === infoProduct.title) //boolean result de que un producto ya fue clickeado
        

        if(alreadyExists){
            const products =allProducts.map(product =>{
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                } else{
                    return product
                }
            })
            allProducts = [...products] //añade los datos de quantity si sabe que ya esta repetido
        } else{

             allProducts = [...allProducts, infoProduct] //añade estos datos al allproducts
        }
       
    }

    showHtml()

});

//eliminar producto

rowProduct.addEventListener('click', e =>{
    if(e.target.classList.contains('icon-cerrar')){
        const product = e.target.parentElement // voy al elemento padre
        const title = product.querySelector('.titulo-producto').textContent //muestra el titulo del producto cuando hago click en cerrar

        allProducts =allProducts.filter ( product => product.title !== title) 
    };
    console.log(allProducts)
    showHtml()
})

//funcion para mostrar en html

const showHtml = () =>{

    if(!allProducts.length){
        
        cartEmpty.innerHTML = 'El carrito está vacío'
        cartEmpty.classList.remove('hidden-all');
		rowProduct.classList.add('hidden-all');
		cartTotal.classList.add('hidden-all');
	} else {
        // cartEmpty.innerHTML
		cartEmpty.classList.add('hidden-all');
		rowProduct.classList.remove('hidden-all');
		cartTotal.classList.remove('hidden-all');console.log('aca')
	}

    //limpiar html
    rowProduct.innerHTML='';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product =>{  //recorre todo el array con todos los productos y cada uno de ellos es product
        const containerProduct = document.createElement('div') //crea un div
        containerProduct.classList.add('row-product') // y le añade la clase que necesita para ser mostrado

        //cambio el html con los objetos que yo cree anteriormente
        containerProduct.innerHTML= `
        <div class="info-cart-product">
            <p class="cantidad-producto">${product.quantity}</p>  
            <p class="titulo-producto">${product.title}</p>
            <p class="precio-producto">${product.price}</p>
            <p class="icon-cerrar">X</p>
        </div>`

        rowProduct.append(containerProduct) //se agrega el div con la info de containerproduct que creamos en el html con append

        total = total + parseInt(product.quantity * product.price.slice(1)) //parseint para q m convierta de string a nro. el slice es para cortar el signo de pesos
        totalOfProducts = totalOfProducts + product.quantity;
        
        console.log(rowProduct.innerHTML)
    });


     valorTotal.innerText=`$${total},00`;
     countProducts.innerText= totalOfProducts;
}


