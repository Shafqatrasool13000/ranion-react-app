import React from 'react'

const GlobalCommunity = () => {
    return (
        <>
        <div className="container">
				<div className="community">
					<div className="section__head space-y-20">
						<h3 className="section__title text-center">Global community</h3>
						<p className="section__text text-center"> Learn more about raroin, chat
							with the team,
							other people in the community, and express your opinion on the
							future development of raroin. </p>
					</div>
			
					<div className="community__items">
						<div className="row justify-content-center mb-20_reset">
							<div className="col-md-3">
								<div className="item space-y-10">
									<div className="logo">
										<img src="assets/img/icons/github.svg"
											alt="logo_community"/>
									</div>
									<h5 className="text-center">Github</h5>
									<p className="text-center">Understand the progress of our
										code and project</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="item space-y-10">
									<div className="logo is_twitter">
										<img src="assets/img/icons/twitter.svg"
											alt="logo_community"/>
									</div>
									<h5 className="text-center">Twitter</h5>
									<p className="text-center">Understand the progress of our
										code and project</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="item space-y-10">
									<div className="logo is_discord">
										<img src="assets/img/icons/discord.svg"
											alt="logo_community"/>
									</div>
									<h5 className="text-center">Discord</h5>
									<p className="text-center">Understand the progress of our
										code and project</p>
								</div>
							</div>
			
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default GlobalCommunity