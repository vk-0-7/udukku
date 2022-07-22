import { Box, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import activateUser from '../../../Api/Auth/activateUser';
import HomePage from '../Homepage';
import BecomeOurMember from '../Homepage/becomeOurMember/BecomeOurMember';

const ActivateUser = () => {
	const val = useParams().id;
	const [state, setState] = useState(false);
	const toast = useToast();
	const [loading, setLoading] = useState(true);
	const [become_our_member_modal, set_become_our_member_modal] =
		useState(true);
	const [what, set_what] = useState(null);

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
			set_what(true);
			setLoading(false);
		} catch (error) {
			console.log(error.response);
			toast({
				title: 'Error',
				description:
					'either token is expired or not valid please try again.',
				status: 'error',
				position: 'top',
				duration: 5000,
				isClosable: true,
			});
			set_what(false);
			setLoading(false);
		}
	};

	useEffect(() => {
		activate_user();
	}, []);

	return (
		<>
			{loading ? (
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
			) : what ? (
				<BecomeOurMember
					state={become_our_member_modal}
					changeState={set_become_our_member_modal}
				/>
			) : (
				<></>
			)}
			<HomePage />
		</>
	);
};

export default ActivateUser;
