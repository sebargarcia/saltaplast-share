import {
  Container,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const Index = () => {
  return (
    <Container
      bg="#FFFFFF"
      maxW="full"
      mt={0}
      p={4}
      centerContent
      overflow="hidden"
    >
      <Image src="/saltaplast.jpeg" alt="Saltaplast" maxH={250} />
      <Box
        bg="#165FA4"
        color="white"
        borderRadius="lg"
        width={"100%"}
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Box p={4}>
          <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
            <WrapItem>
              <Box>
                <Heading>Saltaplast</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#DCE2FF">
                  Get in touch with us
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack
                    pl={0}
                    spacing={3}
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <a href="https://wa.me/+5493875063178?text=I want to get more info">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<SiWhatsapp color="#FFF" size="20px" />}
                      >
                        +54 387 4232680
                      </Button>
                    </a>

                    <a href="tel:+543874232680">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#FFF" size="20px" />}
                      >
                        +54 387 4232680
                      </Button>
                    </a>

                    <a href="mailto:saltaplast@gmail.com">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#FFF" size="20px" />}
                      >
                        saltaplast@gmail.com
                      </Button>
                    </a>

                    <a href="https://g.page/SaltaPlast?share">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#FFF" size="20px" />}
                      >
                        Salta, Argentina
                      </Button>
                    </a>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
