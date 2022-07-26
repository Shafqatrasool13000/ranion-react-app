import React from 'react'

const RecentNfts = () => {
    return (
        <>
        <div className="container">
				<div className="row md:space-y-30">
					<div className="col-lg-8">
						<div className="section__head">
							<h2 className="section__title mb-20">Recent NFTs</h2>
							<div className="d-flex space-x-10">
								<span className="color_text txt_sm" style={{minWidth:
									"max-content"}}> FILTER BY: </span>
								<ul className="menu_categories space-x-20">
									<li className="d-flex space-x-10 switch_item">
										<input type="checkbox" id="switch1" checked/><label
											htmlFor="switch1">Toggle</label>
										<span> Has list price </span>
									</li>
									<li className="d-flex space-x-10 switch_item">
										<input type="checkbox" id="switch2" /><label
											htmlFor="switch2">Toggle</label>
										<span> Has open offer </span>
									</li>
									<li className="d-flex space-x-10 switch_item">
										<input type="checkbox" id="switch3" /><label
											htmlFor="switch3">Toggle</label>
										<span> Has sold </span>
									</li>
								</ul>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_1.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Mark</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$4,906</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_8.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_2.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Lance</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$5,647</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_7.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_3.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Kylan</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$2,639</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_6.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_4.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Brent</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$1,406</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_5.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_5.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Kenny</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$7,053</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_4.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_6.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Felipe</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$3,946</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_3.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_7.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Zaid</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$3,334</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_2.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card__item four">
									<div className="card_body space-y-10">
										{/* <!-- =============== --> */}
										<div className="creators space-x-10">
											<div className="avatars space-x-10">
												<a href="Profile.html">
													<img
														src="assets/img/avatars/avatar_8.png"
														alt="Avatar" className="avatar
														avatar-md"/>
												</a>
												<div>
													<p className="avatars_desc color_black">
														<a href="Profile.html">
															<span className="txt _bold">@Brody</span>
														</a>
														accepted an offer for about
														<span className="color_brand">$5,404</span>
														on Bound To
														Fall In Love from <span
															className="bayer">@colborn</span></p>
													<span className="time color_text">23
														min ago</span>
												</div>
											</div>
										</div>
										<div className="card_head">
											<a href="Item-details.html">
												<img
													src="assets/img/items/item_1.png"
													alt="NFT"/>
											</a>
			
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<a href="/Marketplace.html" className="btn btn-sm
									btn-white">
									<i className="ri-restart-line"></i>
									View all items
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="section__head">
							<h2 className="section__title">Live Auctions</h2>
						</div>
						<div className="box is__live space-y-30">
							<div className="card__item two">
								<div className="card_body space-y-10">
									{/* <!-- =============== --> */}
									<div className="card_head">
										<a href="Item-details.html">
											<img
												src="assets/img/items/item_1.png"
												alt=""/>
										</a>
			
										<div className="block_timer">
											<div className="d-flex justify-content-center
												align-items-center">
												<div className="item">
													<div className="number hours"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number minutes"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number seconds"></div>
												</div>
											</div>
										</div>
										<div className="details d-flex
											justify-content-between">
											<div className="progress">
												<div className="progress-bar"
													role="progressbar"
													style={{width: "80%"}}
													aria-valuenow={80}
													aria-valuemin={0}
													aria-valuemax={100}></div>
											</div>
										</div>
									</div>
									{/* <!-- =============== --> */}
			
									<h6 className="card_title">
										<a className="color_black"
											href="/Item-details.html">
											Colorful Abstract Painting
										</a>
									</h6>
									<div className="hr"></div>
									<div className="card_footer justify-content-between">
										<div className="creators">
											<div className="avatars space-x-3">
												<div className="-space-x-20">
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_10.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_11.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
												</div>
												<a href="Profile.html">
													<p className="avatars_name txt_sm
														color_black"> @darian_barry
													</p>
												</a>
											</div>
										</div>
										<a href="#" className="space-x-3">
											<p className="color_green txt_sm">0.001 ETH</p>
										</a>
									</div>
								</div>
							</div>
							<div className="card__item two">
								<div className="card_body space-y-10">
									{/* <!-- =============== --> */}
									<div className="card_head">
										<a href="Item-details.html">
											<img
												src="assets/img/items/item_2.png"
												alt=""/>
										</a>
			
										<div className="block_timer">
											<div className="d-flex justify-content-center
												align-items-center">
												<div className="item">
													<div className="number hours"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number minutes"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number seconds"></div>
												</div>
											</div>
										</div>
										<div className="details d-flex
											justify-content-between">
											<div className="progress">
												<div className="progress-bar"
													role="progressbar"
													style={{width: "80%"}}
													aria-valuenow={80}
													aria-valuemin={0}
													aria-valuemax={100}></div>
											</div>
										</div>
									</div>
									{/* <!-- =============== --> */}
			
									<h6 className="card_title">
										<a className="color_black"
											href="/Item-details.html">
											Synthwave Modern Painting
										</a>
									</h6>
									<div className="hr"></div>
									<div className="card_footer justify-content-between">
										<div className="creators">
											<div className="avatars space-x-3">
												<div className="-space-x-20">
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_12.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_13.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
												</div>
												<a href="Profile.html">
													<p className="avatars_name txt_sm
														color_black"> @makinzi_beck
													</p>
												</a>
											</div>
										</div>
										<a href="#" className="space-x-3">
											<p className="color_green txt_sm">0.047 ETH</p>
										</a>
									</div>
								</div>
							</div>
							<div className="card__item two">
								<div className="card_body space-y-10">
									{/* <!-- =============== --> */}
									<div className="card_head">
										<a href="Item-details.html">
											<img
												src="assets/img/items/item_3.png"
												alt=""/>
										</a>
			
										<div className="block_timer">
											<div className="d-flex justify-content-center
												align-items-center">
												<div className="item">
													<div className="number hours"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number minutes"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number seconds"></div>
												</div>
											</div>
										</div>
										<div className="details d-flex
											justify-content-between">
											<div className="progress">
												<div className="progress-bar"
													role="progressbar"
													style={{width: "80%"}}
													aria-valuenow={80}
													aria-valuemin={0}
													aria-valuemax={100}></div>
											</div>
										</div>
									</div>
									{/* <!-- =============== --> */}
			
									<h6 className="card_title">
										<a className="color_black"
											href="/Item-details.html">
											The girl with the firefly
										</a>
									</h6>
									<div className="hr"></div>
									<div className="card_footer justify-content-between">
										<div className="creators">
											<div className="avatars space-x-3">
												<div className="-space-x-20">
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_14.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_15.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
												</div>
												<a href="Profile.html">
													<p className="avatars_name txt_sm
														color_black"> @jaxon_duffy
													</p>
												</a>
											</div>
										</div>
										<a href="#" className="space-x-3">
											<p className="color_green txt_sm">0.074 ETH</p>
										</a>
									</div>
								</div>
							</div>
							<div className="card__item two">
								<div className="card_body space-y-10">
									{/* <!-- =============== --> */}
									<div className="card_head">
										<a href="Item-details.html">
											<img
												src="assets/img/items/item_4.png"
												alt=""/>
										</a>
			
										<div className="block_timer">
											<div className="d-flex justify-content-center
												align-items-center">
												<div className="item">
													<div className="number hours"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number minutes"></div>
												</div>
												<div className="dots">:</div>
												<div className="item">
													<div className="number seconds"></div>
												</div>
											</div>
										</div>
										<div className="details d-flex
											justify-content-between">
											<div className="progress">
												<div className="progress-bar"
													role="progressbar"
													style={{width: "80%"}}
													aria-valuenow={80}
													aria-valuemin={0}
													aria-valuemax={100}></div>
											</div>
										</div>
									</div>
									{/* <!-- =============== --> */}
			
									<h6 className="card_title">
										<a className="color_black"
											href="/Item-details.html">
											Liquid Forest Princess
										</a>
									</h6>
									<div className="hr"></div>
									<div className="card_footer justify-content-between">
										<div className="creators">
											<div className="avatars space-x-3">
												<div className="-space-x-20">
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_1.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
													<a href="Profile.html">
														<img
															src="assets/img/avatars/avatar_2.png"
															alt="Avatar" className="avatar
															avatar-sm"/>
													</a>
												</div>
												<a href="Profile.html">
													<p className="avatars_name txt_sm
														color_black"> @deon _ellis
													</p>
												</a>
											</div>
										</div>
										<a href="#" className="space-x-3">
											<p className="color_green txt_sm">0.075 ETH</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-20 d-flex justify-content-center">
							<a href="" className="btn btn-primary btn-sm"> view all</a>
						</div>
					</div>
			
				</div>
			</div>
        </>
    )
}

export default RecentNfts