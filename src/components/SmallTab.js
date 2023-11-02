import { NavLink } from "react-router-dom";


const SmallTab = () => {
    const path ="/admin"
    return(
<div className="flex  justify-center items-center">
<ul className="flex  justify-between gap-[20px]">
  <li>
    <NavLink to={`${path}/openAution`} className="active">
      current auction
    </NavLink>
  </li>
  <li>
    <NavLink to={`${path}/closeAution`}>previous auction</NavLink>
  </li>
  <li>
    <NavLink to={`${path}/player`}> players</NavLink>
  </li>
</ul>
</div>
    )
}

export default SmallTab;