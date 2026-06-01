import Third from "./third";
import GlobalContext from "./global";
import { useContext } from "react";
function Second(){
  const contextValue = useContext(GlobalContext);
  return(
    <div>
   <h2>Kaise hai aap log</h2>
   <Third />
    </div>
  )
}
export default Second;