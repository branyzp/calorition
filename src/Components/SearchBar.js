import React from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SearchBar = () => {
	return (
		<form>
			<input type="text" placeholder="Search a food!" />
			<Button
				endIcon={<SendIcon />}
				onClick={() => alert('Yello')}
				variant="outlined"
			>
				Submit
			</Button>
		</form>
	);
};

export default SearchBar;
