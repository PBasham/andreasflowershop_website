/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
// icons --------------------------------------------------
import { Icon } from "react-icons-kit"
import {ic_phone_android_outline} from 'react-icons-kit/md/ic_phone_android_outline'
import {ic_location_on_outline} from 'react-icons-kit/md/ic_location_on_outline'
import {ic_share_outline} from 'react-icons-kit/md/ic_share_outline'
// icon from Iconify --------------------------------------------------
import { Icon as IconifyIcon } from '@iconify/react';
// styling --------------------------------------------------
import "../../assets/styling/Footer.css"
interface FooterProps {

}

const Footer: FC<FooterProps> = (props: FooterProps) => {
    const { } = props

    return (
        <div id="footer">
            <h3>Follow Us<Icon className="footer-header-icon" icon={ic_share_outline} size={"100%"} /></h3>
            <ul id="footer-list-socials" className="footer-list">
                <li><a href="" target={"_blank"} ><IconifyIcon id="footer-icon-instagram" className="footer-icon" icon="uil:instagram-alt" /></a></li>
                <li><a href="https://www.doordash.com/store/andrea's-flower-shop-queens-23965642/?irclickid=RW8XvZTZ5xyNWvswFFRH42ZPUkAUeRxto0cJRE0" target={"_blank"} ><IconifyIcon id="footer-icon-yelp" className="footer-icon" icon="bi:yelp" /></a></li>
                <li><a href="https://www.google.com/search?q=andreasflowershop&sxsrf=AJOqlzXvMPRg5nm5knZwYd_4B-CQWs-obw%3A1678146593491&ei=IXwGZIzAHYmj5NoPwqeCaA&ved=0ahUKEwjM1Necv8j9AhWJEVkFHcKTAA0Q4dUDCBA&uact=5&oq=andreasflowershop&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQsAIQJzIHCCMQsAIQJzIHCCMQsAIQJzINCC4QDRCABBDHARCvATINCC4QDRCABBDHARCvATIHCAAQDRCABDIGCAAQHhANMgoIABAIEB4QDRAPOgQIIxAnOgoILhDHARCvARBDOgUIABCRAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOgQILhBDOgcILhDUAhBDOgsILhDHARCvARCRAjoLCC4QxwEQ0QMQkQI6BAgAEEM6CAguEIAEELEDOgcILhCxAxBDOgsILhCvARDHARCRAjoICAAQsQMQgwE6CgguEIAEEBQQhwI6CwguEIAEELEDEIMBOgsILhCABBDHARCvAToICAAQgAQQsQM6BwgjELECECc6BwguEIAEEAo6CgguEIAEENQCEAo6BggAEAoQAzoNCC4QgAQQxwEQrwEQCjoNCC4QDRCvARDHARCABDoHCC4QDRCABDoPCC4QDRCABBDHARCvARAKOggIABAIEB4QDToFCCEQqwJKBAhBGABQAFitF2CxGWgAcAF4AIABggGIAbUNkgEDOS44mAEAoAEBwAEB&sclient=gws-wiz-serp#lrd=0x89c25dec8653102b:0x1932ad20caac787e,1,,,," target={"_blank"} ><IconifyIcon id="footer-icon-google" className="footer-icon" icon="mdi:google" /></a></li>
                <li><a href="https://www.yelp.com/biz/andreas-flower-shop-queens" target={"_blank"} ><IconifyIcon id="footer-icon-doordash" className="footer-icon" icon="simple-icons:doordash" /></a></li>
            </ul>
            <h3>Contact us <Icon className="footer-header-icon" icon={ic_phone_android_outline} size={"100%"} /></h3>
            <ul id="footer-list-contact" className="footer-list">
                <li>1(347)809-7485</li>
                <li>JulieJavier1203@Hotmail.com</li>
            </ul>
            <h3>Address and Hours <Icon className="footer-header-icon" icon={ic_location_on_outline} size={"100%"} /></h3>
            <ul id="footer-list-avail" className="footer-list">
                <li>7820 101st Ave Queens,<br/>NY 11416 USA</li>
                <li>Monday-Thursday: 11am-7pm</li>
                <li>Friday-Saturday: 11am-8pm</li>
                <li>Sunday: Closed</li>
            </ul>
        </div>
    )
}

export default Footer