"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  ClickAwayListener,
} from "@mui/material";
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

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = React.useState<null | NavItem>(null);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    item: NavItem
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };
  const closemenu = (event: React.MouseEvent<HTMLElement>, item: NavItem) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
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
    <ClickAwayListener onClickAway={handleMenuClose}>
      <AppBar position="fixed" color="inherit">
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
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

            <Typography variant="h6" component="div">
              <Image src="/schoolLogo.png" alt="Logo" width={100} height={30} />
            </Typography>

            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navItems.map((item, index) => (
                <div key={index}>
                  <NavLink
                    href={item.href}
                    onMouseEnter={(e) => handleMenuOpen(e, item)}
                    closemenu={(e) => handleMenuOpen(e, item)}
                  >
                    {item.name}
                  </NavLink>
                  {/* {item.subcategories && selectedItem === item && (
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {item?.subcategories.map((subItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        component={Link}
                        href={subItem.href}
                        onClick={handleMenuClose}
                      >
                        {subItem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                )} */}
                </div>
              ))}
            </Box>

            <Button variant="contained" onClick={handleOpenModal}>Enquire Now</Button>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawerContent}
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </ClickAwayListener>
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
        marginRight: "1.5rem", // Add marginRight style here
      }}
    >
      {children}
    </Typography>
  </Link>
);

export default Navbar;
