import profilePicture from './image/mio.jpeg';
import { Section } from "./animation/Section";
import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    Grid,
    GridItem
} from '@chakra-ui/react';

import java from './image/java.png';
import csharp from './image/Csharp.png';
import javascript from './image/Javascript.png';
import html from './image/html.png';
import python from './image/python.png';
import typescript from './image/typescript.png';
import c from './image/c.png';
import docker from './image/docker.png';
import mongodb from './image/mongodb.png';
import spring from './image/spring.png';
import react from './image/react.png';

function AboutMe() {
    return (
        <>
            <Flex wrap="wrap" justify="center" align="center" gap="10rem" p={8}>
                <Box maxW="40%" textAlign="left">
                    <Heading size="xl" mb={4}>Get to know me</Heading>
                    <Text>
                        Hi, I´m Oda and I´m currently in my second year of a Bachelor's degree in programming at
                        Kristiania. Beyond academics, I'm passionate about creating a more inclusive tech environment. I actively
                        contribute to this through my role as co-leader on the board of Kvinner&IT💓
                    </Text>
                </Box>
                <Box flex="0 0 auto">
                    <Image 
                        src={profilePicture} 
                        borderRadius="full" 
                        boxSize="300px" 
                        objectFit="cover"
                    />
                </Box>
            </Flex>

            <Section direction="up">
                <Box textAlign="center" p={4}>
                    <Heading size="xl">SKILLS</Heading>
                    <Heading size="md" mt={4}>Coding Languages</Heading>
                    <Grid templateColumns="repeat(auto-fit, minmax(140px, 1fr))" gap={6} mt={4} px={4}>
                        {[{ src: java, label: 'Java' }, { src: csharp, label: 'C#' }, { src: javascript, label: 'JavaScript' },
                            { src: typescript, label: 'Typescript' }, { src: python, label: 'Python' }, { src: html, label: 'HTML/CSS' },
                            { src: c, label: 'C' }].map((lang, index) => (
                            <GridItem
                                key={index}
                                textAlign="center"
                                transition="all 0.3s ease"
                                _hover={{ 
                                    transform: "scale(1.1)",
                                    "& .skill-text": { opacity: 1 }
                                }}
                            >
                                <Image src={lang.src} boxSize="80px" mx="auto" />
                                <Text className="skill-text" mt={2} opacity={0} transition="opacity 0.3s ease">{lang.label}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Section>

            <Section direction="up">
                <Box textAlign="center" p={4}>
                    <Heading size="md">Other</Heading>
                    <Grid templateColumns="repeat(auto-fit, minmax(140px, 1fr))" gap={6} mt={4} px={4} maxW="60%" mx="auto">
                        {[{ src: docker, label: 'Docker' }, { src: mongodb, label: 'MongoDB' },
                            { src: react, label: 'React' }, { src: spring, label: 'Spring boot' }].map((skill, index) => (
                            <GridItem
                                key={index}
                                textAlign="center"
                                transition="all 0.3s ease"
                                _hover={{ 
                                    transform: "scale(1.1)",
                                    "& .skill-text": { opacity: 1 }
                                }}
                            >
                                <Image src={skill.src} boxSize="80px" mx="auto" />
                                <Text className="skill-text" mt={2} opacity={0} transition="opacity 0.3s ease">{skill.label}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Section>

            <Box
                as="section"
                bg="#fef3c7"
                color="black"
                textAlign="center"
                pt={20}
                pb={0}
                position="relative"
            >
                <Heading size="lg" mb={2}>Kristiania University College</Heading>
                <Text>Bachelor in Information Technology – Programming</Text>
                <Text>2023–2026</Text>

                <Box w="100%" overflow="hidden" lineHeight={0} mb="0" mt="0">
                    <svg
                        viewBox="0 0 1440 400"
                        preserveAspectRatio="none"
                        width="100%"
                        height="150px"
                        style={{ display: 'block', marginBottom: "-1px"}}
                    >
                        <path
                            fill="white"
                            d="M0,300L30,280C60,260,120,220,180,200C240,180,300,180,360,200C420,220,480,260,540,280C600,300,660,300,720,280C780,260,840,220,900,200C960,180,1020,180,1080,200C1140,220,1200,260,1260,280C1320,300,1380,300,1410,300L1440,300L1440,400L1410,400C1380,400,1320,400,1260,400C1200,400,1140,400,1080,400C1020,400,960,400,900,400C840,400,780,400,720,400C660,400,600,400,540,400C480,400,420,400,360,400C300,400,240,400,180,400C120,400,60,400,30,400L0,400Z"
                        />
                    </svg>
                </Box>

            </Box>


            <Box
                as="section"
                bg="white"
                color="black"
                textAlign="center"
                pt={0}
                pb={20}
            >
                <Heading size="lg" mb={4}>Volunteering</Heading>
                <Text fontSize="md" color="#6c757d" mb={2}>Kvinner&IT - Co-leader</Text>
                <Text fontSize="md" color="#6c757d" mb={2}>JavaZone - Volunteer</Text>
                <Text fontSize="md" color="#6c757d">Girl Tech Fest - Mentor</Text>
            </Box>

        </>
    );
}

export default AboutMe;