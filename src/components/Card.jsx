import React from "react";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import {GoRepoForked} from "react-icons/go"

const Cards = ({ name, language, stargazers_count,forks,owner }) => {
  const IMAGE=owner.avatar_url
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {name}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {language}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Button leftIcon={<AiFillStar />} fontWeight={800} fontSize={"xl"}>
              {stargazers_count}
            </Button>
            <Button leftIcon={<GoRepoForked/>} fontWeight={800} fontSize={"xl"}>
              {forks}
            </Button>

           
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Cards;
