import {
    Box,
    Flex,
    Text,
    Link as ChakraLink,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);
const MotionText = motion(Text);

function Navbar() {
    const initialHeight = 140;
    const finalHeight = 88;
    const thresholdY = 170;

    const { scrollY } = useScroll();
    const animatedHeight = useTransform(
        scrollY,
        [0, initialHeight - finalHeight],
        [initialHeight, finalHeight]
    );

    const [isPastThreshold, setIsPastThreshold] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest: number) =>
            setIsPastThreshold(latest > thresholdY)
        );
    }, [scrollY]);

    return (
        <MotionBox
            as="nav"
            style={{
                height: animatedHeight,
            }}
            bg="rgba(255, 255, 255, 0.95)"
            backdropFilter="blur(10px)"
            borderBottom="1px solid #f3f4f6"
            position="sticky"
            top={0}
            zIndex={1000}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            px={8}
        >
            <Flex justify="space-between" align="center" h="100%">
                {/* Navn vises først ETTER scroll */}
                <MotionText
                    fontSize="2xl"
                    fontWeight="500"
                    color="#2c3e50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                        opacity: isPastThreshold ? 1 : 0,
                        x: isPastThreshold ? 0 : -20,
                    }}
                    transition={{ duration: 0.4 }}
                >
                    ODA NØSTDAHL
                </MotionText>

                {/* Menyvalgene vises alltid */}
                <UnorderedList
                    styleType="none"
                    display="flex"
                    gap="2.5rem"
                    m={0}
                >
                    {[
                        { label: "Home", to: "/" },
                        { label: "About me", to: "/about" },
                        { label: "Portfolio", to: "/portfolio" },
                    ].map((item) => (
                        <ListItem key={item.to}>
                            <ChakraLink
                                as={RouterLink}
                                to={item.to}
                                fontWeight="400"
                                color="#2c3e50"
                                fontSize="md"
                                _hover={{ 
                                    color: "#fbbf24",
                                    textDecoration: "none"
                                }}
                                transition="color 0.2s ease"
                                pr="1.5rem"
                            >
                                {item.label}
                            </ChakraLink>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </MotionBox>
    );
}

export default Navbar;
