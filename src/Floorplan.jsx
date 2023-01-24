import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const Floorplan = (props) => {
  return ( 
    <>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedroomNum={1}/>
      <Bedroom bedroomNum={2}/>
      <Bedroom bedroomNum={3}/>
      <Bath size={"Half"}/>
      <Bath size={"Full"}/>
    </>
  );
}
 
export default Floorplan;