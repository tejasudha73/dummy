import React from 'react';

const jokeContainer = props =>{ 

	return(<div className="content">
				<div className="card">
					<div className="card-content">
					<p className="subtitle">
						{ props.currentJoke && props.currentJoke.joke}
					</p>
				</div>
				<footer className="card-footer">
					<div className={ props.currentJoke && props.currentJoke.funny === true ? "card-footer-item funny" : "card-footer-item "} onClick={()=>{props.reactOnJoke(true, props.currentJoke )}}>
						<span className="icon is-small">
							<i className="fa fa-chain"></i>
						</span>
						<span className="pushquarter--left" >
							Funny
						</span>
					</div>
					<div className={props.currentJoke && props.currentJoke.funny === false ? "card-footer-item not-funny" : "card-footer-item"} onClick={()=>{props.reactOnJoke(false, props.currentJoke )}}>
						<span className="icon is-small">
							<i className="fa fa-twitter"></i>
						</span>
						<span className="pushquarter--left">
							Not Funny
						</span>
					</div>
				</footer>
			</div>
		</div>)
}

export default jokeContainer;