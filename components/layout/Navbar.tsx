'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/lib/constants'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 max-md:!bg-white max-md:!shadow-[0_1px_0_rgba(0,0,0,0.08)] ${
          scrolled ? 'navbar-solid' : 'navbar-transparent'
        }`}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="FIKA Tool & Plant Hire home">
              <div className="bg-white rounded-md px-3 py-2 md:px-4 md:py-2.5 flex items-center">
                <div className="relative h-8 w-[102px] md:h-10 md:w-[128px]">
                  <Image
                    src="/images/logo-mark.png"
                    alt="FIKA Tool & Plant Hire"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/80 hover:text-white tracking-wide transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
              >
                Enquire Now
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-finka-green p-2 -mr-2"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full flex flex-col"
              style={{ background: '#03341E' }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="bg-white rounded-md px-2.5 py-1.5 inline-flex items-center">
                  <div className="relative h-7 w-[89px]">
                    <Image
                      src="/images/logo-mark.png"
                      alt="FIKA Tool & Plant Hire"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white p-1 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-lg font-medium text-white/80 hover:text-white border-b border-white/5 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile contact */}
                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                    className="btn-outline w-full justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {SITE.phone}
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    WhatsApp Us
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
