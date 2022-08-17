### Desafío: Reformar para usar GraphQL

Utilicé Apollo para usar graphql

Puerto: 8080

### Interfaz gráfica:
http://localhost:8080/graphql

### Obtener todos los productos:
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
En ventana "operation"
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
En ventana "Variables"
```bash
{
  "getByIdId": "cambiarporidexistente"
}
```
### Insertar nuevo producto:

En ventana "operation"
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
En ventana "Variables"
```bash
{
  "name": "Teclado Keychrone",
  "description": "Keychrone M10",
  "code": "KYM10",
  "price": 40000
}
```
### Modificar un producto:

En ventana "operation"
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
En ventana "Variables"
```bash
{
  "updateProductId": "cambiarporidexistente",
  "description": "Monit FHD",
  "name": "Monit LG 24''",
  "code": "MLGFHD244",
  "price": 55000
}
```
### Eliminar un producto

En ventana "operation"
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
En ventana "Variables"
```bash
{
  "deleteProductId": "cambiarporidexistente"
}
```