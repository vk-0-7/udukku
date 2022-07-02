import { Box, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import activateUser from '../../../Api/Auth/activateUser';
import HomePage from '../Homepage';

const ActivateUser = () => {
	const val = useParams().id;
	const [state, setState] = useState(false);
	const toast = useToast();

	const activate_user = async () => {
		try {
			const res = await activateUser(val);
			console.log('user activation is ', res);
			setState(true);
			toast({
				title: 'Success',
				description: 'Account is activated.',
				status: 'success',
				position: 'top',
				duration: 5000,
				isClosable: true,
			});
		} catch (error) {}
	};

	useEffect(() => {
		activate_user();
	}, []);

	return (
		<>
			<Box
				w='100vw'
				h='100vh'
				position={'fixed'}
				zIndex={100000000}
				bg='rgba(0,0,0,.4)'
				display={state ? 'none' : 'flex'}
				justifyContent='center'
				alignItems={'center'}
			>
				<Spinner color='white' />
			</Box>
			<HomePage />
		</>
	);
};

export default ActivateUser;
