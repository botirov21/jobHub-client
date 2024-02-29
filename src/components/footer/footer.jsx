import React from "react";
import { FirstColumn, FooterData, FooterWrapper, FourthColumn, SecondColumn, SocialLinks, ThirdColumn } from "./footerStyle";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    return (
        <FooterWrapper>
            <FooterData >
                <FirstColumn>
                    <ul>
                        JobHub
                        <li>An online platform connecting job seekers with
                            employers, streamlining recruitment and fostering career
                            opportunities. It's a centralized hub for efficient, transparent, and
                            convenient hiring interactions</li>
                    </ul>
                </FirstColumn>
                <SecondColumn>
                    <ul>
                        Menu Item
                        <li>Menu link</li>
                        <li>Another link</li>
                        <li>Another link</li>
                        <li>Fourth Link</li>
                    </ul>
                </SecondColumn>
                <ThirdColumn>
                    <ul>
                        Second item
                        <li>Menu link</li>
                        <li>Another link</li>
                        <li>Another link</li>
                        <li>Fourth Link</li>
                    </ul>
                </ThirdColumn>
                <FourthColumn>
                    <ul>
                        Third Menu Item
                        <li>Menu link</li>
                        <li>Another link</li>
                        <li>Another link</li>
                        <li>Fourth Link</li>
                    </ul>
                </FourthColumn>
            </FooterData>
            <SocialLinks>
                <div><p>© 2024 JobHub. All rights reserved</p></div>
                <div> <TwitterIcon /> <FacebookIcon /> <InstagramIcon /> <TelegramIcon /> </div>
            </SocialLinks>
        </FooterWrapper>
    );
};

export default Footer;
