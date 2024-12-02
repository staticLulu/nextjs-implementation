"use client"
import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLink = [
  { name: "Register", href: "/register"},
  { name: "Login", href: "/login"},
  { name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLayout({
  children
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState<string>('');
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLink.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link 
            href={link.href} 
            key={link.name}
            className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        )})}
        {children}
    </div>
  )
}