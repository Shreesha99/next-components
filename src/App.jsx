import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Mail, Github, Linkedin } from "lucide-react";

import {
  FiMoon,
  FiSun,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiCheck,
  FiCopy,
  FiMenu,
  FiX,
} from "react-icons/fi";
import AccordionShowcase from "./showcases/accordion-showcase";
import AlertShowcase from "./showcases/alert-showcase";
import AlertDialogShowcase from "./showcases/alert-dialog-showcase";
import AvatarShowcase from "./showcases/avatar-showcase";
import ButtonShowcase from "./showcases/button-showcase";
import BadgeShowcase from "./showcases/badge-showcase";
import BreadCrumbShowcase from "./showcases/breadcrumb-showcase";
import CalenderShowcase from "./showcases/calendar-showcase";
import CardShowcase from "./showcases/card-showcase";
import CarouselShowcase from "./showcases/carousel-showcase";
import CheckboxShowcase from "./showcases/checkbox-showcase";
import DatepickerShowcase from "./showcases/datepicker-showcase";
import DropdownShowcase from "./showcases/dropdown-showcase";
import InputShowcase from "./showcases/input-showcase";
import OtpInputShowcase from "./showcases/otpinput-showcase";
import HoverCardShowcase from "./showcases/hovercard-showcase";

function ComponentShowcase({ title, preview, code, variants }) {
  const [activeTab, setActiveTab] = useState("preview");

  const tabs = ["preview", "code"];
  if (variants) tabs.push("variants");

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-2 mr-4 text-gray-700 dark:text-gray-300 ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 font-semibold text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-500 dark:hover:text-blue-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "preview" ? (
          preview
        ) : activeTab === "code" ? (
          <pre className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 p-2 overflow-auto text-sm rounded">
            <code>{code}</code>
          </pre>
        ) : (
          variants
        )}
      </div>
    </section>
  );
}

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Introduction");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [theme] = useState(() => localStorage.getItem("theme"));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setSelectedComponent("welcome");
  }, []);

  function useClipboard() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    return { copied, copyToClipboard };
  }
  const { copied, copyToClipboard } = useClipboard();
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const codeSnippet = `import { Button } from 'drux-ui';

  export default function App() {
    return (
      <div>
        <Button variant="primary">Click Me</Button>
      </div>
    );
  }`;

  const [otp, setOtp] = useState("");

  const introduction = {
    Welcome: (
      <section className="space-y-8 max-w-8xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            👋 Welcome to Drux UI
          </h1>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Drux UI</strong> is a modern, thoughtfully-designed React
            component library powered by Tailwind CSS and
            class-variance-authority (CVA). It's built to help developers move
            fast without compromising on design quality or code structure.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            This is not just another UI kit. Drux UI gives you beautifully
            composable components with full control over styling and behavior,
            empowering you to craft consistent, elegant interfaces across your
            apps — with zero design bloat.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Why Drux UI?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Composability:</strong> All components follow a
              predictable, composable pattern with CVA, giving you the
              flexibility to build and extend without friction.
            </li>
            <li>
              <strong>Minimal by Design:</strong> Every component comes with a
              clean default style that's easy to customize, and never bloated
              with unnecessary variants or logic.
            </li>
            <li>
              <strong>Tailwind First:</strong> Built for Tailwind CSS from the
              ground up, Drux UI keeps your styling strategy consistent and
              utility-friendly.
            </li>
            <li>
              <strong>Developer-Centric:</strong> Written with care for DX
              (developer experience). Simple imports, readable code, and no
              surprises.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Who made this?
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Drux UI is a solo project by <strong>Shreesha Venkatram</strong>, a
            passionate full-stack developer with a focus on clean design
            systems, component architecture, and developer experience. Every
            component in this library has been hand-crafted with love, attention
            to detail, and a strong belief in open, composable code.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            I’m currently building out this system actively. If you have
            suggestions, feedback, or just want to chat about UI libraries —
            feel free to reach out! I'd love to connect.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Contact
          </h2>
          <ul className="pl-1 space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:shreeshavenkatram99@gmail.com"
                className="underline"
              >
                shreeshavenkatram99@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a
                href="https://github.com/Shreesha99"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                github.com/Shreesha99
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://www.linkedin.com/in/shreesha-venkatram-57684317a/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn - Shreesha Venkatram
              </a>
            </li>
          </ul>
        </div>

        <p className="text-sm pt-4 font-bold text-gray-800 dark:text-gray-400">
          🚧 Drux UI is under active development. New components and
          improvements are added regularly. Stay tuned!
        </p>
      </section>
    ),

    Installation: (
      <section className="space-y-8 max-w-8xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            📦 Installation
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Drux UI is distributed as an npm package. You can install it using
            your preferred package manager:
          </p>

          {["npm install drux-ui", "yarn add drux-ui", "pnpm add drux-ui"].map(
            (cmd, index) => (
              <pre
                key={cmd}
                className="relative text-sm p-4 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-auto"
              >
                <code className="w-auto text-gray-800 dark:text-gray-200">
                  {cmd}
                </code>
                <button
                  onClick={() => {
                    copyToClipboard(cmd);
                    setCopiedIndex(index); // set copied index state
                    setTimeout(() => setCopiedIndex(null), 1500);
                  }}
                  className="absolute top-2 right-2 p-1 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
                >
                  {copiedIndex === index ? (
                    <FiCheck className="text-green-500 w-4 h-4" />
                  ) : (
                    <FiCopy className="text-gray-600 dark:text-gray-300 w-4 h-4" />
                  )}
                </button>
              </pre>
            )
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            🔧 Prerequisites
          </h3>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Drux UI is built for <strong>React</strong> and{" "}
            <strong>Tailwind CSS</strong>, and relies on{" "}
            <a
              href="https://cva.style"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              class-variance-authority
            </a>{" "}
            for composable variants.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>React 18+</li>
            <li>Tailwind CSS (v3.0+)</li>
            <li>PostCSS configuration (standard Tailwind setup)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            ✨ What’s Included
          </h3>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            When you install{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              drux-ui
            </code>
            , you’ll get access to a growing suite of components such as:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Avatar</strong> - User identity placeholder
            </li>
            <li>
              <strong>AlertDialog</strong> - Accessible dialogs with
              confirmation flow
            </li>
            <li>
              <strong>Badge</strong> - Highlight statuses and tags
            </li>
            <li>
              <strong>Breadcrumb</strong> - Navigation breadcrumbs
            </li>
            <li>...and many more coming soon</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            📁 Folder Structure
          </h3>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Drux UI follows a flat and modular file structure — every component
            is isolated, customizable, and TypeScript-friendly.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-4 rounded border border-gray-200 dark:border-gray-700 overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">
              import &#123; Button &#125; from "drux-ui";
              <br />
              import &#123; Badge &#125; from "drux-ui";
            </code>
          </pre>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            📖 Next Steps
          </h3>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Explore our documentation for examples, props, and usage patterns.
            Components are open and composable — meaning you can extend,
            override, or theme them however you'd like.
          </p>
          <p className="text-sm pt-2 text-gray-700 dark:text-gray-400">
            Need help? Reach out via{" "}
            <a
              href="mailto:shreeshavenkatram99@gmail.com"
              className="underline"
            >
              email
            </a>{" "}
            or open a GitHub issue.
          </p>
        </div>
      </section>
    ),

    Usage: (
      <section className="space-y-6 max-w-8xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            🚀 Usage
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Drux UI is designed to be drop-in ready. Once installed, you can
            start using components right away without any extra configuration.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Here's a quick example of how to use the{" "}
            <code className="font-mono text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border">
              Button
            </code>{" "}
            component:
          </p>
          <pre className="relative bg-gray-100 dark:bg-gray-800 text-sm p-4 rounded border border-gray-200 dark:border-gray-700 overflow-auto">
            <code className="w-auto text-gray-800 dark:text-gray-200">
              {codeSnippet}
              <button
                onClick={() => copyToClipboard(codeSnippet)}
                className="absolute top-2 right-2 p-1 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
              >
                {copied ? (
                  <FiCheck className="text-green-500 w-4 h-4" />
                ) : (
                  <FiCopy className="text-gray-600 dark:text-gray-300 w-4 h-4" />
                )}
              </button>
            </code>
          </pre>

          <p className="text-base text-gray-700 dark:text-gray-300">
            Every component comes with smart defaults but can be extended and
            styled using props or utility classes.
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-4 rounded border border-gray-200 dark:border-gray-700 overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">
              {`<Button variant="outline" size="sm">\n  <Icon className="mr-2" />\n  Small Outline\n</Button>`}
            </code>
          </pre>

          <p className="text-base text-gray-700 dark:text-gray-300">
            All components are tree-shakable. Explore the docs for more!
          </p>
        </div>
      </section>
    ),
  };

  const [copiedText, setCopied] = useState(false);

  const components = {
    Accordion: <AccordionShowcase />,
    Alert: <AlertShowcase />,
    AlertDialog: <AlertDialogShowcase />,
    Avatar: <AvatarShowcase />,
    Button: <ButtonShowcase />,
    Badge: <BadgeShowcase />,
    Breadcrumb: <BreadCrumbShowcase />,
    Calendar: <CalenderShowcase />,
    Card: <CardShowcase />,
    Carousel: <CarouselShowcase />,
    Checkbox: <CheckboxShowcase />,
    Datepicker: <DatepickerShowcase />,
    Dropdown: <DropdownShowcase />,
    Input: <InputShowcase />,
    OtpInput: <OtpInputShowcase />,
    Hovercard: (
      <HoverCardShowcase />
      // <ComponentShowcase
      //   title="Hover Card"
      //   preview={
      //     <HoverCard
      //       title="Hover me"
      //       content="This is the content shown when hovered!"
      //     />
      //   }
      //   code={
      //     <pre className="relative text-sm p-4 rounded border border-gray-200 overflow-auto bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white">
      //       <code className="w-auto block whitespace-pre-wrap">
      //         {`<HoverCard title="Hover Me" content="This is the content shown when hovered!" />`}
      //       </code>
      //       <button
      //         onClick={() => {
      //           copyToClipboard(
      //             `<HoverCard title="Hover Me" content="This is the content shown when hovered!" />`
      //           );
      //           setCopied(true);
      //           setTimeout(() => setCopied(false), 1500);
      //         }}
      //         className="absolute top-2 right-2 p-1 rounded border border-gray-300 hover:bg-gray-50 transition dark:border-gray-600 dark:hover:bg-gray-700"
      //       >
      //         {copied ? (
      //           <FiCheck className="text-green-500 w-4 h-4" />
      //         ) : (
      //           <FiCopy className="text-gray-600 w-4 h-4 dark:text-gray-300" />
      //         )}
      //       </button>
      //     </pre>
      //   }
      // />
    ),
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const allItems = [
    ...Object.keys(introduction).map((key) => ({ type: "Introduction", key })),
    ...Object.keys(components).map((key) => ({ type: "Component", key })),
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = allItems.filter((item) =>
      item.key.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleSelect = (key) => {
    setSelectedComponent(key);
    setSearchTerm("");
    setFilteredResults([]);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const isShortcut =
        (isMac && e.metaKey && e.key === "k") ||
        (!isMac && e.ctrlKey && e.key === "k");

      if (isShortcut) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Mobile Hamburger (Top Left on small screens) */}
      <button
        className="fixed top-4 left-4 z-[60] sm:hidden text-gray-800 dark:text-white"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FiMenu size={24} />
      </button>

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4 z-50 px-4 sm:px-20">
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://druxui.s3.ap-south-1.amazonaws.com/just-logo.png"
              alt="Drux UI Logo Light"
              className="h-8 block dark:hidden"
            />
            <img
              src="https://druxui.s3.ap-south-1.amazonaws.com/just-logo-dark.png"
              alt="Drux UI Logo Dark"
              className="h-8 hidden dark:block"
            />
            {/* Show 'Drux UI' only on sm and up */}
            <span className="text-lg font-semibold text-gray-900 dark:text-white hidden sm:inline">
              Drux UI
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-2">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
              <FiSearch className="text-gray-500 dark:text-gray-400 mr-2" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={handleSearch}
                className="bg-transparent w-full focus:outline-none text-sm text-black dark:text-white"
              />
              <span className="text-xs text-black dark:text-gray-300 ml-2 hidden sm:inline w-25 border border-gray-200 dark:border-gray-600 rounded px-2 py-0.5">
                ⌘K / Ctrl K
              </span>
            </div>

            {filteredResults.length > 0 && (
              <ul className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredResults.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm text-gray-800 dark:text-gray-200"
                    onClick={() => handleSelect(item.key)}
                  >
                    <span className="font-medium dark:text-white">
                      {item.key}
                    </span>{" "}
                    <span className="text-gray-400 dark:text-gray-500">
                      ({item.type})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* GitHub + Mail */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/Shreesha99"
              target="_blank"
              className="hover:underline"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:shreeshavenkatram99@gmail.com"
              className="hover:underline"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Drawer */}
      {isSidebarOpen && (
        <aside className="fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 p-6 sm:hidden overflow-y-auto">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="mb-4 text-black dark:text-white"
          >
            <FiX size={24} />
          </button>
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Introduction
          </h2>
          <ul className="space-y-2 mb-4">
            {Object.keys(introduction).map((key) => (
              <li key={key}>
                <button
                  onClick={() => {
                    setSelectedComponent(key);
                    setIsSidebarOpen(false);
                  }}
                  className={`block p-2 w-full text-left rounded ${
                    selectedComponent === key
                      ? "bg-gray-800 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white"
                  }`}
                >
                  {key}
                </button>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Components
          </h2>
          <ul className="space-y-2">
            {Object.keys(components).map((key) => (
              <li key={key}>
                <button
                  onClick={() => {
                    setSelectedComponent(key);
                    setIsSidebarOpen(false);
                  }}
                  className={`block p-2 w-full text-left rounded ${
                    selectedComponent === key
                      ? "bg-gray-800 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white"
                  }`}
                >
                  {key}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <div className="flex h-screen bg-gray-100 dark:bg-black px-4 sm:px-20">
        <main className="flex-1 overflow-auto relative scrollbar-hide py-25 px-6 border-r border-dotted border-gray-300 dark:border-gray-700 dark:bg-black text-black dark:text-white">
          {introduction[selectedComponent] || components[selectedComponent]}
        </main>
        <aside
          className={`py-20 border-l border-r border-dotted border-gray-300 dark:border-gray-700 shadow-none p-6 transition-all duration-300 h-screen overflow-y-auto scrollbar-hide hidden sm:block ${
            isSidebarOpen ? "w-64" : "w-20"
          }`}
        >
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="cursor-pointer mb-2 py-2 text-black dark:text-white rounded flex items-center"
          >
            {isSidebarOpen ? (
              <FiChevronLeft size={20} />
            ) : (
              <FiChevronRight size={20} />
            )}
          </button>
          {isSidebarOpen && (
            <>
              <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Introduction
              </h2>
              <ul className="space-y-2 mb-4">
                {Object.keys(introduction).map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => setSelectedComponent(key)}
                      className={`block p-2 w-full text-left rounded ${
                        selectedComponent === key
                          ? "bg-gray-800 text-white"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white"
                      }`}
                    >
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
              <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Components
              </h2>
              <ul className="space-y-2">
                {Object.keys(components).map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => setSelectedComponent(key)}
                      className={`block p-2 w-full text-left rounded ${
                        selectedComponent === key
                          ? "bg-gray-800 text-white"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white"
                      }`}
                    >
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </div>
    </>
  );
}

export default App;
