import React, { Component } from 'react';

const Application = (props) => {
	return (
		<div className='card mt-1 mb-1 text-white bg-secondary'>
			<h2 className='card-header'><a href={props.link} className='applink'>{props.reference}</a></h2>
			<div className='card-body'>
				<p className='card-text'>{props.title}</p>
				<p className='card-text small'>{props.address}</p>
				<div className='d-flex flex-row bl-3 br-3'>
					<div className='b-3'>Received {props.received_date}</div>
					<div className='b-3'>Validated {props.validated_date}</div>
				</div>
			</div>
		</div>
	);
}

export default Application;