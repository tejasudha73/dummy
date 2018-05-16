import React from 'react';

const tableComponent = props =>{

	let summary = props.summary;
	let funny = 0, nonFunny = 0, noReaction = 0;
	summary.map( (joke, indes)=>{
		if(joke.funny){
			funny++;
		}else if(joke.funny === false){
			nonFunny++;
		}else{
			noReaction++;
		}
		return joke;
	})
	return(<div>
          		Total : <b> {summary.length} </b>
          		&nbsp;&nbsp;
          		Funny: <b> {funny} </b>
          		&nbsp;&nbsp;
          		Non Funny: <b> {nonFunny} </b>
          		&nbsp;&nbsp;
          		No Reaction: <b> {noReaction} </b>
        	</div>)
}

export default tableComponent;