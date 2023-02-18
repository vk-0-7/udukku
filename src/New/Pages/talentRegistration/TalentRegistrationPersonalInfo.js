import { Box, Button, Icon, Input, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { useSelector } from "react-redux";
import { uploadImage } from "../../../Api/Auth/updateUserType";
import updateUserApi from "../../../Api/User/updateUserApi";
import { ReactComponent as Man } from "../../../Assets/Icons/man.svg";

const TalentRegistrationPersonalInfo = ({ data }) => {
  const image_input_ref = useRef();
  const [image_blob_link, set_image_blob_link] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(()=>{
    set_image_blob_link(data.avatar);
  },[data.avatar])
  // const sendAttachment = (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   const fileName = e.target.files[0].name;
  //   axios.post(`${process.env.REACT_APP_BASE_URL}/api/upload_attachment`, formData)
  //     .then((res) => {
  //       const url = res.data.url;
  //       console.log(url);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const handleImageSubmit = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    uploadImage(user.token, formData)
      .then((res) => {
        set_image_blob_link(res.data.secure_url)
        data.set_avatar(res.data.secure_url);
        })
      .catch((err) => {
      });
    // data.set_avatar(e.target.files[0]);
    // set_image_blob_link(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Box mt={{base:"2rem",lg:"4.444vh"}} w={{base:"100%",lg:"36.04vw"}}>
      <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"2rem",lg:"1.45vw"}}>
        Personal Info
      </Text>
      <Text fontFamily={"Gilroy-Medium"} fontSize={{base:"1.5rem",lg:".833vw"}}>
        Let people get to know you better through your artist profile. Be clear,
        detailed, and authentic!
      </Text>
      <Box mt="2.96vh" display={"flex"} alignItems="center" gap="1.25vw">
        {image_blob_link === undefined || image_blob_link === null ? (
          <Box
            w={{base:"10rem",md:"13rem",lg:"7.29vw"}}
            h={{base:"10rem",md:"13rem",lg:"7.29vw"}}
            borderRadius={"full"}
            background="rgba(8, 32, 50, .1)"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Man style={{ width: "5rem", height: "5rem" }} />
          </Box>
        ) : (
          <Box
            w={{base:"10rem",md:"13rem",lg:"7.29vw"}}
            h={{base:"10rem",md:"13rem",lg:"7.29vw"}}
            borderRadius={"full"}
            bgImg={image_blob_link}
            bgSize="cover"
            bgPos="50% 50%"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          ></Box>
        )}
        <Box display={"flex"} flexDir="row" gap="1rem" alignItems={"center"}>
          <Button
            w={{base:"10rem",lg:"9.47vw"}}
            h={{base:"5rem",lg:"6.48vh"}}
            borderRadius={"1.04vw"}
            bg="#F6540E"
            color="#fff"
            fontFamily={"Gilroy-SemiBold"}
            fontSize={{base:"1.2rem",lg:".833vw"}}
            _hover={{ background: "#f6540e" }}
            onClick={() => {
              image_input_ref.current.click();
            }}
          >
            Upload Photo
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              ref={image_input_ref}
              onChange={handleImageSubmit}
            />
          </Button>
          <Button
            w={{base:"10rem",lg:"9.47vw"}}
            h={{base:"5rem",lg:"6.48vh"}}
            borderRadius={"1.04vw"}
            bg=" #F0F0F0"
            fontFamily={"Gilroy-SemiBold"}
            fontSize={{base:"1.2rem",lg:".833vw"}}
          >
            Delete
          </Button>
        </Box>
      </Box>
      <Box mt="2.22vh">
        <Box>
          <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
            Full Name*
          </Text>
          <Input
            h="6.48vh"
            borderRadius={"15px"}
            value={data.fname}
            onChange={(e) => {
              data.set_fname(e.target.value);
            }}
          />
        </Box>
        <Box mt="2.22vh">
          <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
            Username*
          </Text>
          <Input
            borderRadius={"15px"}
            h="6.48vh"
            value={data.username}
            onChange={(e) => {
              data.set_username(e.target.value);
            }}
          />
          {data.check_username_availability ? (
            <Box
              display={"flex"}
              color="red"
              fontSize={".8333vw"}
              alignItems="center"
              gap="5px"
            >
              <Icon as={MdError} />
              <Text>User exist! Try another one</Text>
            </Box>
          ) : (
            <></>
          )}
        </Box>
        <Box mt="2.22vh">
          <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
            Whatsapp Number (Personal Only)*
          </Text>
          <Input
            borderRadius={"15px"}
            h="6.48vh"
            type="number"
            value={data.wa_number}
            onChange={(e) => {
              data.set_wa_number(e.target.value);
            }}
          />
        </Box>
        <Box mt="2.22vh" display={"flex"} gap=".833vw">
          <Box flexGrow={1}>
            <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
              City*
            </Text>
            <Input
            borderRadius={"15px"}
              h="6.48vh"
              type="text"
              value={data.city}
              onChange={(e) => {
                data.set_city(e.target.value);
              }}
            />
          </Box>
          <Box flexGrow={1}>
            <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
              State*
            </Text>
            <Input
            borderRadius={"15px"}
              h="6.48vh"
              type="text"
              value={data.ustate}
              onChange={(e) => {
                data.set_state(e.target.value);
              }}
            />
          </Box>
        </Box>
        <Box mt="2.22vh">
          <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
            Description*
          </Text>
          <Textarea
            borderRadius={"15px"}
            type="text"
            value={data.description}
            onChange={(e) => {
              if (e.target.value.length <= 500) {
                data.set_description(e.target.value);
              }
            }}
          />
          <Box
            fontFamily={"Gilroy-SemiBold"}
            fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}
            display={"flex"}
            justifyContent="space-between"
          >
            <Text>Min 150 Characters</Text>
            <Text>{data.description?.length}/500</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TalentRegistrationPersonalInfo;
