import React from "react";
import { Link } from "react-router-dom";
import { Home, Layers, ShoppingCart, Grid3X3, ArrowUp } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/", label: "Products", icon: Layers },
    { to: "/cart", label: "Cart", icon: ShoppingCart },
    { to: "/", label: "Categories", icon: Grid3X3 },
  ];

  const socialLinks = [
    { href: "https://x.com", label: "X", icon: FaXTwitter },
    { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
    { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedinIn },
    { href: "https://github.com", label: "GitHub", icon: FaGithub },
  ];

  return (
    <div className="mt-12">
      <footer className="relative border-t border-violet-300/20 bg-[#060816]/70 backdrop-blur-xl">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 py-8 sm:py-10">
          <button
            type="button"
            onClick={handleBackToTop}
            className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-5 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-violet-300/40 bg-[#0b1027]/95 text-slate-100 hover:text-cyan-300 hover:border-cyan-300/60 hover:bg-violet-500/20 transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-500/20"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-semibold text-xs sm:text-sm">Back to Top</span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Aurora<span className="text-violet-400">Shop</span>
              </h3>
              <p className="text-slate-300/80 text-sm mt-3 leading-relaxed max-w-xs">
                Modern Ecommerce Experience
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-300 mb-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="inline-flex items-center gap-2 text-slate-300/85 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                    >
                      <Icon className="w-4 h-4 text-violet-300" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-300 mb-4">
                Connect
              </h4>
              <div className="flex items-center gap-2.5 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-violet-300/30 bg-violet-500/10 text-slate-200 hover:text-cyan-300 hover:border-cyan-300/50 hover:bg-violet-500/20 transition-all duration-300 inline-flex items-center justify-center hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-violet-300/15 text-center text-xs sm:text-sm text-slate-400">
            <p>© 2026 AuroraShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;