import React, { useState } from "react";
import { useTheme } from "styled-components";
import { ThemeContainer, ThemeLogo, Elements } from "./ThemeButtonStyledComponent";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const ThemeButton = ({ onClick }) => {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useTheme();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);  // Bascule le mode
        if (onClick) onClick();  // Appelle le parent (optionnel)
    };

    return (
        <ThemeContainer>
            <ThemeLogo onClick={toggleDarkMode} theme={theme}>
                <Elements>
                    {darkMode ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
                </Elements>
            </ThemeLogo>
        </ThemeContainer>
    );
};

export default ThemeButton;
