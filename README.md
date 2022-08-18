### Desafío: Reformar para usar GraphQL

GraphQL con Apollo

Puerto: 8080
### Interfaz gráfica:
http://localhost:8080/graphql
### Insertar nuevo producto:
En la ventana "operation" de Apollo
```bash
mutation Mutation($name: String, $description: String, $code: String, $price: Float) {
  createProduct(name: $name, description: $description, code: $code, price: $price) {
    id
    name
    description
    code
    price
  }
}
```
En la ventana "Variables" de Apollo
```bash
{
  "name": "Teclado Keychrone",
  "description": "Keychrone M10",
  "code": "KYM10",
  "price": 40000
}
```
### Obtener todos los productos:
En la ventana "operation" de Apollo
```bash
query Query {
  getAll {
    id
    name
    description
    code
    price
  }
}
```
### Obtener por id:
En la ventana "operation" de Apollo
```bash
query GetById($getByIdId: ID) {
  getById(id: $getByIdId) {
    id
    name
    description
    code
    price
  }
}
```
En la ventana "Variables" de Apollo
```bash
{
  "getByIdId": "cambiarPorIdExistenteEnMongoDB"
}
```
### Modificar un producto:
En la ventana "operation" de Apollo
```bash
mutation UpdateProduct($updateProductId: ID, $description: String, $name: String, $code: String, $price: Float) {
  updateProduct(id: $updateProductId, description: $description, name: $name, code: $code, price: $price) {
    id
    name
    description
    code
    price
  }
}
```
En la ventana "Variables" de Apollo
```bash
{
  "updateProductId": "cambiarPorIdExistenteEnMongoDB",
  "description": "Monitor FHD",
  "name": "Monitor LG 24''",
  "code": "MLGFHD244",
  "price": 55000
}
```
### Eliminar un producto
En la ventana "operation" de Apollo
```bash
mutation DeleteProduct($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    id
    name
    description
    code
    price
  }
}
```
En la ventana "Variables" de Apollo
```bash
{
  "deleteProductId": "cambiarPorIdExistenteEnMongoDB"
}
```