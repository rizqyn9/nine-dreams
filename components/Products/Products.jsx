import {products} from "../../data-config"
import React from "react"

export default function Products(){
    return (
        <section className="products">
            <div className="content-container">
                <div className="top-products">
                    <div className="text-2xl title ">
                        Top Products
                    </div>
                </div>
                <div className="main-content">
                    <ListContainer/>
                </div>
            </div>
        </section>
    )
}

function ListContainer() {
    return (
        <div className="list-container">
            {
                products.map((val, index) => {
                    return <ProductItem data={val} index={index} key={index}/>
                })
            }
        </div>
    )
}

function ProductItem(props) {
    const {data, index} = props;

    return (
        <li className="product-item" key={index}>
            <figure>
                <img src={data.image} alt={data.title} />
            </figure>
            <div className="data">
                <div className="text-2xl title">
                    {data.title ? data.title : "Null"}
                </div>
                <div className="text-lg price">
                    Rp. {data.price}
                </div>
            </div>

        </li>
    )
}