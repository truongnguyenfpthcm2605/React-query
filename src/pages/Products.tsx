import { Fragment, useEffect, useState } from "react";
import { getProductsLimit } from "../apis/product.api";
import { Products } from "../types/product.type";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const ProductPage = (): JSX.Element => {

    //TIP 1 
    // const [products, setProducts] = useState<Products>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     setIsLoading(true)
    //     getProducts()
    //         .then(res => {
    //             setProducts(res.data);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // }, []);

    // const [searchParams] = useSearchParams();
    // const searchParamsObject = Object.entries([...searchParams]);
    // console.log(searchParamsObject);

    // TIP 2
    // use React Query
    const { data, isLoading } = useQuery({
        // params url
        // this key meaning caching of React Query
        // caching changed follow state
        // param page is dependencies
        queryKey: ['products', page],
        // call function
        // return a Promise
        queryFn : () =>  getProductsLimit(page)
    });


    return (
       
        <div>
            {!isLoading ? (
                <Fragment>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.data.map((p, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.price}</td> 
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Fragment>
            ) : (
                <Fragment>
                    <h2>Loading....</h2>
                </Fragment>
            )}
        </div>

    )
}

export default ProductPage;