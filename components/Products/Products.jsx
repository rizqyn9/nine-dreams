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
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    )
}

function ProductItem() {
    return (
        <div className="product-item">
            <img src="/images/7.JPG" alt="" />
        </div>
    )
}