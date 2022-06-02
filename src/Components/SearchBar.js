import React from 'react';


const SearchBar = (handleClick) => {
	return (
		<form className="searchForm">
			<input type="text" placeholder="Search a food!" />
			{/* <Button endIcon={<SendIcon />} onClick={handleClick} variant="outlined">
				Submit
			</Button> */}
		</form>
	);
};

export default SearchBar;
