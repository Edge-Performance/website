"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'

export default function MenuHeader({ navLinks }) {
    const router = useRouter()
    const pathname = usePathname();
    return (
        <nav className="hidden sm:flex sm:items-center sm:justify-center">
            <ul className="flex items-center justify-center gap-8">
                {navLinks.map((navItem, index) => (
                    <li
                        className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer"
                        key={index}
                        onClick={() => router.push(navItem.url)}
                    >
                        {pathname && (
                            <span
                                className={`${
                                    pathname == navItem.url
                                        ? "font-bold"
                                        : "font-normal"
                                    } text-white/90 no-underline hover:text-white`}
                            >
                                {navItem.text}
                            </span>
                        )}
                        {pathname == navItem.url && (
                            <hr className="border-t-4 rounded-full border-white w-1/3" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
