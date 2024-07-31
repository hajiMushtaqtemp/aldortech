"use client"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const links = ['Home', 'Services', 'Portfolio', 'Blogs', 'About Us', 'Contact'];
  const path = ['/', '/services', '/portfolio', '/blogs', '/about', '/contact'];
  const index = [0, 1, 2, 3, 4, 5];
  const quikLinks = ['Lorem1', 'Lorem2', 'Lorem3', 'Lorem4', 'Lorem5', 'Lorem6', 'Lorem7',]
  const pathName = usePathname()



  const handleMail = () => {
    window.open('mailto:info@aldortech.com')
  }

  useEffect(() => {
    let activeTab = pathName
    const navItem = document.querySelectorAll('.navLink')
    const theme = document.documentElement.classList.contains('dark-theme');
    navItem.forEach(ele => {
      ele.style.color = !theme ? 'black' : 'white';
      if (ele.dataset.value === activeTab) {
        ele.style.color = 'blue'
      }
    })
  }, [pathName])

  return (
    <>
      <div className="footerCont">
        <div className="container">
          <div className="brandLogo">
            <h1>Aldor Technologies</h1>
            <div className="socialLinks">
            </div>
            <div className="email">
              <h1 onClick={() => handleMail()}><FontAwesomeIcon icon={faEnvelope} /> info@aldortech.com</h1>
            </div>
          </div>
          <div className="navigation">
            <ul>
              {
                index.map(i => <Link href={path[i]} className="navLink" key={i} data-value={path[i]}><li >{links[i]}</li></Link>)
              }
            </ul>
          </div>
          <div className="quiklinks">
            <ul>
              {
                quikLinks.map(link => <li key={link}>{link}</li>)
              }
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright <strong>&copy;</strong> 2024 Aldor Technologies Pvt,Ltd. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
