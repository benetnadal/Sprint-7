import {Link as Navlink} from "react-router-dom"


const Link = ({to,...props}) => <Navlink {...props} to ={process.env.PUBLIC_URL + to} />

export default Link