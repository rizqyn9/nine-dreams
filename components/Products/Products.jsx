import {products} from "../../data-config"

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
                    return <ProductItem data={val} index={index}/>
                })
            }
        </div>
    )
}

function ProductItem(props) {
    const {data, index} = props;

    return (
        <div className="product-item" key={index}>
            <img src={data.image} alt={data.title} />
        </div>
    )
}