import { useNavigate } from "react-router-dom"

type CreatorType = {
    name: string,
    amount: string,
    key:number,
    id:number
}

const CreatorBox = ({ name, amount,id }: CreatorType) => {
    const navigate = useNavigate();

    const navigateToProfile = (id:number) => {
        navigate(`profile/${id}`)
    }
    return (
        <>
            <div className="creator_item creator_card space-x-10 mx-2" style={{cursor:'pointer'}}>
                <div className="avatars space-x-10">
                    <div onClick={()=>navigateToProfile(id)}>
                        <img
                            src="assets/img/avatars/avatar_1.png"
                            alt="Avatar" className="avatar avatar-md" />
                    </div>
                    <div>
                        <div>
                            <p className="avatars_name color_black" onClick={()=>navigateToProfile(id)}>{name}</p>
                        </div>
                        <span className="price color_green">{amount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatorBox