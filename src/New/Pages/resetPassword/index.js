import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EnterNewPassword from '../../Components/NavBar/EnterNewPassword';
import HomePage from '../Homepage';

const ResetPassword = () => {
	const [state, setState] = useState(true);
	const val = useParams();

	return (
		<>
			<EnterNewPassword
				state={state}
				changeState={setState}
				code={val.id}
			/>
			<HomePage />
		</>
	);
};

export default ResetPassword;
