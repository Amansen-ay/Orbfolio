import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { Globe } from "lucide-react";
import {LinkItem} from './LinkItem';

export const links = [
  {
    id: "1",
    title: "GitHub",
    url: "https://github.com/amansen",
    clicks: 203,
    status: "published",
    enabled: true,
    icon: <FaGithub/>,
    background: "bg-zinc-100",
  },
  {
    id: "2",
    title: "Portfolio",
    url: "https://amansen.dev",
    clicks: 156,
    status: "published",
    enabled: true,
    icon: <Globe/>,
    background: "bg-orange-100",
  },
  {
    id: "3",
    title: "Twitter / X",
    url: "https://x.com/amansen",
    clicks: 87,
    status: "published",
    enabled: true,
    icon: <FaXTwitter/>,
    background: "bg-sky-100",
  },
  {
    id: "4",
    title: "Instagram",
    url: "https://instagram.com/amansen",
    clicks: 342,
    status: "hidden",
    enabled: false,
    icon: <FaInstagram/>,
    background: "bg-pink-100",
  },
  {
    id: "5",
    title: "LinkedIn",
    url: "https://linkedin.com/in/amansen",
    clicks: 64,
    status: "published",
    enabled: true,
    icon: <FaLinkedinIn/>,
    background: "bg-blue-100",
  },
  {
    id: "6",
    title: "YouTube",
    url: "https://youtube.com/@amansen",
    clicks: 518,
    status: "published",
    enabled: true,
    icon: <FaYoutube/>,
    background: "bg-red-100",
  },
];

export function LinkItemsCard(){
  return (
    <>
    <main>
      <div>
        {
          links.map((link)=>(
            <LinkItem key={link.id} title={link.title} url={link.url} clicks={link.clicks} enabled={link.enabled} icon={link.icon} background={link.background} id={link.id}/>
          ))
        }
      </div>
    </main>
    </>
  )
}