import React from "react";

import Promo1 from "../../../assets/Promo1.png";

import Promo4 from "../../../assets/Promo4.jpg";
import Promo5 from "../../../assets/Promo5.jpeg";
import Promo6 from "../../../assets/Promo6.jpeg";

const HeroMobile = () => {
  return (
    <div className="w-full lg:hidden block px-4 py-8">
      <img src={Promo6} className="object-cover " />
      <div className="grid grid-cols-2 gap-1 pt-1">
        <img src={Promo4} className="object-cover " />
        {/* <img src={Promo5} className="object-cover " /> */}
        <img src={Promo1} className="object-cover " />
      </div>
    </div>
  );
};

export default HeroMobile;
