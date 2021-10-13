import {creative} from "../../data-config"


export default function Creative() {
    return(
        <section className="creative">
            <div className="wrap-content">
                <div className="text-lg title-container">
                    Creative Communication
                </div>
            </div>
            <div className="creative-container">
                {
                    creative.map((val,i) => {
                        return <CreativeItem data={val} index={i} key={i}/>
                    })
                }
            </div>
        </section>
    )
}

function CreativeItem(props) {
    const {data, index} = props;
    return (
        <div className="creative-item" key={`${index}-${data.title}`}>
            <img src={data.image} alt="" className="img-creative"/>
        </div>
    )
}