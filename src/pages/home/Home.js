import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FristSection } from "./FristSection";
import { SecondSectio } from "./SecondSectio";
import { ThirdSection } from "./ThirdSection";
import { FourthSection } from "./FourthSection";
import { FifthSection } from "./FifthSection";
import { SixthSection } from "./SixthSection";

export const Home = () => {
  const { data } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  // counter
  


  return (
    <div className=" px-smallCon md:px-mediumCon lg:px-largeCon   ">
      {/* section 1 */}
      <FristSection products={products}/>

      {/* section 2 */}
      <SecondSectio products={products}/>

      {/* section 3 cateories */}
      <ThirdSection/>

      {/* section 4 cateories */}
      <FourthSection products={products}/>

      {/* section 5 */}
      <FifthSection products={products}/>

      {/* section 6 */}
      <SixthSection />

    </div>
  );
};
