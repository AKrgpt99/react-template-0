import React from "react";

import Clouds from "../../images/clouds.png";
import Emoji from "../../components/emoji";

function Rocket() {
  return (
    <>
      <img src={Clouds} alt="clouds" className="clouds" />
      <Emoji className="rocket" description="rocket" width="256px" />
    </>
  );
}

export default Rocket;
