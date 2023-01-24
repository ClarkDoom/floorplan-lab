import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <>
      <div>
        <h1>Kitchen Component</h1>
          <Oven />
          <Sink />
      </div>
    </>
  );
}

export default Kitchen;