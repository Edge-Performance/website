'use client';
import { useEffect } from 'react';
import { usePathname } from "next/navigation";


export function scrollElementToView() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default function ScrollToLinkGlobalComponent() {
  const pathname = usePathname();

  useEffect(() => {

    if (url.indexOf("#") !== -1) return; // return if there is none

    scrollElementToView();

  }, [pathname])

  return null
}
