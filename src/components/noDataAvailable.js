import React from 'react';

const noDataAvailable = props =>{

	return(
		<div className="nodata-layout">
			<b> { props.message } </b>
		</div>)
};

export default noDataAvailable;