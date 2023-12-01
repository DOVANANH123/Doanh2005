import {IconContext} from "react-icon";
import {FaExclamationTriangle} from "react-icons/fa";

export default function ErrorIcon (){
    return (
        <IconContext.Provider value={{ color:"forestgreen", size:"1.7rem"}}>
            <FaExclamationTriangle/>
        </IconContext.Provider>
    )
}