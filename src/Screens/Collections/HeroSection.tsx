
const HeroSection = () => {
    return (
        <>
        <div className="hero__collections">
			    <div className="container">
			        <h1>Artwork collections</h1>
			    </div>
			</div>
			<div className="filters bg_white border-b py-20">
			    <div className="container">
			        <div className="row justify-content-between align-items-center">
			            <div className="col-lg-auto">
			                <div className="d-flex space-x-10 align-items-center">
			                    <span className="color_text txt_sm"> FILTER BY: </span>
			                    <ul className="menu_categories space-x-20">
			                        <li className="d-flex space-x-10 switch_item">
			                    
			                            <input type="checkbox" id="switch1" /><label
			                                htmlFor="switch1">Toggle</label>
			                            <span> Has list price </span>
			                        </li>
			                        <li className="d-flex space-x-10 switch_item">
			                    
			                            <input type="checkbox" id="switch2" checked/><label
			                                htmlFor="switch2">Toggle</label>
			                            <span> Has open offer </span>
			                        </li>
			                        <li className="d-flex space-x-10 switch_item">
			                    
			                            <input type="checkbox" id="switch3" /><label
			                                htmlFor="switch3">Toggle</label>
			                            <span> Owned by creator </span>
			                        </li>
			                        <li className="d-flex space-x-10 switch_item">
			                    
			                            <input type="checkbox" id="switch4" /><label
			                                htmlFor="switch4">Toggle</label>
			                            <span> Has sold </span>
			                        </li>
			                    </ul>                </div>
			            </div>
			            <div className="col-lg-auto">
			                <div className="d-flex space-x-10 align-items-center sm:mt-20">
			                    <span className="color_text txt_sm"> SORT BY: </span>
			                    <div className="dropdown">
			                        <button className="btn btn-dark btn-sm dropdown-toggle"
			                            type="button"
			                            data-toggle="dropdown" aria-haspopup="true"
			                            aria-expanded="false">
			                            Recent Active
			                        </button>
			                        <div className="dropdown-menu">
			                            <a className="dropdown-item" href="#">Action</a>
			                            <a className="dropdown-item" href="#">Another action</a>
			                            <a className="dropdown-item" href="#">Something else
			                                here</a>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        </>
    )
}

export default HeroSection