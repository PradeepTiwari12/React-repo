import GlobalContext from "./global";
import { useContext } from "react";
function Third(){
    const contextValue = useContext(GlobalContext);
    return(
     <>
      <h2>Iam printing {contextValue.counts}</h2>
      </>
    )}
export default Third;