"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolModal from "./SchoolModal";

interface NavItem {
  href: string;
  name: string;
  subcategories?: { href: string; name: string }[];
}

const navItems: NavItem[] = [
  { href: "/", name: "Home" },
  {
    href: "/about",
    name: "About Us",
    subcategories: [
      { href: "/about/management", name: "Management (Core Team)" },
      { href: "/about/vision-mission", name: "Vision and Mission" },
      { href: "/about/school-policies", name: "School Policies" },
    ],
  },
  {
    href: "/academics",
    name: "Academics",
    subcategories: [
      { href: "/academics/global-kids", name: "Global Kids (Nur, LKG, UKG)" },
      { href: "/academics/master-minds", name: "Master Minds (1-5)" },
      { href: "/academics/phase", name: "Phase (6-10)" },
      { href: "/academics/programs", name: "Programs Conducted" },
    ],
  },
  {
    href: "/achievements",
    name: "Achievements",
    subcategories: [
      { href: "/achievements/academic", name: "Academic" },
      {
        href: "/achievements/extra-curriculum",
        name: "Extra Curriculum Activities",
      },
      { href: "/achievements/science-fair", name: "Science Fair" },
    ],
  },
  { href: "/events", name: "Events/News" },
  {
    href: "/admissions",
    name: "Admissions",
    subcategories: [
      { href: "/admissions/pay-fee", name: "Pay Fee" },
      { href: "/admissions/fee-structure", name: "Fee Structure" },
      { href: "/admissions/transportation-fee", name: "Transportation Fee" },
    ],
  },
  {
    href: "/beyond",
    name: "Beyond Academics",
    subcategories: [{ href: "/beyond/gallery", name: "Gallery" }],
  },
  // Add more items as needed
];

const NewNavBar = () => {
  const [isSolid, setIsSolid] = useState(false);
  console.log(isSolid);
  const [openModal, setOpenModal] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if user scrolled enough to make the navbar solid
      if (scrollTop > 50) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 200 }}>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            component={Link}
            href={item.href}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        background: "transparent",
        boxShadow: "none",
        transition: "background-color 0.3s ease",
        ...(isSolid && {
          bgcolor: "rgba(255, 255, 255, 0.8) !important",
        }),
        padding: { xs: "0 5px", md: "0 20px" },
        margin: { xs: 0, md: "0 30px" },
        maxWidth: { xs: "100% !important", md: "95% !important" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {!mobileOpen &&
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
}
        <Typography variant="h6" component="div">
          <Image src="/schoolLogo.png" alt="Logo" width={100} height={30} />
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            color: "black",
          }}
        >
          {navItems.map((item, index) => (
            <div key={index}>
              <NavLink
                href={item.href}
                // onMouseEnter={(e) => handleMenuOpen(e, item)}
                // closemenu={(e) => handleMenuOpen(e, item)}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </Box>
        <Button variant="contained" onClick={handleOpenModal} sx={{
            backgroundColor : "#005b8c"
        }}>
          Enquire Now
        </Button>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              background: "rgba(255, 255, 255, 0.8)", 
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
    {openModal && <SchoolModal open={openModal} handleOpenModal={handleOpenModal}/>}
    </>
  );
};

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  closemenu?: React.MouseEventHandler<HTMLAnchorElement>;
}> = ({ href, children, className, sx, onMouseEnter, closemenu }) => (
  <Link
    href={href}
    passHref
    style={{ textDecoration: "none" }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={closemenu}
  >
    <Typography
      variant="button"
      noWrap
      component="span"
      className={className}
      sx={{
        ...sx,
        marginRight: "1.5rem",
        color: "#000000b3",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "#000000e6",
        },
      }}
    >
      {children}
    </Typography>
  </Link>
);

export default NewNavBar;
