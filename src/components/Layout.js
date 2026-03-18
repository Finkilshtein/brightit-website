// src/components/Layout.js
import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-area">
            <Link to="/" aria-label="Bright IT Studio home">
              <img
                src="/images/logo.png"
                alt="Bright IT Studio logo"
                className="site-logo"
              />
            </Link>
            <span className="site-title"></span>
          </div>
          <nav className="main-nav" aria-label="Main">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About us</Link>
          </nav>
          <span className="sr-only">Use tab to navigate through the menu items.</span>
        </div>
      </header>

      <main id="home">{children}</main>

      <footer>
        <div className="footer-inner">
          <div className="footer-column">
            <h2>Email</h2>
            <ul className="social-list">
            <li>
              <a href="mailto:contact@brightitstudio.com">
                contact@brightitstudio.com
              </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Follow</h2>
            <ul className="social-list">
              <li>
                <a href="https://linkedin.com/company/bright-it-studio"
                  target="_blank"
                  rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}