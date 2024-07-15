import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Image,
  Text,
  Button,
  FormControl,
  Input,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer({ slideotwo }: { slideotwo: any }) {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
  };
  return (
    <Box
      w={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      pt={["50px", "100px"]}
    >
      <SimpleGrid
        columns={2}
        w={"full"}
        px={{ lg: "140px", md: "20px", base: "10px" }}
      >
        <GridItem colSpan={1}>
          <HStack gap={"1px"} mb={["30px", "50px"]}>
            <Image
              height="12px"
              width="10px"
              objectFit="cover"
              src="/image/logoblack.svg"
              alt="Bebo"
            />
            <Box height="13px" width="32px">
              <Image src="/image/beboblack.svg" alt="Bebo" />
            </Box>
          </HStack>
          <Box mb={{base:"15px", lg:"58px", md: "30px"}}>
            <Text fontWeight={"600"} fontSize={{base:"10px", lg:"20px", md: "16px"}}>
              Join our waitlist to be among our first users
            </Text>
          </Box>
          <SimpleGrid
            columns={{ base: 1, lg: 2, md: 1 }}
            w={"full"}
            gap={"20px"}
          >
            <GridItem colSpan={1} w={{base:"80%", lg:"full", md: "80%"}}>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  //   bg={"#06795D1A"}
                  rounded={"20px"}
                  boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                  border={"none"}
                  size={["sm", "md"]}
                />
              </FormControl>
            </GridItem>
            <GridItem
              colSpan={[1, 1]}
              w={"full"}
              display={"flex"}
              justifyContent={"start"}
            >
              <Button
                onClick={handleSubmit}
                w={["60%", "50%"]}
                size={["sm", "md"]}
                bg={"#0CBF94"}
                rounded={"20px"}
                boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                border={"none"}
              >
                Join waitlist
              </Button>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={1} w={"full"} mb={"50px"}>
          <VStack w={"full"}>
            <HStack gap="26px" w={"full"}>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={["9px", "14px"]}
                    color={"black"}
                  >
                    Sell crypto
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={["9px", "14px"]}
                    color={"black"}
                  >
                    Buy crypto
                  </Text>
                </Link>
              </Box>
              <Box
                cursor={"pointer"}
                onClick={() => {
                  slideotwo.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Text
                  fontWeight={"600"}
                  fontSize={["9px", "14px"]}
                  color={"black"}
                >
                  FAQS
                </Text>
              </Box>
            </HStack>
            <Box w={"full"}>
              <Text fontSize={["9px", "14px"]} fontWeight={"300"}>
                At BEBO, we empower you to seamlessly convert your
                cryptocurrencies into Naira,providing a secure and efficient
                gateway to navigate the dynamic world of digital assets. Our
                user-friendly platform ensures a hassle-free experience, making
                crypto-to-Naira conversions and transactions swift and reliable.
                Crypto to Naira Exchange: Convert your favorite cryptocurrencies
                such as Bitcoin, Ethereum, Litecoin, and more into Nigerian
                Naira quickly and securely. With our competitive exchange rates
                and transparent fees, you can trust BEBO to handle your
                conversions efficiently.
              </Text>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={2} mb={{base:"10px", lg:"40px", md: "20px"}} w={"full"}>
          <Divider orientation="horizontal" size={"lg"} />
        </GridItem>
        <GridItem colSpan={2} mb={"50px"} w={"full"}>
          <SimpleGrid columns={2}>
            <GridItem colSpan={1}>
              <HStack>
                <Box>
                  <AiOutlineCopyrightCircle />
                </Box>
                <Box>
                  <Text>2024 Bebo.</Text>
                </Box>
              </HStack>
            </GridItem>
            <GridItem
              colSpan={1}
              w={"full"}
              justifyContent={"end"}
              display={['none','block']}
            >
              <HStack  w={"full"}
              justifyContent={"end"} >
                <Link href={"https://www.instagram.com/tradewithbebo?igsh=eTRkcXl3d3R4bmRo"}>
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <FiInstagram />
                </Box>
                </Link>
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <RiTwitterXFill />
                </Box>
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <LuFacebook />
                </Box>
              </HStack>
              </GridItem>
              <GridItem
              colSpan={1}
              w={"full"}
              justifyContent={"end"}
              display={['block','none']}
            >
              <HStack  w={"full"}
              justifyContent={"end"}>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <FiInstagram size={'15px'}/>
                </Box>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <RiTwitterXFill size={'15px'} />
                </Box>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <LuFacebook size={'15px'} />
                </Box>
              </HStack>
             
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
