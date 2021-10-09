import Images from "next/image"

export default function HomePage() {
    return(
        <section className="homepage">
            <div className="grid-2 content-container">
                <div className="child-1">Chil</div>
                <div className="child">
                    <Box>

                    </Box>
                </div>
            </div>
        </section>
    )
}


function Box(){
    return(
        <div className="box">
            <img src="images/1.jpg" alt="" srcset="" width={"100px"} />
        </div>
    )
}
