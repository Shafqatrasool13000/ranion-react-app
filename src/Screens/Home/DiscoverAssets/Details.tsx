import {useParams } from "react-router-dom"

export default function Details() {
    const {description}=useParams();
  return (
    <div className='tab-pane active' id="tabs-1"
    role="tabpanel">
    <p>{description}</p>
</div>
  )
}
