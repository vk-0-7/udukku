import React, { useEffect, useState } from 'react';
import { Switch, Tabs } from 'antd';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Navigation/Header';
import card from '../Images/card-3.jpg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getallreponses, getJobById, getMyResponses } from '../Functions/job';
import { Link } from 'react-router-dom';
import { getChatroomsById, getUserInfoById } from '../Functions/user';
import { LoadingOutlined } from '@ant-design/icons/lib/icons';

const { TabPane } = Tabs;
const Messages = () => {
	const { user } = useSelector((state) => ({ ...state }));
	const [responses, setResponses] = useState([]);
	const [myResponses, setMyResponses] = useState([]);
	const [chatrooms, setChatrooms] = useState([]);
	const [jobs, setJobs] = useState([]);
	const [attachments, setAttachments] = useState([]);
	const [loading, setLoading] = useState(false);
	const onChange = (checked) => {
		console.log(`switch to ${checked}`);
	};
	// const getchatRooms = () => {
	//   axios
	//     .get("https://udukku.herokuapp.com/chatroom")
	//     .then((res) => {
	//       setChatrooms(res.data);
	//     })
	//     .catch((err) => {
	//       console.log(err);
	//     });
	// };
	const getAllChatRoomsById = () => {
		if (user != null) {
			getChatroomsById(user.userId)
				.then((res) => {
					setChatrooms(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log('hello');
		}
	};
	useEffect(() => {
		if (user != null) {
			if (user.isMusician === 'Recruter') {
				getResponses();
			} else {
				allMyResponses();
			}
		}
		getAllChatRoomsById();
	}, [user]);

	const getResponses = () => {
		debugger;
		if (user != null) {
			setLoading(true);
			getallreponses(user.token)
				.then((res) => {
					setResponses(res.data.sendJobs);
					res.data.sendJobs.map((r) => {
						getJobById(r.jobId)
							.then((res) => {
								setJobs((oldArr) => [...oldArr, res.data]);
							})
							.catch((err) => console.log(err));
					});
				})
				.catch((err) => console.log(err));
			setLoading(false);
		}
	};

	const allMyResponses = () => {
		if (user != null) {
			getMyResponses(user.token)
				.then((res) => {
					console.log(res);
					setMyResponses(res.data);
					res.data.map((r) => {
						getJobById(r.jobId)
							.then((res) => {
								if (res.data != null) {
									setJobs((oldArr) => [...oldArr, res.data]);
								}
							})
							.catch((err) => console.log(err));
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	const OperationsSlot = {
		right: (
			<div style={{ display: 'flex' }}>
				<p style={{ marginLeft: 'auto' }}>
					Service Provider{' '}
					<Switch defaultChecked onChange={onChange} /> Client
				</p>
				<a href='#' style={{ marginLeft: '15px' }}>
					All
				</a>
			</div>
		),
	};

	const handleAttachment = (id) => {
		console.log(id);
		setLoading(true);
		axios
			.post(
				'https://udukku.herokuapp.com/chatroom/get-attachments-by-id',
				{ chatroomId: id }
			)
			.then((res) => {
				console.log(res);
				setAttachments(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	const handleDownload = (fileName, url) => {
		// var element = document.createElement('a');
		// element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(url));
		// element.setAttribute('download', fileName);
		// document.body.appendChild(element);
		// element.click();
		window.open(url);
		//document.body.removeChild(element);
	};
	return (
		<>
			<Header />
			<div
				className='container-fluid mt-5 mb-5'
				style={{ paddingLeft: '10%', paddingRight: '10%' }}
			>
				<h4>Messages</h4>
				<Tabs defaultActiveKey='1'>
					<TabPane tab='Active' key='1'>
						{responses !== undefined && responses.length != 0
							? responses.map((response, index) =>
									response.status === 'active' &&
									jobs.length != 0 &&
									jobs[index] !== undefined ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs[index]
																.jobPostedBy
																.avatar
														}
														className='card-im-top mt-3 ml-3'
														style={{
															width: '50%',
															height: '90px',
															borderRadius: '50%',
														}}
														alt=''
													/>
												</div>
												<p className='text-center'>
													{jobs.length != 0 &&
													jobs[index] !== undefined
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${response.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0 &&
															jobs[index] !==
																undefined
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0 &&
													jobs[index] !== undefined
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0 &&
													jobs[index] !== undefined
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0 &&
													jobs[index] !== undefined
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0 &&
														jobs[index] !==
															undefined
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
						{myResponses !== undefined && myResponses.length != 0
							? myResponses.map((myResponse, index) =>
									myResponse.status === 'active' ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs.length != 0
																? jobs[index]
																		.jobPostedBy
																		.avatar
																: ''
														}
														className='prof-pic card-img-top mt-3 ml-3'
														alt='profile pic'
													/>
												</div>
												<p className='text-center mls-3'>
													{jobs.length != 0
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${myResponse.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'
												>
													<div class='modal-dialog modal-lg'>
														<div class='modal-content'>
															<div className='modal-header'>
																<h4>
																	Attachments
																</h4>
															</div>
															<div className='modal-body'>
																{loading ? (
																	<LoadingOutlined />
																) : (
																	<table
																		style={{
																			width: '100%',
																		}}
																	>
																		<thead>
																			<tr
																				style={{
																					borderBottom:
																						'1px solid',
																				}}
																			>
																				<th>
																					FileName
																				</th>
																				<th>
																					Date
																				</th>
																				<th></th>
																			</tr>
																		</thead>
																		<tbody>
																			{attachments.map(
																				(
																					a,
																					index
																				) => (
																					<tr
																						key={
																							index
																						}
																						style={{
																							borderBottom:
																								'1px solid #ccc',
																							lineHeight:
																								'3.5rem',
																						}}
																					>
																						<td>
																							{
																								a.attachmentName
																							}
																						</td>
																						<td>
																							{new Date(
																								a.createdAt
																							).toLocaleDateString()}
																						</td>
																						<td>
																							<i
																								className='fa fa-download'
																								onClick={() =>
																									handleDownload(
																										a.attachmentName,
																										a.attachmentUrl
																									)
																								}
																							></i>
																						</td>
																					</tr>
																				)
																			)}
																		</tbody>
																	</table>
																)}
															</div>
														</div>
													</div>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
													onClick={() =>
														handleAttachment(
															chatrooms[index]._id
														)
													}
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
					</TabPane>
					<TabPane tab='Exploring' key='2'>
						{responses !== undefined && responses.length != 0
							? responses.map((response, index) =>
									response.status === 'exploring' ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs.length != 0
																? jobs[index]
																		.jobPostedBy
																		.avatar
																: ''
														}
														className='card-im-top mt-3 ml-3'
														style={{
															width: '50%',
															height: '90px',
															borderRadius: '50%',
														}}
														alt=''
													/>
												</div>
												<p className='text-center'>
													{jobs.length != 0
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${response.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
						{myResponses !== undefined && myResponses.length != 0
							? myResponses.map((myResponse, index) =>
									myResponse.status === 'exploring' ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs.length != 0
																? jobs[index]
																		.jobPostedBy
																		.avatar
																: ''
														}
														className='prof-pic card-img-top mt-3 ml-3'
														alt='profile pic'
													/>
												</div>
												<p className='text-center mls-3'>
													{jobs.length != 0
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${myResponse.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'
												>
													<div class='modal-dialog modal-lg'>
														<div class='modal-content'>
															<div className='modal-header'>
																<h4>
																	Attachments
																</h4>
															</div>
															<div className='modal-body'>
																{loading ? (
																	<LoadingOutlined />
																) : (
																	<table
																		style={{
																			width: '100%',
																		}}
																	>
																		<thead>
																			<tr
																				style={{
																					borderBottom:
																						'1px solid',
																				}}
																			>
																				<th>
																					FileName
																				</th>
																				<th>
																					Date
																				</th>
																				<th></th>
																			</tr>
																		</thead>
																		<tbody>
																			{attachments.map(
																				(
																					a,
																					index
																				) => (
																					<tr
																						key={
																							index
																						}
																						style={{
																							borderBottom:
																								'1px solid #ccc',
																							lineHeight:
																								'3.5rem',
																						}}
																					>
																						<td>
																							{
																								a.attachmentName
																							}
																						</td>
																						<td>
																							{new Date(
																								a.createdAt
																							).toLocaleDateString()}
																						</td>
																						<td>
																							<i
																								className='fa fa-download'
																								onClick={() =>
																									handleDownload(
																										a.attachmentName,
																										a.attachmentUrl
																									)
																								}
																							></i>
																						</td>
																					</tr>
																				)
																			)}
																		</tbody>
																	</table>
																)}
															</div>
														</div>
													</div>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
													onClick={() =>
														handleAttachment(
															chatrooms[index]._id
														)
													}
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
					</TabPane>
					<TabPane tab='Explored' key='3'>
						{responses !== undefined && responses.length != 0
							? responses.map((response, index) =>
									response.status === 'explored' ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs.length != 0
																? jobs[index]
																		.jobPostedBy
																		.avatar
																: ''
														}
														className='card-im-top mt-3 ml-3'
														style={{
															width: '50%',
															height: '90px',
															borderRadius: '50%',
														}}
														alt=''
													/>
												</div>
												<p className='text-center'>
													{jobs.length != 0
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${response.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
						{myResponses !== undefined && myResponses.length != 0
							? myResponses.map((myResponse, index) =>
									myResponse.status === 'explored' ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs.length != 0
																? jobs[index]
																		.jobPostedBy
																		.avatar
																: ''
														}
														className='prof-pic card-img-top mt-3 ml-3'
														alt='profile pic'
													/>
												</div>
												<p className='text-center mls-3'>
													{jobs.length != 0
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${myResponse.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'
												>
													<div class='modal-dialog modal-lg'>
														<div class='modal-content'>
															<div className='modal-header'>
																<h4>
																	Attachments
																</h4>
															</div>
															<div className='modal-body'>
																{loading ? (
																	<LoadingOutlined />
																) : (
																	<table
																		style={{
																			width: '100%',
																		}}
																	>
																		<thead>
																			<tr
																				style={{
																					borderBottom:
																						'1px solid',
																				}}
																			>
																				<th>
																					FileName
																				</th>
																				<th>
																					Date
																				</th>
																				<th></th>
																			</tr>
																		</thead>
																		<tbody>
																			{attachments.map(
																				(
																					a,
																					index
																				) => (
																					<tr
																						key={
																							index
																						}
																						style={{
																							borderBottom:
																								'1px solid #ccc',
																							lineHeight:
																								'3.5rem',
																						}}
																					>
																						<td>
																							{
																								a.attachmentName
																							}
																						</td>
																						<td>
																							{new Date(
																								a.createdAt
																							).toLocaleDateString()}
																						</td>
																						<td>
																							<i
																								className='fa fa-download'
																								onClick={() =>
																									handleDownload(
																										a.attachmentName,
																										a.attachmentUrl
																									)
																								}
																							></i>
																						</td>
																					</tr>
																				)
																			)}
																		</tbody>
																	</table>
																)}
															</div>
														</div>
													</div>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
													onClick={() =>
														handleAttachment(
															chatrooms[index]._id
														)
													}
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
					</TabPane>

					<TabPane tab='Completed' key='4'>
						{responses !== undefined && responses.length != 0
							? responses.map((response, index) =>
									response.status === 'completed' ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs.length != 0
																? jobs[index]
																		.jobPostedBy
																		.avatar
																: ''
														}
														className='card-im-top mt-3 ml-3'
														style={{
															width: '50%',
															height: '90px',
															borderRadius: '50%',
														}}
														alt=''
													/>
												</div>
												<p className='text-center'>
													{jobs.length != 0
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${response.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
						{myResponses !== undefined && myResponses.length != 0
							? myResponses.map((myResponse, index) =>
									myResponse.status === 'completed' ? (
										<div
											key={index}
											className='card mt-3'
											style={{ borderRadius: '12px' }}
										>
											<div style={{ width: '15%' }}>
												<div className='d-flex justify-content-center'>
													<img
														src={
															jobs.length != 0
																? jobs[index]
																		.jobPostedBy
																		.avatar
																: ''
														}
														className='prof-pic card-img-top mt-3 ml-3'
														alt='profile pic'
													/>
												</div>
												<p className='text-center mls-3'>
													{jobs.length != 0
														? jobs[index]
																.jobPostedBy
																.name
														: ''}
												</p>
											</div>
											<div className='card-body'>
												<Link
													to={`/user/message-detail/${chatrooms[index]._id}-${myResponse.jobId}`}
												>
													<p className='card-title'>
														<b>
															{jobs.length != 0
																? jobs[index]
																		.jobTitle
																: ''}
														</b>
													</p>
												</Link>
												<div className='d-flex'>
													{jobs.length != 0
														? jobs[
																index
														  ].genres.map(
																(g, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																		}}
																	>
																		{
																			g.genere
																		}
																	</p>
																)
														  )
														: ''}
													{jobs.length != 0
														? jobs[
																index
														  ].category.map(
																(c, index) => (
																	<p
																		key={
																			index
																		}
																		className='tag-line text-center'
																		style={{
																			marginTop:
																				'4px',
																			padding:
																				'2px 10px',
																			marginRight:
																				'10px',
																			backgroundColor:
																				'#ff6575',
																		}}
																	>
																		{
																			c.service
																		}
																	</p>
																)
														  )
														: ''}
												</div>
												<p>
													DeadLine:{' '}
													{jobs.length != 0
														? jobs[index].deadLine
														: ''}
												</p>
												<div className='col-md-12'>
													<p className='card-text'>
														{jobs.length != 0
															? jobs[index]
																	.description
															: ''}
													</p>
												</div>
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'
												>
													<div class='modal-dialog modal-lg'>
														<div class='modal-content'>
															<div className='modal-header'>
																<h4>
																	Attachments
																</h4>
															</div>
															<div className='modal-body'>
																{loading ? (
																	<LoadingOutlined />
																) : (
																	<table
																		style={{
																			width: '100%',
																		}}
																	>
																		<thead>
																			<tr
																				style={{
																					borderBottom:
																						'1px solid',
																				}}
																			>
																				<th>
																					FileName
																				</th>
																				<th>
																					Date
																				</th>
																				<th></th>
																			</tr>
																		</thead>
																		<tbody>
																			{attachments.map(
																				(
																					a,
																					index
																				) => (
																					<tr
																						key={
																							index
																						}
																						style={{
																							borderBottom:
																								'1px solid #ccc',
																							lineHeight:
																								'3.5rem',
																						}}
																					>
																						<td>
																							{
																								a.attachmentName
																							}
																						</td>
																						<td>
																							{new Date(
																								a.createdAt
																							).toLocaleDateString()}
																						</td>
																						<td>
																							<i
																								className='fa fa-download'
																								onClick={() =>
																									handleDownload(
																										a.attachmentName,
																										a.attachmentUrl
																									)
																								}
																							></i>
																						</td>
																					</tr>
																				)
																			)}
																		</tbody>
																	</table>
																)}
															</div>
														</div>
													</div>
												</div>
												<span
													style={{
														float: 'left',
														cursor: 'pointer',
														marginTop: '10px',
														marginRight: '10px',
														backgroundColor:
															'#0070f3',
														color: '#fff',
														padding: '2px 15px',
														borderRadius: '4px',
													}}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
													onClick={() =>
														handleAttachment(
															chatrooms[index]._id
														)
													}
												>
													Attachments
												</span>
											</div>
										</div>
									) : (
										''
									)
							  )
							: ''}
					</TabPane>
				</Tabs>
			</div>
			<div style={{ marginTop: '20%' }}>
				<Footer />
			</div>
		</>
	);
};

export default Messages;
