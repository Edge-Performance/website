import Image from "next/image";
import Button from "./button";
import MenuHeader from "./menu-header";
import { fetchGraphQL } from "../utils";
import HamburgerMenu from "./hamburger-menu";

export default async function Navbar() {
    const query = `
    query {
      header (id: "5x0FhZfFZPCa7IRFV1SolX") {
        logo{
          url
          width
          height
        }
        ctaButton {
          text
          url
        }
        contactButton{
          text
          url
        }
        navigationMenuCollection{
          items{
            text
            url
          }
        }
      }
    }
  `;
    const data = await fetchGraphQL(query);

    return (
        <>
            <header className="bg-indigo_900_ed flex items-center justify-center sticky top-0 z-10 h-20 w-full">
                <div className="flex items-center justify-between w-[80%] mx-auto">
                    <div className="flex items-center justify-center gap-12">
                        <div className="logo">
                            <Image
                                className="mx-auto"
                                src={data.data.header.logo.url}
                                alt={"logo"}
                                width={data.data.header.logo.width}
                                height={data.data.header.logo.height}
                                priority
                            />
                        </div>
                        <MenuHeader
                            navLinks={
                                data.data.header.navigationMenuCollection.items
                            }
                        />
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-6">
                        <div className="flex items-center justify-center gap-3">
                            <Button
                                url={"#contact"}
                                textColor={"white"}
                                className={
                                    "bg-indigo_900_ed border border-white h-5"
                                }
                                text={data.data.header.contactButton.text}
                            />
                            <Button
                                url={data.data.header.ctaButton.url}
                                textColor={"black"}
                                className={"bg-amber_A400 h-8"}
                                text={data.data.header.ctaButton.text}
                            />
                        </div>
                    </div>
                    <HamburgerMenu />
                </div>
            </header>
        </>
    );
}
