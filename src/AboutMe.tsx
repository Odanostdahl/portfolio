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
                        Kristiania. Beyond academics, I’m passionate about creating a more inclusive tech environment. I actively
                        contribute to this through my role as co-leader on the board of Kvinner&IT💓
                    </Text>
                </Box>
                <Box>
                    <Image src={profilePicture} borderRadius="full" boxSize="300px" objectFit="cover" />
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
                                transition="transform 0.3s ease"
                                _hover={{ transform: "scale(1.1)" }}
                            >
                                <Image src={lang.src} boxSize="80px" mx="auto" />
                                <Text mt={2} opacity={0} transition="opacity 0.3s ease" _hover={{ opacity: 1 }}>{lang.label}</Text>
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
                                transition="transform 0.3s ease"
                                _hover={{ transform: "scale(1.1)" }}
                            >
                                <Image src={skill.src} boxSize="80px" mx="auto" />
                                <Text mt={2} opacity={0} transition="opacity 0.3s ease" _hover={{ opacity: 1 }}>{skill.label}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Section>

            <Box
                as="section"
                bg="lightpink"
                color="black"
                textAlign="center"
                pt={20}
                pb={0}
                position="relative"
            >
                <Heading size="lg" mb={2}>Høyskolen Kristiania</Heading>
                <Text>Bachelor i informasjonsteknologi – programmering</Text>
                <Text>2023–2026</Text>

                <Box w="100%" overflow="hidden" lineHeight={0} mb="0" mt="0">
                    <svg
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        width="100%"
                        height="40%"
                        style={{ display: 'block', marginBottom: "-1px"}}
                    >
                        <path
                            fill="white"
                            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,245.3C960,245,1056,235,1152,224C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
                <Heading size="lg" mb={1}>Volunteering</Heading>
                <Text>Kvinner&IT</Text>
                <Text>JavaZone</Text>
                <Text>Girl tech fest</Text>
            </Box>

        </>
    );
}

export default AboutMe;