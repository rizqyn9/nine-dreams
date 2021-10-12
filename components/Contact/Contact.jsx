export default function Contact() {
    return (
        <section className="contact">
            <div className="content-container">
                <div className="text-4xl title">
                    Contact
                </div>
                <div className="text-md footer">
                    <div className="tag-line">
                        Lets Be My Friends
                    </div>
                    <div className="content">
                        <SiteMap/>
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SocialMedia(params) {
    return (
        <div className="social">
            <div className="text-md title">Social</div>
            <div className="text-sm child">
                <div>Instagram</div>
                <div>Facebook</div>
                <div>E-Mail</div>
                <div>WhatsApp</div>
            </div>
{/* <img src="https://img.icons8.com/ios/150/000000/facebook-new.png"/> */}
{/* <img src="https://img.icons8.com/ios/150/000000/instagram-new--v2.png"/>             */}
        </div>
    )
}

function SiteMap(params) {
    return (
        <div className="site">
            <div className="text-md title">Site Map</div>
            <div className="text-sm child">
                <div>Website</div>
                <div>Shopee</div>
                <div>Tokopedia</div>
                <div>Bukalapak</div>
            </div>
        </div>
    )
}