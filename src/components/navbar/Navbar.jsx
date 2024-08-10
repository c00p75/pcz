"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./navbar.scss";
import {
  Button,
  Offcanvas,
  Accordion,
  Navbar,
  Container,
} from "react-bootstrap";
import Link from "next/link";
import logo from "/public/logo_sm.png";

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("#nav");
    const onScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      id="nav"
      expand="lg"
      className={`nav d-flex justify-content-between ${
        scrolled ? "scrolled-navbar" : ""
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="logo flex-center">
          <Image src={logo} alt="pcz logo" quality={100} />
          <span>
            PCZ
            <br />
            CHELSTON
            <br />
            CONGREGATION
          </span>
        </Navbar.Brand>

        {/* <div className="dropdown"> */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          className="bg-transparent border-0"
          onClick={handleShow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            id="burger-menu"
          >
            <g fill="none">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="white"
                id="burger-menu-fill"
                d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3h16Z"
              />
            </g>
          </svg>
        </Navbar.Toggle>

        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          placement={"end"}
          id="offcanvasNavbar-expand-lg"
          className="off-canvas-menu"
        >
          <Offcanvas.Header>
            <Button onClick={handleClose} className="close-btn">
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#1e283a"
                    d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
                  />
                </svg>
              </Offcanvas.Title>
            </Button>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <ul>
              <li>
                <Link href="/">
                  <span className="link-text">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="active">
                  <span className="link-text">Announcements</span>
                </Link>
              </li>
              <li>
                <Link href="/sermons">
                  <span className="link-text">Sermons</span>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <span className="link-text">Events</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="link-text">About</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="link-text">More</span>
                </Link>
              </li>
              <li className="accordion-container">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Link href="/fellowships">
                      <span className="link-text">Fellowships</span>
                    </Link>
                    <Accordion.Header />
                    <Accordion.Body>
                      <ul>
                        <li>
                          <Link href="/fellowships/youth">
                            <span className="link-text">Men</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/fellowships/women">
                            <span className="link-text">Women</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/fellowships/men">
                            <span className="link-text">Youth</span>
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Link href="/associations">
                      <span className="link-text">Associations</span>
                    </Link>
                    <Accordion.Header />
                    <Accordion.Body>
                      <ul>
                        <li>
                          <Link href="/associations/mad">
                            <span className="link-text">
                              Ministry & Discipleship
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/associations/worship">
                            <span className="link-text">Worship</span>
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Link href="/apps">
                      <span className="link-text">Apps</span>
                    </Link>
                    <Accordion.Header />
                    <Accordion.Body>
                      <ul>
                        <li>
                          <Link href="/apps/hymn">
                            <span className="link-text">Hymns</span>
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Link href="/join-us" className="join-us-btn px-3 py-1">
                  <span className="link-text">Join Us</span>
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* </div> */}
      </Container>
    </Navbar>
  );
};

export default Nav;
