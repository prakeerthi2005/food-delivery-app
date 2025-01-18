import React from "react";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and presentation",
    img: "/images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    img: "/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering",
    img: "/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    img: "/images/home/services/icon4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle text-green font-medium uppercase">
              Our Story & Services
            </p>
            <h2 className="title text-3xl font-bold text-gray-800">
              Our Culinary Journey And Services
            </h2>
            <p className="my-5 text-secondary leading-7">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>

            <button className="bg-green text-white font-semibold btn px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-all duration-300">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-lg rounded-lg p-5 text-center space-y-3 bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-500"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-16 h-16 mx-auto"
                />
                <h5 className="pt-3 text-lg font-semibold text-gray-800">
                  {service.title}
                </h5>
                <p className="text-sm text-gray-500">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
