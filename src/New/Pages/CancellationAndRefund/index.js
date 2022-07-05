import { Box, Text } from '@chakra-ui/react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';

const CancellationAndRefund = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Box mt='112px'>
			<NavBar />
			<Box px={{ base: '7vw', lg: '13.54vw' }} py='80px'>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'2.29vw'}>
					Cancellation & Refund Policy
				</Text>
				<Text fontFamily={'Gilroy-Medium'} fontSize={'1.04vw'}>
					Thanks for using UDUKKU! If you are not entirely satisfied
					with your orders, we are here to help.
				</Text>
				<Box>
					<Text
						mt='52px'
						fontFamily={'Gilroy-Bold'}
						fontSize='1.66vw'
					>
						1. Cancellations
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						1.1. Musicians must fulfill their orders and may not
						cancel orders on a regular basis or without cause.
						Cancelling orders will affect Musician’s reputation and
						performance status.
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						1.2. Musicians are responsible for processing all
						Customers’ cancellations, refunds and/or any Musicians’
						service price adjustments.
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						1.3. Subject to the deliverables and timeline agreed
						between the Customer and the musician, the Customer’s
						eligibility for a refund after cancellation is as
						follows:
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						i. In the event the Customer cancels after 30% of the
						days, the Customer will be eligible for a full refund;
						ii. In the event the Customer cancels after 50% of the
						days, the Customer will be eligible for 50% refund; iii.
						In the event the Customer cancels at 70% of the days,
						the Customer will be eligible for a 30% refund. iv. In
						the event the Customer cancels any time after 70% of the
						days, the Customer shall not be eligible for any refund.
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						1.4. We reserve the right to refuse or cancel an Order
						at any time for certain reasons including but not
						limited to:
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						• Musician’s Services availability • Errors in the
						description or prices for Musician’s Services • Errors
						in the customer’s Order
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						1.5. We reserve the right to refuse or cancel an Order
						if fraud or an unauthorized or illegal transaction is
						suspected.
					</Text>
				</Box>

				<Box>
					<Text
						mt='52px'
						fontFamily={'Gilroy-Bold'}
						fontSize='1.66vw'
					>
						2. Refunds
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						2.1. Customers have an obligation to make payments
						carefully and to ensure that they really intend to use
						the Musician’s services. We discourage a change of mind
						as a ground for requesting a refund.
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						2.2. In the event a Customer cancels the project midway,
						then the Customer must consent in writing to never use
						the project for any purpose whatsoever. Accordingly,
						Customers lose their right(s) to use the project when
						they cancel the projects.
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						2.3. Musicians determine whether a Customer is due a
						refund (e.g., via a refund to the Customer’s credit
						card, debit card or other form of original payment) the
						Musicians will notify the Company and include other
						related information requested by the Company.
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						2.4. For cash refunds the Company will provide the
						refund to the Customer via the Customer’s original
						payment method (e.g., credit or debit card) if possible.
						2.5. If the Company makes a cash refund to a Customer,
						the Company, in its sole discretion, will obtain a
						refund of the payment received by the Musician for such
						services either (i) via offset of any amounts payable by
						the Company to the Musician or (ii) by billing Musician
						for such amounts.
					</Text>
				</Box>
				<Box>
					<Text
						mt='52px'
						fontFamily={'Gilroy-Bold'}
						fontSize='1.66vw'
					>
						3. Notification
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						3.1. If you need a refund, please submit your notice of
						refund to the following contact:
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						[Enter Contact/Email]
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						3.2. Upon receiving your notice, an email notification
						will be sent to you.
					</Text>
				</Box>
				<Box>
					<Text
						mt='52px'
						fontFamily={'Gilroy-Bold'}
						fontSize='1.66vw'
					>
						4. Refund
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						during resolution of claims You may not be eligible for
						refund in respect of any Service pending the resolution
						of a claim for a refund.
					</Text>
				</Box>
				<Box>
					<Text
						mt='52px'
						fontFamily={'Gilroy-Bold'}
						fontSize='1.66vw'
					>
						5. Contact Us
					</Text>
					<Text
						mt='16px'
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
					>
						For any questions or comments regarding this Shipping,
						Returns, and Refund Policy, the Product Provider may be
						reached at the following contact point(s):
					</Text>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
};

export default CancellationAndRefund;
