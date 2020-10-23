import React from "react";

type PropsHome = {
  
};

function Home({ }: PropsHome) {
  
  return (
    <div>
      <div> 
        <div>buttons</div>
      </div>
      <div> 
        <div>input text</div>
        <div>input range</div>
        <div>input checkbox</div>  
      </div>
      <div>
        <div>rotate</div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  
};

export default Home;