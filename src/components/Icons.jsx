import { FaRegCircle} from "react-icons/fa";
import { RxCross1} from "react-icons/rx";
import { BsPencilFill} from "react-icons/bs";

function Icons({input}){
    switch(input){
        case "cross": return <RxCross1/>;
        case "circle": return <FaRegCircle/>
        default: return <BsPencilFill/>
    }
}
export default Icons;