import Images from "next/image"

export default function HomePage() {
    return(
        <section className="homepage">
            <div className="grid-2 content-container">
                <div className="child-1">
                    <div className="left-content">
                        <div className="content-overflow">
                            <div className="title-container">
                                <div className="text-md text-1">
                                    <div>
                                        Explore
                                    </div> 
                                    Hahah Hahah Hahah
                                </div>
                            </div>
                            <div className="img-container">
                                <img src="/images/homepage-right.JPG" alt="" className="img-home-left" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="child-2">
                    <div className="right-content">
                        <div className="content-overflow">
                            <div className="img-container">
                                <img src="/images/homepage-left.JPG" alt="" />
                            </div>
                            <div className="title-container">
                                <div className="text-md text-1">
                                    DO GOOD WORK
                                </div>
                                <div className="text-md text-1">
                                    FOR GOOD PEOPLE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function Box(){
    return(
        <div className="box">
        </div>
    )
}
