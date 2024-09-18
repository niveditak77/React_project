import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { Link, Kbd, Input, Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { HeartFilledIcon, SearchIcon } from "@/components/icons";
import icon from "@/public/favicon-32x32.png";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/app/dashboard/page";
function MobileMenu() {
  const Router = useRouter();
  const { selected, setSelected } = useMyContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const searchInput = (
    <Input
      aria-label="Search"
      autoComplete="off"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  return (
    <div>
      <NextUINavbar
        isMenuDefaultOpen={false}
        isMenuOpen={menuOpen}
        maxWidth="xl"
        position="sticky"
        className="md:hidden"
      >
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image alt="logo" src={icon} />
              <p className="font-bold text-inherit">EAGLES</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2 mb-24 overflow-y-scroll">
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSelected("Dashboard");
                Router.push(`/dashboard`);
              }}
              className="pl-2 hover:cursor-pointer p-2"
            >
              Dashboard
            </li>
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Accordion>
                  <AccordionItem title={item.label}>
                    {item.href.map((_, i) => {
                      if (!_.isNested)
                        return (
                          <li
                            key={i}
                            onClick={() => {
                              setMenuOpen(!menuOpen);
                              setSelected(_.key);
                              Router.push(`#${_.item}`);
                            }}
                            className="hover:cursor-pointer hover:bg-success rounded-md mt-2 p-3  pl-8"
                          >
                            {_.item}
                          </li>
                        );
                      else
                        return (
                          <Accordion key={index + i}>
                            <AccordionItem title={item.href[i].item}>
                              {item.href[i].items?.map((items, i) => {
                                return (
                                  <li
                                    key={i + index}
                                    onClick={() => {
                                      setMenuOpen(!menuOpen);
                                      _.isNested
                                        ? setSelected(
                                            _.item.toLowerCase() +
                                              "-" +
                                              items.toLowerCase()
                                          )
                                        : setSelected(_.key);
                                      Router.push(
                                        `#${_.item.toLowerCase()}-${items.toLowerCase()}`
                                      );
                                    }}
                                    className="hover:cursor-pointer hover:bg-success rounded-md mt-2 p-3  pl-8"
                                  >
                                    {items}
                                  </li>
                                );
                              })}
                            </AccordionItem>
                          </Accordion>
                        );
                    })}
                  </AccordionItem>
                </Accordion>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
}

export default MobileMenu;
