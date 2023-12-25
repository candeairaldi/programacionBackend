class ProductManager {
    #precioBaseDeGanancia = 0.15
    constructor() {
        this.products = [];
        this.productId = 0;
}

addProduct(title, description, price, thumbnail, code, stock) {
    // Validar campos obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error('Todos los campos son obligatorios');
    }

    // Verificar si el código ya existe en algún producto
    const existingProduct = this.products.find(product => product.code === code);
    if (existingProduct) {
      throw new Error('El código del producto ya existe');
    }

    // Incrementar el ID y agregar el nuevo producto al arreglo
    const id = ++this.productId;
    const newProduct = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };
    this.products.push(newProduct);
    return newProduct;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.error('Producto no encontrado');
    }
    return product;
  }
}

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Agregar productos
try {
  productManager.addProduct('Remera', 'Lino negra', 25100, 'https://www.grisino.com/media/catalog/product/g/4/g4rn49ng_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800', 'CODE001', 20);
  productManager.addProduct('Short', 'Jean celeste', 31500, 'https://i.ebayimg.com/images/g/DREAAOSwaZplWvUi/s-l1600.jpg', 'CODE002', 10);
  productManager.addProduct('Jean', 'Oxford negro', 34200, 'https://http2.mlstatic.com/D_NQ_NP_629449-MLA69391168560_052023-O.webp', 'CODE003', 5);
  // Intentar agregar un producto con el mismo código (tira error)
  productManager.addProduct('Remera repetida', 'Lino gris', 50000, 'https://www.grisino.com/media/catalog/product/g/4/g4rn49ng_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800', 'CODE001', 15);
  console.log('Producto agregado nuevamente');
} catch (error) {
  console.error(error.message);
}

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log('Todos los productos:', allProducts);

// Obtener un producto por su ID
const productById = productManager.getProductById(2);
console.log('Producto con ID 2:', productById);

// Intentar obtener un producto inexistente
const nonExistingProduct = productManager.getProductById(10);