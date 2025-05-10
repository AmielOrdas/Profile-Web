"use client";

import { Globe, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function LinksAndContacts() {
  return (
    <div className=" text-xs text-black text-center">
      <div className="inline-block text-left space-y-2">
        <p className="flex items-center space-x-1">
          <Mail size={17} color="orange" />
          <span className="">miramielordas@gmail.com</span>
        </p>
        <div className="space-y-2">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-black hover:text-orangeCustom hover:underline"
          >
            <SiLinkedin size={17} color="orange" />
            <span className="">LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-black hover:text-orangeCustom hover:underline"
          >
            <SiGithub size={17} color="orange" />
            <span className="">GitHub Profile</span>
          </a>

          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-black hover:text-orangeCustom hover:underline"
          >
            <Globe size={17} color="orange" />
            <span className="">Website</span>
          </a>
        </div>
      </div>
    </div>
  );
}
