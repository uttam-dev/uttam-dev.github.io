import { useState, useEffect } from 'react';
export const ScrambleName = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval = null;
        const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        if (isHovering) {
            let iteration = 0;
            interval = setInterval(() => {
                setDisplayText(
                    text.split("")
                        .map((letter, index) => {
                            if (index < iteration) return text[index];
                            if (text[index] === ' ') return ' ';
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );
                if (iteration >= text.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 40);
        } else {
            setDisplayText(text);
        }

        return () => clearInterval(interval);
    }, [isHovering, text]);

    return (
        <span
            className="inline-block cursor-crosshair relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <span className="group-hover:text-white transition-colors duration-300">
                {displayText}
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-(--color-text-primary) origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
        </span>
    );
};