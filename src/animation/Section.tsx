import { useRef } from "react";
import { useInView } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import * as React from "react";

type SectionProps = {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
};

export function Section({ children, direction = "up" }: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const getTransform = () => {
        if (isInView) return "none";

        switch (direction) {
            case "left":
                return "translateX(-50px)";
            case "right":
                return "translateX(50px)";
            case "up":
                return "translateY(50px)";
            case "down":
                return "translateY(-50px)";
            default:
                return "translateY(50px)";
        }
    };

    return (
        <chakra.section ref={ref}>
            <chakra.div
                style={{
                    transform: getTransform(),
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s ease-out 1s",
                }}
            >
                {children}
            </chakra.div>
        </chakra.section>
    );
}
