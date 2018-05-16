import React from 'react';

const tableComponent = props =>{

	let summary = props.summary;
	return(<div>
          	<table>
          		<thead>
                         <tr>
               			<th> Joke </th>
               			<th> Reaction </th>
                         </tr>
          		</thead>
          		<tbody>
          		{	summary.map( (joke, index)=>{
          				return(	<tr key={index}>
		      						<td> { joke.joke } </td>
		      						<td> { joke.funny === true ? "funny" : (joke.funny === false ? "not funny" : "--")} </td>
          						</tr>)
          				})
          		}	
          		</tbody>
          	</table>
        </div>)
}

export default tableComponent;