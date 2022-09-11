import React from 'react'

function AboutPageContent() {
    return (
        <>
            <h1 className='about-page-heading'>WHO ARE WE</h1>
            <h2 className='about-page-salogan'>8.1 million children need help to stay in school. These are the children whom education has passed by. These are the children whom we dream will, one day, all have access to schooling. Are these numbers daunting? Yes, perhaps. Yet, to us, transforming these numbers is what drives us each morning. Established in 2003 by cricket icon Kapil Dev, KHUSHII works tirelessly to keep children in school, through holistic interventions that impact the community. In just 17 years, KHUSHII has transformed the lives of over 1.5 million women and children.</h2>
            <div className='line'></div>
            <div className='row '>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className="card center" style={{ width: "18rem" }}>
                        <img src="https://image.shutterstock.com/image-vector/no-drugs-allowed-260nw-415957861.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Our Vision</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className="card center" style={{ width: "18rem" }}>
                        <img src="https://image.shutterstock.com/image-vector/no-drugs-allowed-260nw-415957861.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Our Mision</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className="card center" style={{ width: "18rem" }}>
                        <img src="https://image.shutterstock.com/image-vector/no-drugs-allowed-260nw-415957861.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Our Values</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='testemony'>
                <img alt="person-img" className='testemony-img' src='data:image/jpeg;base64,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'/>
                <h3 className='testemony-text'>
                "
                    From the day that we started
                    KHUSHII, in 2003, I had a vision of a
                    prosperous India in my mind and
                    my heart, with education being the
                    torch. It is education, that acts as
                    the brightest star and a guiding
                    light in all our lives, throughout
                    especially for those, who are lesser
                    privileged than us."
                </h3>
                <p>
                    -kapil dev, Someone who cares
                </p>
            </div>
            <div className='testemony'>
                <img alt="person-img" className='testemony-2-img' src='data:image/jpeg;base64,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'/>
                <h3 className='testemony-text'>
                "
                    From the day that we started
                    KHUSHII, in 2003, I had a vision of a
                    prosperous India in my mind and
                    my heart, with education being the
                    torch. It is education, that acts as
                    the brightest star and a guiding
                    light in all our lives, throughout
                    especially for those, who are lesser
                    privileged than us."
                </h3>
                <p style={{textAlign:"left", marginLeft:"1rem"}}>
                    -kapil dev, Someone who cares
                </p>
            </div>


        </>
    )
}

export default AboutPageContent