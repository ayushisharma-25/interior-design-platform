import React, { useState } from "react";

import {
    homeUserOneImage,
    homeUserTwoImage,
    homeUserThreeImage,
    homePlusIconImage,

    homeFurnitureOneImage,
    homeFurnitureTwoImage,
    homeFurnitureThreeImage,

    homeCafeImage,
    homeLuxuryImage,
    homeOutdoorLivingImage,
    homeModularKitchenImage,
    homeOfficeSpaceImage,

} from "../../ImageExports/HomeImages";

function FurnitureSection() {

    const [showMore, setShowMore] = useState(false);
    const users = [
        homeUserOneImage,
        homeUserTwoImage,
        homeUserThreeImage,
        homePlusIconImage,
    ];
    const categories = [
        {
            title: "Luxury Interiors",
            image: homeLuxuryImage,
            className: "category1",
        },

        {
            title: "Office Spaces",
            image: homeOfficeSpaceImage,
            className: "category2",
        },

        {
            title: "Outdoor Living",
            image: homeOutdoorLivingImage,
            className: "category3",
        },

        {
            title: "Hospitality Design",
            image: homeCafeImage,
            className: "category4",
        },

        {
            title: "Modular Kitchen",
            image: homeModularKitchenImage,
            className: "category5",
        },
    ];

    return (

        <section className="page section" data-aos="fade-up">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="furnit">
                            <h2>Furnit<span> Category</span>
                            </h2>
                        </div>
                        <div className="story">
                            <p>It has survived not only five centuries, but also the <br />leap into electronic typesetting. type and scrambled it <br />to make a type specimen book. It has survived not <br />only five centuries, but also the leap into electronic <br />typesetting</p>
                        </div>
                        <div className="others">
                            <div>
                                {users.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="person"
                                    />
                                ))}
                            </div>
                            <div>
                                <p>Understanding the person or <br />people living in a home is far<br /> greater need in design.</p>
                            </div>
                        </div>
                        <div className="pop">
                            <button onClick={() => setShowMore(!showMore)} className="btn more">
                                {showMore ? "Show Less" : "More Category"}
                            </button>

                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 side">
                        <img src={homeFurnitureOneImage} alt="living room" />
                        <div className="cards">
                            <p>Resedential<br /> Sanctuaries</p>
                        </div>
                        <img src={homeFurnitureTwoImage} alt="living room" />
                    </div>
                    <div className="col-lg-3 col-sm-6 another-side">
                        <div className="orange">
                            <p>Commercial<br /> Elegance </p>
                        </div>
                        <img src={homeFurnitureThreeImage} alt="living room" />
                        <div className="green">
                            <p>Retail <br />Ambience</p>
                        </div>
                    </div>
                </div>
            </div>
            {showMore && (

                <div className="extra">

                    {categories.map((item, index) => (

                        <div
                            className={`extra-box extra${index + 1}`}
                            key={index}
                        >

                            <div className={`category ${item.className}`}>
                                {item.title}
                            </div>

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                        </div>

                    ))}

                </div>

            )}
        </section >
    );
}

export default FurnitureSection;