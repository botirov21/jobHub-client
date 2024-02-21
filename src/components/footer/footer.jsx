import React from "react";
import { FooterData, FooterWrapper } from "./footerStyle";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterData >
                <div style={{ display: "flex", flex: "2" }}>
                    <ul>
                        cryptojob
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet lorem. </li>
                    </ul>
                </div>
                <div style={{ display: "flex", flex: "1" }}>
                    <ul>
                        Menu Item
                        <li>Menu link</li>
                        <li>Another link</li>
                        <li>Another link</li>
                        <li>Fourth Link</li>
                    </ul>
                </div>{" "}
                <div style={{ display: "flex", flex: "1" }}>
                    <ul>
                        Second item
                        <li>Menu link</li>
                        <li>Another link</li>
                        <li>Another link</li>
                        <li>Fourth Link</li>
                    </ul>
                </div>
                <div style={{ display: "flex", flex: "1" }}>
                    <ul>
                        Third Menu Item
                        <li>Menu link</li>
                        <li>Another link</li>
                        <li>Another link</li>
                        <li>Fourth Link</li>
                    </ul>
                </div>
            </FooterData>
        </FooterWrapper>
    );
};

export default Footer;
