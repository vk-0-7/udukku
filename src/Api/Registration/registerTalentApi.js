import axios from "axios";
import uploadToCloud from "../../New/Utility/uploadToCloud";

const registerTalentApi = async (data) => {
	try {
		const res = await uploadToCloud(data.avatar);

		console.log("value to update is : ", data);

		return axios.patch(
			process.env.REACT_APP_BASE_URL + `/user/update-user-by-id/${data.id}`,
			{
				name: data.name,
				userName: data.username,
				mobile: data.wa_number,
				city: data.city,
				state: data.state,
				description: data.description,
				genres: data.genre,
				terms: data.term,
				socialMedia: data.social_media,
				services: data.categories,
				gearHighLights: data.gear,
				work: data.work,
				isProfileCompleted: true,
				avatar: res.secure_url,
				role: "Talent",
			}
		);
	} catch (error) {
		console.log("something went wrong in registration");
	}
};

export default registerTalentApi;
