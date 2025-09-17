import github from './image/github.png'
import { 
    Box, 
    Heading, 
    Text, 
    Grid, 
    Button,
    Image,
    Flex,
    Badge
} from '@chakra-ui/react'

function Portfolio() {

    const projects = [
        {
            title: "PEATA Project",
            description: "An innovative solution for better accessibility and user experience",
            tech: ["React", "TypeScript", "Node.js"],
            github: "https://github.com/amalie246/PEATA"
        },
        {
            title: "Friend Calendar",
            description: "Work in progress:)",
            tech: ["Java", "Spring Boot", "MongoDB"],
            github: "https://github.com/418NotFound/FriendCalendar"
        },
        {
            title: "Personal Portfolio",
            description: "This website! Built with React, TypeScript and Chakra UI",
            tech: ["React", "TypeScript", "Chakra UI"],
            github: "https://github.com/Odanostdahl/portfolio"
        }
    ]

    return (
        <Box p={8} minH="100vh" maxW="1200px" mx="auto">
            <Box textAlign="center" mb={12}>
                <Heading 
                    size="2xl" 
                    mb={4}
                    color="#2c3e50"
                    fontFamily="'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
                >
                    My Projects
                </Heading>
                <Text fontSize="lg" color="#6c757d">
                   
                </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        bg="white"
                        borderRadius="8px"
                        border="1px solid"
                        borderColor="#e9ecef"
                        p={6}
                        h="100%"
                    >
                        <Flex direction="column" h="100%">
                            <Heading size="lg" mb={3} color="#2c3e50">
                                {project.title}
                            </Heading>
                            
                            <Text mb={4} color="#6c757d" flex="1" lineHeight="1.6">
                                {project.description}
                            </Text>
                            
                            <Flex wrap="wrap" gap={2} mb={4}>
                                {project.tech.map((tech, techIndex) => (
                                    <Badge
                                        key={techIndex}
                                        bg="#f8f9fa"
                                        color="#495057"
                                        border="1px solid"
                                        borderColor="#e9ecef"
                                        px={3}
                                        py={1}
                                        borderRadius="4px"
                                        fontSize="xs"
                                        fontWeight="500"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </Flex>
                            
                            <Button
                                as="a"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                bg="transparent"
                                color="#2c3e50"
                                border="1px solid #fbbf24"
                                borderRadius="8px"
                                px={4}
                                py={2}
                                fontSize="sm"
                                fontWeight="400"
                                _hover={{
                                    bg: "#fbbf24",
                                    color: "white",
                                    borderColor: "#f59e0b"
                                }}
                                transition="all 0.2s ease"
                                leftIcon={<Image src={github} alt="GitHub" boxSize="18px" />}
                            >
                                View Code
                            </Button>
                        </Flex>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}

export default Portfolio