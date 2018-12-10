import React, { Component } from 'react';

const Search = (props) => {
	return (
		<div>
			<form>
				<input className='form-control' id='searchbar' placeholder='Search' onChange={props.update} onKeyPress={props.keydown}/>
			</form>
		</div>
	)
}

export default Search;