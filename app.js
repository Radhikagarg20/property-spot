const images = document.querySelectorAll(".Gallery-images");
const modal = document.getElementsByClassName("modal")[0];
const modalImg = document.getElementsByClassName("modalImg")[0];
const modalTxt = document.getElementsByClassName("modalTxt")[0];
const close = document.getElementById("close");
const boxImg = document.querySelectorAll(".box-img");
var galleryImg = ["galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg", "galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg", "galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg", "galleryImg1.jpeg", "galleryImg2.jpeg"];
var Content = document.getElementsByClassName("container__content")[0];
const items = document.querySelectorAll(".accordion button");
let contentH1 = document.getElementsByClassName("dynamicH1")[0];
let contentH3 = document.getElementsByClassName("dynamicH3")[0];
let contentP = document.getElementsByClassName("dynamicP")[0];
let contentImg = document.getElementsByClassName("dynamicImg");
let detailH2 = document.getElementsByClassName("dynamicH2")[0];
let detailLi = document.querySelector(".dynamicLi1");
let detailLi2 = document.querySelector(".dynamicLi2");
let detailLi3 = document.querySelector(".dynamicLi3");
let detailLi4 = document.querySelector(".dynamicLi4");
let detailP = document.querySelector(".dynamicP2");
let detailP2 = document.querySelector(".dynamicP3");
let bedRooms = document.querySelector(".bedrooms");
let squareFt = document.querySelector(".sqr-ft");
let floor = document.querySelector(".floor");
const propertyBtn = document.querySelectorAll(".anchor-button");
const radiobtn = document.getElementById("r1");
let aboutContainer = document.getElementsByClassName("about-content-info")[0];
let aboutH2 = document.getElementsByClassName("DH2")[0];
let aboutP = document.getElementsByClassName("DP")[0];
let aboutP2 = document.getElementsByClassName("DP2")[0];
let aboutP3 = document.getElementsByClassName("DP3")[0];
const aboutNav = document.querySelectorAll(".nav-toggle2");
const navHighlight = document.getElementsByClassName("navHighlight")[0];
let gridImagses = document.querySelectorAll(".grid-img");
let mobileProperties = document.querySelectorAll(".property");
let aboutBtn = document.querySelector("#about-button");

// individual objects containing dynamic data for development pages consisting slider images,property name,price,location,bedrooms
const one = {
    propertyImg: ["assets/spacejoy-tAuc4H7Qf9s-unsplash.jpg", "assets/steven-ungermann-Aac7IlKnYX8-unsplash.jpg", "assets/carl-gartman-eUvshcvtULI-unsplash.jpg", "assets/sidekix-media-WgkA3CSFrjc-unsplash.jpg"],
    h1: "Andheri",
    h3: "Mumbai",
    p: "1-Bed Apartment, 2-Bed Apartment from Rs 80 LPA",
    l1: "24/7 Security",
    l2: "Ample Parking", 
    l3: "Children’s Play Area",
    l4: "Clubhouse",
    l4: "Fitness Center",
    p2: "Introducing Wimbledon Grounds: a 51,000 sq. m. mixed-use regeneration master plan located on Plough Lane. The development comprises a brand new purpose-built stadium for AFC Wimbledon, encircled by a residential scheme with more than 600 homes, including shared ownership housing by Catalyst. The site is also home to all-new community, leisure and retail space, and is set to transform the town centre and surrounding area.",
    p3: "RPJ Homes is proud to present Stadia One and Stadia Three — two superb new residential buildings at Wimbledon Grounds. Stadia One offers an impressive 364 new-build homes, while Stadia Three presents a sensational collection of 114 one, two and three bedroom apartments arranged across seven storeys. Residents can enjoy premier specifications as well as access to private external space in the form of either a balcony or roof terrace, whilst lifestyle facilities include an extensive hospitality suite within the adjacent stadium, retail facilities, plus a squash and fitness club. Two communal landscaped gardens feature at the development while a new public realm with a dedicated cycle route is also part of this exciting scheme.",
    room: "2",
    measurement: "1200 sq ft (approx)",
    floor: "Third Floor",
};

const two = {
    propertyImg: ["assets/sidekix-media-7jlVQPX8PLE-unsplash.jpg", "assets/r-architecture-QMo-jtdyAQU-unsplash.jpg", "assets/sidekix-media-VaGdhK-kI1c-unsplash.jpg", "assets/outsite-co-R-LK3sqLiBw-unsplash.jpg"],
    h1: "Near Artillery Center",
    h3: "Nashik Road",
    p: "3-Bed Row House from Rs 1.00 Cr.",
    l1: "24/7 Security",
    l2: "Ample Parking",
    l3: "Children’s Play Area",
    l4: "Clubhouse",
    l4: "Fitness Center",
    p2: "Located at 65-70 White Lion Street, a three-minute walk from both the popular Upper Street and Angel underground station, the cleared freehold development site spans 0.29 acres and has planning permission for a high quality new development arranged over six floors. Angel is one of most popular areas in the wider City Fringe market, with a wide array of amenities and excellent transport connections from Angel underground station, providing fast access to Kings Cross, the City and West End. A number of new mixed use developments have emerged across N1 in the past few years, adding to the retail offering and cementing Angel as a key submarket for TMT and other sectors.",
    p3: "The new development will achieve a BREEAM rating of “Excellent” and will include high levels of natural daylight throughout with glazed frontages and internal light wells, with average floor to ceiling heights of three metres. There will be expansive roof terraces, two passenger lifts and 64 bicycle spaces, plus shower facilities at basement level.",
    room: "3",
    measurement: "990 sq ft (approx)",
    floor: "3 Floors",
};

const three = {
    propertyImg: ["assets/sidekix-media-g51F6-WYzyU-unsplash.jpg", "assets/francesca-tosolini-hCU4fimRW-c-unsplash.jpg", "assets/sidekix-media-0sDzRgrN_pI-unsplash.jpg", "assets/sidekix-media-oCw5_evbWyI-unsplash.jpg"],
    h1: "Cidco Main Road",
    h3: "CBS Nashik",
    p: "2-BHK with extra space from 80 LPA ",
    l1: "24/7 Security",
    l2: "Ample Parking",
    l3: "Children’s Play Area",
    l4: "Clubhouse",
    l4: "Fitness Center",
    p2: "This exceptional 676sqft 2-bedroom apartment sits on the 22nd floor of Eight Casson Square, Southbank Place and offers breath-taking views across the River Thames, Westminster, and the City. Flooded by light from the full-height windows, the living spaces have a light touch, with space to relax, entertain and watch the ever-changing panorama of the city. Eight Casson Square provides a selection of high quality designed 1-bed suites, 1 and 2-bed apartments and penthouses in a 30 storey Tower designed by Patel Taylor, with a new ticket hall and the new Waterloo underground station entrance at ground floor level. Finished to an exceptional level of specification, the apartments at 8 Casson Square provide sophisticated living within one of central London's most desirable locations.",
    p3: "Located in one of London's most desirable and world-renowned riverside locations, Southbank Place lies on the banks of the River Thames adjacent to Westminster, Jubilee Gardens and The London Eye. Surrounded by an area steeped in history, heritage and culture, Southbank Place.",
    room: "2",
    measurement: "1000 sq ft (approx)",
    floor: "2 Floor",
};

const four = {
    propertyImg: ["assets/sidekix-media-t294_ZZP2pg-unsplash.jpg", "assets/zac-gudakov-lk-APuu-T5A-unsplash.jpg", "assets/spacejoy-8wDnylxemkk-unsplash.jpg", "assets/steven-ungermann-1AF5hP6F4tI-unsplash.jpg"],
    h1: "Raj Hotel",
    h3: "South Delhi",
    p: "Grand villa",
    l1: "24/7 Security",
    l2: "Ample Parking",
    l3: "Children’s Play Area",
    l4: "Clubhouse",
    l4: "Fitness Center",
    p2: "Spacious Four bedrooms property available in the well-known Wembley area; extremely close to bus stations, local shops and within easy access to London Outlet and Wembley Stadium. On the ground floor you will find two large reception rooms including a dining room off the kitchen, a shower room and an outbuilding at the rear of the garden. The first floor consists of four bedrooms and a family bathroom.",
    p3: "Rare opportunity to acquire this elegant and contemporary home. Boasting a charming courtyard garden and a stunning rooftop terrace with direct views of Nine Elms skyline. This lovely home has an abundance of light and space throughout, two bathrooms, large kitchen dining area and expertly located a short stroll from the new Nine Elms station, Early viewing's highly recommended.",
    room: "5",
    measurement: "2700 sq ft (approx)",
    floor: "Three Floors",
};

const five = {
    propertyImg: ["assets/point3d-commercial-imaging-ltd-xON7AlJZemw-unsplash.jpg", "assets/zac-gudakov-RMnc22CwVVA-unsplash.jpg", "assets/rune-enstad-UXFJ-6Zj27M-unsplash.jpg", "assets/michael-oxendine-NIC-IhNpsNs-unsplash.jpg"],
    h1: "Fashion Style Mall",
    h3: "Navi Mumbai",
    p: "3 BHK With Parking",
    l1: "24/7 Security",
    l2: "Ample Parking",
    l3: "Children’s Play Area",
    l4: "Clubhouse",
    l4: "Fitness Center",
    p2: "A Belgravia apartment conveniently located in a vibrant location on the door step of Elizabeth street and Ecclestone Yard.Ebury Street is located close to Elizabeth Street and Ecclestone Yard in the heart of Belgravia. Victoria underground and mainline station is 0.3 miles away, and Sloane Square underground station is 0.5 miles away (all times and distances are approximate).",
    p3: "The apartment comprises on the second floor a large living room with working gas fireplace overlooking Ebury Street and a separate kitchen at the rear. There is a guest bathroom with shower on the first-floor half landing. The second floor has a large charming principal bedroom with beamed ceilings opening onto a windowed dressing room with three large walk in cupboards and a bathroom. The second smaller double bedroom doubles as an office while the bathroom can service both bedrooms. This floor could easily be converted into an extra bathroom and small bedroom. There is also an unconverted attic reached via the landing which runs the length of the upper floor. The three flat owners of the building have the right to manage.",
    room: "3",
    measurement: "990 sq ft (approx)",
    floor: "Third Floor",
};

// individual objects containing dynamic data for about pages
const aboutOne = {
    h2: "WHO WE ARE",
    p: "We are a premier developer of luxury properties, specializing in creating exceptional living spaces that combine elegance, innovation, and functionality. Our projects, located in prime areas, offer more than just homes—they provide a lifestyle that blends refined luxury with modern convenience.",
    p2: "Beyond construction, we design communities tailored to meet the needs of contemporary living. From luxurious villas to thoughtfully planned neighborhoods, we prioritize sustainability, quality, and long-term value—ensuring lasting benefits for our clients and partners.",
    p3: "Driven by a passion for excellence, we don’t just build—we transform landscapes and elevate living standards, creating spaces where people thrive and feel at home.",
};

const aboutTwo = {
    h2: "WHAT WE DO",
    p: "We specialize in residential-led, mixed-use developments, delivering successful projects across key locations. With a focus on custom design and high quality, our developments boost property value, improve local environments, and fit seamlessly into their communities.",
    p2: "As a fully integrated developer, we handle every step of the project lifecycle. From land acquisition and planning to design, construction, sales, and post-completion services, we ensure top-notch quality and service throughout. Our approach puts clients at the center, ensuring smooth and successful delivery.",
    p3: "We’re dedicated to creating vibrant spaces where people can live, work, and thrive—blending beauty, functionality, and long-term value.",
};

const aboutThree = {
    h2: "Integrated approach",
    p: "We operate across the entire lifecycle of the asset, with land acquisition, planning, stakeholder engagement, sales & marketing, delivery, customer care and commercial strategy all in-house by our exceptional industry professionals.",
    p2: "Our integrated business model has supported our continued growth for over 20 years while targeting high quality investments and prioritising sustainable value creation.",
    p3: "Our highly experienced construction team has a strong and proven track record of delivering major projects from inception through to completion.",
};

const aboutFour = {
    h2: "Partnerships",
    p: "We offer our residential clients in India the opportunity to invest below market value, ensuring higher returns on their investments. Our premium residential units, coupled with award-winning customer service, help you achieve your investment goals with ease.",
    p2: "With a dedicated research team providing in-depth insights and investor resources, we offer tailored support, no matter your level of experience.",
    p3: "Operating across India’s key investment hotspots, we’ve built a strong portfolio and are proud of our heritage and the success we've achieved so far, as we continue to expand and create new opportunities.",
};

const aboutFive = {
    h2: "Our Approach",
    p: " What sets us apart is our commitment to providing a complete, end-to-end service. From sourcing premium properties to guiding you through the purchase process and offering top-tier aftercare, we put our clients at the heart of everything we do.",
    p2: "We specialize in off-plan properties, allowing you to purchase directly from the developer at below-market value. This gives our clients access to high-quality, premium properties with significant potential for capital appreciation. By buying at an early stage, you can secure better pricing and enjoy the benefit of higher returns as the property’s value grows. ",
    p3: "Whether you're a seasoned investor or just starting out, we work with clients of all experience levels worldwide, helping you achieve your investment goals with confidence and ease.",
};

// Function to repopulate the middle section of the development page with its corresponding data
propertyBtn.forEach((btn) =>
    btn.addEventListener("click", function () {
        radiobtn.checked = true;
        if (btn.id == "one") {
            contentH1.innerHTML = one.h1;
            contentH3.innerHTML = one.h3;
            contentP.innerHTML = one.p;
            detailLi.innerHTML = one.l1;
            detailLi2.innerHTML = one.l2;
            detailLi3.innerHTML = one.l3;
            detailLi4.innerHTML = one.l4;
            detailP.innerHTML = one.p2;
            detailP2.innerHTML = one.p3;
            bedRooms.innerHTML = one.room;
            squareFt.innerHTML = one.measurement;
            floor.innerHTML = one.floor;
            for (let i = 0; i < contentImg.length; i++) {
                contentImg[i].src = one.propertyImg[i];
            }
        } else if (btn.id == "two") {
            contentH1.innerHTML = two.h1;
            contentH3.innerHTML = two.h3;
            contentP.innerHTML = two.p;
            detailLi.innerHTML = two.l1;
            detailLi2.innerHTML = two.l2;
            detailLi3.innerHTML = two.l3;
            detailLi4.innerHTML = two.l4;
            detailP.innerHTML = two.p2;
            detailP2.innerHTML = two.p3;
            bedRooms.innerHTML = two.room;
            squareFt.innerHTML = two.measurement;
            floor.innerHTML = two.floor;
            for (let i = 0; i < contentImg.length; i++) {
                contentImg[i].src = two.propertyImg[i];
            }
        } else if (btn.id == "three") {
            contentH1.innerHTML = three.h1;
            contentH3.innerHTML = three.h3;
            contentP.innerHTML = three.p;
            detailLi.innerHTML = three.l1;
            detailLi2.innerHTML = three.l2;
            detailLi3.innerHTML = three.l3;
            detailLi4.innerHTML = three.l4;
            detailP.innerHTML = three.p2;
            detailP2.innerHTML = three.p3;
            bedRooms.innerHTML = three.room;
            squareFt.innerHTML = three.measurement;
            floor.innerHTML = three.floor;
            for (let i = 0; i < contentImg.length; i++) {
                contentImg[i].src = three.propertyImg[i];
            }
        } else if (btn.id == "four") {
            contentH1.innerHTML = four.h1;
            contentH3.innerHTML = four.h3;
            contentP.innerHTML = four.p;
            detailLi.innerHTML = four.l1;
            detailLi2.innerHTML = four.l2;
            detailLi3.innerHTML = four.l3;
            detailLi4.innerHTML = four.l4;
            detailP.innerHTML = four.p2;
            detailP2.innerHTML = four.p3;
            bedRooms.innerHTML = four.room;
            squareFt.innerHTML = four.measurement;
            floor.innerHTML = four.floor;
            for (let i = 0; i < contentImg.length; i++) {
                contentImg[i].src = four.propertyImg[i];
            }
        } else if (btn.id == "five") {
            contentH1.innerHTML = five.h1;
            contentH3.innerHTML = five.h3;
            contentP.innerHTML = five.p;
            detailLi.innerHTML = five.l1;
            detailLi2.innerHTML = five.l2;
            detailLi3.innerHTML = five.l3;
            detailLi4.innerHTML = five.l4;
            detailP.innerHTML = five.p2;
            detailP2.innerHTML = five.p3;
            bedRooms.innerHTML = five.room;
            squareFt.innerHTML = five.measurement;
            floor.innerHTML = five.floor;
            for (let i = 0; i < contentImg.length; i++) {
                contentImg[i].src = five.propertyImg[i];
            }
        }
    })
);

// Function to repopulate the about container with the corresponding data.
aboutNav.forEach((nav) =>
    nav.addEventListener(
        "click",
        function (e) {
            e.preventDefault;
            aboutContainer.classList.remove("containerAnimation");
            void aboutContainer.offsetWidth;
            aboutContainer.classList.add("containerAnimation");
            if (nav.id == "aboutOne") {
                aboutContent(aboutOne);
                aboutBtn.style.display = "none";
            } else if (nav.id == "aboutTwo") {
                aboutContent(aboutTwo);
                aboutBtn.style.display = "block";
            } else if (nav.id == "aboutThree") {
                aboutContent(aboutThree);
                aboutBtn.style.display = "none";
            } else if (nav.id == "aboutFour") {
                aboutContent(aboutFour);
                aboutBtn.style.display = "none";
            } else if (nav.id == "aboutFive") {
                aboutContent(aboutFive);
                aboutBtn.style.display = "none";
            }

            if (nav.id == "aboutOne") {
                colorSwitcher(aboutNav, nav);
            } else if (nav.id == "aboutTwo") {
                colorSwitcher(aboutNav, nav);
            } else if (nav.id == "aboutThree") {
                colorSwitcher(aboutNav, nav);
            } else if (nav.id == "aboutFour") {
                colorSwitcher(aboutNav, nav);
            } else if (nav.id == "aboutFive") {
                colorSwitcher(aboutNav, nav);
            }

            // Function to highlight chosen nav
            function colorSwitcher(el, elHolder) {
                for (let C = 0; C < 5; C++) {
                    el[C].style.color = "white";
                }
                elHolder.style.color = "Yellow";
            }

            function aboutContent(el) {
                aboutH2.innerHTML = el.h2;
                aboutP.innerHTML = el.p;
                aboutP2.innerHTML = el.p2;
                aboutP3.innerHTML = el.p3;
            }
        },
        false
    )
);

aboutNav.forEach((nav) =>
    nav.addEventListener(
        "click",
        function (e) {
            // function to add class with css animation which slides in the content from the bottom everytime it is clicked
            e.preventDefault;
            nav.classList.add("navClicked");
            void nav.offsetWidth;

            nav.classList.remove("navClicked");
        },
        false
    )
);

gridImagses.forEach((link) =>
    link.addEventListener("click", function () {
        // going to set dev page when clicked
        if (link.id == "Property1") {
            window.open("Developments.html", "_self");
        } else if (link.id == "Property2") {
            window.open("Developments2.html", "_self");
        } else if (link.id == "Property3") {
            window.open("Developments3.html", "_self");
        } else if (link.id == "Property4") {
            window.open("Developments4.html", "_self");
        } else if (link.id == "Property5") {
            window.open("Developments5.html", "_self");
        } else if (link.id == "Property6") {
            window.open("Developments6.html", "_self");
        }
    })
);

mobileProperties.forEach((link) =>
    link.addEventListener("click", function () {
        if (link.id == "mobile1") {
            window.open("Developments.html", "_self");
        } else if (link.id == "mobile2") {
            window.open("Developments2.html", "_self");
        } else if (link.id == "mobile3") {
            window.open("Developments3.html", "_self");
        }
    })
);

// Function for Faqs section
function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
    }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// Animations for on scroll
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals2[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals2[i].classList.add("active2");
        } else {
            reveals2[i].classList.remove("active2");
        }
    }
}

images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modal.classList.add("appear");
        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
        for (let i = 0; i < galleryImg.length; i++) {
            boxImg[i].src = galleryImg[i];
        }
    });
});

boxImg.forEach((img) => {
    img.addEventListener("click", () => {
        const modalSrc = modalImg.src;
        const boxSrc = img.src;
        modalImg.src = boxSrc;
        img.src = modalSrc;
    });
});

document.addEventListener("click", function (event) {
    if (event.target.id == "Gallery_images") {
    }
});
