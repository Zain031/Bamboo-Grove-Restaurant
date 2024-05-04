## Endpoints

List of Available Endpoints:

- `1. POS /register`
- `2. POS /login`
- `3. POS /google-login`

- `4. GET /products`
- `5. POS /products/:id`
- `6. GET /productByCategoryId/:id`

- `7. GET /categories`

- `8. GET /carts`
- `9. POST /payment-midtrans`
- `10. PATCH /update-payment`
- `11. GET /carts/:productId`
- `12. POST /carts/:productId`
- `13. PATCH /carts/:productId`
- `14. DELETE /carts/:productId`

- `15. GET /orders`


&nbsp;


### 1. POST /register

#### Request:

- body:

```json
{
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (201 - Created)

```json
{ "fullName" : "admin1",
  "email": "admin1@mail.com",
  "password" : "admin1",
  "phoneNumber": "085726261229",
  "address": "south jakarta,jakarta"
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "Please input Email!"
}
OR
{
  "message": "Email must be in email format"
}
OR
{
  "message": "Email is already registered. Please input another email"
}
OR
{
  "message": "Please input Password!"
}


```


### 2. POST /login

#### Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

#### Response (200 - OK)

```json
{
  "access_token": "string"
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

#### Response (401 - Unauthorized)

```json
{
  "message": "Invalid Email/Password"
}
```




### 3. GET /products

#### Description:

- Get all products

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
[
    {
        "id": 1,
        "title": "Beef Burger",
        "price": 100000,
        "imgUrl": "http://localhost:3000/asset/Burger/beefburger.png",
        "categoryId": 1,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 1,
            "name": "Burger",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 2,
        "title": "Beef Burger jumbo",
        "price": 150000,
        "imgUrl": "http://localhost:3000/asset/Burger/beefburger2.png",
        "categoryId": 1,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 1,
            "name": "Burger",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 3,
        "title": "Chicken burger",
        "price": 125000,
        "imgUrl": "http://localhost:3000/asset/Burger/chickenburger.png",
        "categoryId": 1,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 1,
            "name": "Burger",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 4,
        "title": "sandwich",
        "price": 250000,
        "imgUrl": "http://localhost:3000/asset/Burger/sandwich.png",
        "categoryId": 1,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 1,
            "name": "Burger",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 5,
        "title": "fries",
        "price": 50000,
        "imgUrl": "http://localhost:3000/asset/Burger/fries.png",
        "categoryId": 1,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 1,
            "name": "Burger",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    }
  ]
```






### 4. POST /products/:id

#### Request:

- body:

```json
{
   "title": "Nova Storm pink",
    "price": 200000,
    "imgUrl": "http://localhost:3000/asset/Cake/c11.png",
    "categoryId": 2,
    "createdAt": "2024-04-19T01:51:23.473Z",
    "updatedAt": "2024-04-19T01:51:23.473Z",
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (201 - Created)

```json
{
  "title": "Nova Storm pink",
  "price": 200000,
  "imgUrl": "http://localhost:3000/asset/Cake/c11.png",
  "categoryId": 2,
  "createdAt": "2024-04-19T01:51:23.473Z",
   "updatedAt": "2024-04-19T01:51:23.473Z",
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "Please input Title!"
}
OR
{
  "message": "Please input Description!"
}
OR
{
  "message": "Please input Price!"
}

OR
{
  "message": "Category ID can't be null"
}
OR
{
  "message": "Category ID can't be empty"
}
OR
{
  "message": "Author ID can't be null"
}
OR
{
  "message": "Author ID can't be empty"
}
```






### 5. GET /productByCategoryId/id

#### Description:

- Get all products bt category

#### Response (200 - OK)

```json
[
    {
        "id": 7,
        "title": "Aria Drake chake",
        "price": 250000,
        "imgUrl": "http://localhost:3000/asset/Cake/c1.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 8,
        "title": "Jasper Stone chake",
        "price": 250000,
        "imgUrl": "http://localhost:3000/asset/Cake/c2.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 9,
        "title": "Litle orion choho",
        "price": 250000,
        "imgUrl": "http://localhost:3000/asset/Cake/c6.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 10,
        "title": "Luna Nightingale",
        "price": 100000,
        "imgUrl": "http://localhost:3000/asset/Cake/c3.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 11,
        "title": "Jasper Stone chake",
        "price": 250000,
        "imgUrl": "http://localhost:3000/asset/Cake/c4.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 12,
        "title": "Orion choho",
        "price": 400000,
        "imgUrl": "http://localhost:3000/asset/Cake/c5.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 13,
        "title": "Litle orion choho",
        "price": 250000,
        "imgUrl": "http://localhost:3000/asset/Cake/c6.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 14,
        "title": "Willow Phoenix",
        "price": 450000,
        "imgUrl": "http://localhost:3000/asset/Cake/c7.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 15,
        "title": "Stone chake",
        "price": 250000,
        "imgUrl": "http://localhost:3000/asset/Cake/c8.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 16,
        "title": "Nova Storm",
        "price": 180000,
        "imgUrl": "http://localhost:3000/asset/Cake/c10.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    },
    {
        "id": 17,
        "title": "Nova Storm pink",
        "price": 200000,
        "imgUrl": "http://localhost:3000/asset/Cake/c11.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    }
]
```



### 6. GET /products/:id

#### Description:

- Get product by id

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
{
        "id": 16,
        "title": "Nova Storm",
        "price": 180000,
        "imgUrl": "http://localhost:3000/asset/Cake/c10.png",
        "categoryId": 2,
        "createdAt": "2024-04-19T01:51:23.473Z",
        "updatedAt": "2024-04-19T01:51:23.473Z",
        "Category": {
            "id": 2,
            "name": "Cake",
            "createdAt": "2024-04-19T01:51:23.464Z",
            "updatedAt": "2024-04-19T01:51:23.464Z"
        }
    }
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```






### 7. GET /categories

#### Description:

- Get product by id on public

#### Request:

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
  [
    {
        "id": 1,
        "name": "Burger",
        "createdAt": "2024-04-19T01:51:23.464Z",
        "updatedAt": "2024-04-19T01:51:23.464Z"
    },
    {
        "id": 2,
        "name": "Cake",
        "createdAt": "2024-04-19T01:51:23.464Z",
        "updatedAt": "2024-04-19T01:51:23.464Z"
    },
    {
        "id": 3,
        "name": "Coffe",
        "createdAt": "2024-04-19T01:51:23.464Z",
        "updatedAt": "2024-04-19T01:51:23.464Z"
    },
    {
        "id": 4,
        "name": "Food",
        "createdAt": "2024-04-19T01:51:23.464Z",
        "updatedAt": "2024-04-19T01:51:23.464Z"
    }
]
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```






### 8. GET /carts

#### Description:

- Get all categories on public

#### Response (200 - OK)

```json
[
  {
    "userId": 1,
    "productId": 2,
    "amount" : "15000",
    "createdAt": "2024-02-29T04:23:43.099Z",
    "updatedAt": "2024-02-29T04:23:43.099Z"
  },
 {
    "userId": 3,
    "productId": 2,
    "amount" : "25000",
    "createdAt": "2024-02-29T04:23:43.099Z",
    "updatedAt": "2024-02-29T04:23:43.099Z"
  }
]
```

### 9. GET /payment-midtran

#### Description:

- Get all categories

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
[
  {
    "id": 5,
    "name": "Nike",
    "createdAt": "2024-02-29T04:23:43.099Z",
    "updatedAt": "2024-02-29T04:23:43.099Z"
  },
  {
    "id": 1,
    "name": "Adidas",
    "createdAt": "2024-02-27T09:10:12.382Z",
    "updatedAt": "2024-02-29T04:25:19.555Z"
  }
]
```



### 10. PATCH /update-payment`

#### Request:

- body:

```json


```

- headers;

```json
{
  "access_token": "string"
}
```

#### Response (201 - Created)

```json

```

#### Response (400 - Bad Request)

```json

```



### 11. PUT /categories/:id

#### Request:

- body:

```json
{
  "name": "Nike"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
{
  "name": "Nike"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```





### 12. PUT /products/:id

#### Request:

- body:

```json
{
  "name": "String",
  "description": "string",
  "price": "integer",
  "stock": "integer",
  "imgUrl": "string",
  "categoryId": 1,
  "authorId": 3
}
```

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
{
  "name": "String",
  "description": "string",
  "price": "integer",
  "stock": "integer",
  "imgUrl": "string",
  "categoryId": 1,
  "authorId": 3
}
```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```



### 13. PATCH /update-payment

#### Request:

- body:

```json
{
  "imgUrl": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- headers:

```json
{
  "access_token": "string"
}
```

#### Response (200 - OK)

```json
{
    "message": `Image ${product.name} has been updated`
}
```

#### Response (400 - Bad Request)

```json
{
  "message": "File is required"
}
```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```

## 14. DELETE /carts/:productId`

#### Description:

- Delete category by id

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
{
      "message": "Product is deleted from cart"
}
```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```



### 15. GET /orders

#### Description:

- Delete product by id

#### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

#### Response (200 - OK)

```json
[
  {
  "orderId" : "2",
  "userId" : "3",
  "amount" : "150000",
  "status" : "pending"
  }
]


```

#### Response (403 - Forbidden)

```json
{
  "message": "Not authorized"
}
```

#### Response (404 - Not Found)

```json
{
  "message": "Error not found"
}
```



### Global Error

#### Response (401 - Unauthorized)

```json
{
  "message": "Invalid Token"
}
```

#### Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```

