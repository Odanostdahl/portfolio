import {
    Box,
    Heading,
    Text,
    Flex,
    Link,
    Icon,
    VStack,
    HStack
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Connect() {
    return (
        <Box p={8} minH="100vh" maxW="800px" mx="auto">
            <Box textAlign="center" mb={12}>
                <Heading 
                    size="2xl" 
                    mb={4}
                    color="#2c3e50"
                    fontFamily="'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
                >
                    Let's Connect
                </Heading>
                <Text fontSize="lg" color="#6c757d">
                    I'm always interested in new opportunities and collaborations
                </Text>
            </Box>

            <VStack spacing={8} align="stretch">
                <Box
                    bg="white"
                    borderRadius="12px"
                    border="1px solid #e9ecef"
                    p={8}
                    textAlign="center"
                >
                    <Heading size="lg" mb={4} color="#2c3e50">
                        Get in Touch
                    </Heading>
                    <Text mb={6} color="#6c757d" lineHeight="1.6">
                        Whether you have a project in mind, want to collaborate, or just want to say hello, 
                        I'd love to hear from you!
                    </Text>
                    
                    <HStack spacing={6} justify="center">
                        <Link
                            href="https://www.linkedin.com/in/oda-nøstdahl-138623297"
                            target="_blank"
                            rel="noopener noreferrer"
                            _hover={{ transform: "scale(1.1)" }}
                            transition="transform 0.2s ease"
                        >
                            <Flex
                                direction="column"
                                align="center"
                                p={4}
                                borderRadius="8px"
                                border="1px solid #fbbf24"
                                bg="transparent"
                                _hover={{
                                    bg: "#fbbf24",
                                    color: "white"
                                }}
                                transition="all 0.2s ease"
                                minW="120px"
                            >
                                <Icon as={FaLinkedin} boxSize={6} mb={2} />
                                <Text fontSize="sm" fontWeight="500">LinkedIn</Text>
                            </Flex>
                        </Link>

                        <Link
                            href="https://github.com/Odanostdahl"
                            target="_blank"
                            rel="noopener noreferrer"
                            _hover={{ transform: "scale(1.1)" }}
                            transition="transform 0.2s ease"
                        >
                            <Flex
                                direction="column"
                                align="center"
                                p={4}
                                borderRadius="8px"
                                border="1px solid #fbbf24"
                                bg="transparent"
                                _hover={{
                                    bg: "#fbbf24",
                                    color: "white"
                                }}
                                transition="all 0.2s ease"
                                minW="120px"
                            >
                                <Icon as={FaGithub} boxSize={6} mb={2} />
                                <Text fontSize="sm" fontWeight="500">GitHub</Text>
                            </Flex>
                        </Link>

                        <Link
                            href="mailto:oda.nostdahl@gmail.com"
                            _hover={{ transform: "scale(1.1)" }}
                            transition="transform 0.2s ease"
                        >
                            <Flex
                                direction="column"
                                align="center"
                                p={4}
                                borderRadius="8px"
                                border="1px solid #fbbf24"
                                bg="transparent"
                                _hover={{
                                    bg: "#fbbf24",
                                    color: "white"
                                }}
                                transition="all 0.2s ease"
                                minW="120px"
                            >
                                <Icon as={FaEnvelope} boxSize={6} mb={2} />
                                <Text fontSize="sm" fontWeight="500">Email</Text>
                            </Flex>
                        </Link>
                    </HStack>
                </Box>

                <Box
                    bg="white"
                    borderRadius="12px"
                    border="1px solid #e9ecef"
                    p={8}
                    textAlign="center"
                >
                    <Heading size="md" mb={4} color="#2c3e50">
                        About Me
                    </Heading>
                    <Text color="#6c757d" lineHeight="1.6">
                        I'm currently in my third year of a Bachelor's degree in programming at Kristiania. 
                        Beyond academics, I'm passionate about creating a more inclusive tech environment 
                        through my role as co-leader on the board of Kvinner&IT.
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}

export default Connect;
