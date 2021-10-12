import {products} from "../../data-config"
import React from "react"

export default function Products(){
    return (
        <section className="products">
            <div className="content-container">
                <div className="top-products">
                    <div className="title text-lg">
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
                    return <ProductItem data={val} key={index}/>
                })
            }
        </div>
    )
}

function ProductItem(props) {
    const {data, key} = props;

    return (
        <div className="product-item" key={`${key}-${data.title}` }>
            <img src={data.image} alt={data.title} />
        </div>
    )
}