import React from "react"
import { footerIcons, footerLinks } from "../../constants"
import Image from "next/image"
import { footer_logo } from "../../public/assets/icons"

const Footer = () => {
  return (
    <section className="bg-[#1E285F] p-24 text-white relative z-0">
      <div className="flex flex-row justify-between mid-container">
        <div className="">
          <Image src={footer_logo} alt="logo" className="pb-20" />
          <div className="flex flex-row">
            {footerIcons.map((icon, idx) => (
              <a key={idx} href={`${icon.href}`}>
                <Image src={icon.src} alt="icon" className="m-2" />
              </a>
            ))}
          </div>
        </div>
        <div className="h-[200px] border border-l-0"></div>
        <div className="">
          <p className="pb-5 tracking-wider">De weg kwijt?</p>
          <ul className="text-gray-400">
            {footerLinks.map((link) => (
              <li key={link.name} className="p-1">
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[200px] border border-l-0"></div>
        <div className="">
          <p className="pb-5 tracking-wider">Blijf op de hoogte.</p>
          <ul className="text-gray-400">
            {footerLinks.map((link) => (
              <li key={link.name} className="p-1">
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
