
// create type Product
export interface Product {
    id: number,
    title: string,
    price:number,
    category:string,
    description:string,
    image:string
}

// create type Product Array
// using Pick in Ts
export type Products = Pick<Product, 'id' | 'title' | 'price'>[]