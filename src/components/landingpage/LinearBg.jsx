import { Box } from '@mui/material';
import React from 'react';

const LinearBg = () => {
	return (
		<Box
			id="hero"
			sx={theme => ({
				width: '100%',
				height: '90%',
				zIndex: '0',
                pointerEvents:'none',
				position: 'absolute',
				backgroundImage:
					theme.palette.mode === 'light'
						? 'linear-gradient(180deg, #CEE5FD, #FFF)'
						: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
				backgroundSize: '100% 20%',
				backgroundRepeat: 'no-repeat',
			})}
		></Box>
	);
};

export default LinearBg;
