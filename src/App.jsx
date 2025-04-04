import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

import {
  FiMoon,
  FiSun,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiCheck,
  FiCopy,
} from "react-icons/fi";
import { Button } from "@/lib/components/Button";
import { Accordion } from "@/lib/components/Accordion";
import { Alert } from "@/lib/components/Alert";
import { AlertDialog } from "@/lib/components/AlertDialog";
import { Avatar } from "@/lib/components/Avatar";
import { Badge } from "@/lib/components/Badge";
import { BreadCrumb } from "@/lib/components/Breadcrumb";
import { Calendar } from "@/lib/components/Calendar";
import { Checkbox } from "@/lib/components/Checkbox";
import { Datepicker } from "@/lib/components/Datepicker";
import { Dropdown } from "@/lib/components/Dropdown";

function ComponentShowcase({ title, preview, code, variants }) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex border-b mb-4">
          {["preview", "code", "variants"].map((tab) => (
            <button
              key={tab}
              className={`p-2 mr-4 ${
                activeTab === tab ? "border-b-2 border-blue-500" : ""
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
          <pre className="bg-gray-100 p-2 overflow-auto text-sm">
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
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

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

  const introduction = {
    Welcome: (
      <section className="space-y-8 max-w-8xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">👋 Welcome to Drux UI</h1>
          <p className="text-base leading-relaxed">
            <strong>Drux UI</strong> is a modern, thoughtfully-designed React
            component library powered by Tailwind CSS and
            class-variance-authority (CVA). It's built to help developers move
            fast without compromising on design quality or code structure.
          </p>
          <p className="text-base leading-relaxed">
            This is not just another UI kit. Drux UI gives you beautifully
            composable components with full control over styling and behavior,
            empowering you to craft consistent, elegant interfaces across your
            apps — with zero design bloat.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Why Drux UI?</h2>
          <ul className="list-disc pl-6 space-y-2">
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
          <h2 className="text-xl font-semibold">Who made this?</h2>
          <p className="text-base leading-relaxed">
            Drux UI is a solo project by <strong>Shreesha Venkatram</strong>, a
            passionate full-stack developer with a focus on clean design
            systems, component architecture, and developer experience. Every
            component in this library has been hand-crafted with love, attention
            to detail, and a strong belief in open, composable code.
          </p>
          <p className="text-base leading-relaxed">
            I’m currently building out this system actively. If you have
            suggestions, feedback, or just want to chat about UI libraries —
            feel free to reach out! I'd love to connect.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul className="pl-1 space-y-2">
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

        <p className="text-sm pt-4 font-bold">
          🚧 Drux UI is under active development. New components and
          improvements are added regularly. Stay tuned!
        </p>
      </section>
    ),
    Installation: (
      <section className="space-y-8 max-w-8xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">📦 Installation</h2>
          <p className="text-base leading-relaxed">
            Drux UI is distributed as an npm package. You can install it using
            your preferred package manager:
          </p>
          <pre className="relative bg-gray-100 text-sm p-4 rounded border border-gray-200 overflow-auto">
            <code className="w-auto">
              npm install drux-ui
              <button
                onClick={() => copyToClipboard("npm install drux-ui")}
                className="absolute top-2 right-2 p-1 rounded bg-white border border-gray-300 hover:bg-gray-50 transition"
              >
                {copied ? (
                  <FiCheck className="text-green-500 w-4 h-4" />
                ) : (
                  <FiCopy className="text-gray-600 w-4 h-4" />
                )}
              </button>
            </code>
          </pre>
          <pre className="relative bg-gray-100 text-sm p-4 rounded border border-gray-200 overflow-auto">
            <code className="w-auto">
              yarn add drux-ui
              <button
                onClick={() => copyToClipboard("yarn add drux-ui")}
                className="absolute top-2 right-2 p-1 rounded bg-white border border-gray-300 hover:bg-gray-50 transition"
              >
                {copied ? (
                  <FiCheck className="text-green-500 w-4 h-4" />
                ) : (
                  <FiCopy className="text-gray-600 w-4 h-4" />
                )}
              </button>
            </code>
          </pre>
          <pre className="relative bg-gray-100 text-sm p-4 rounded border border-gray-200 overflow-auto">
            <code className="w-auto">
              pnpm add drux-ui
              <button
                onClick={() => copyToClipboard("pnpm add drux-ui")}
                className="absolute top-2 right-2 p-1 rounded bg-white border border-gray-300 hover:bg-gray-50 transition"
              >
                {copied ? (
                  <FiCheck className="text-green-500 w-4 h-4" />
                ) : (
                  <FiCopy className="text-gray-600 w-4 h-4" />
                )}
              </button>
            </code>
          </pre>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">🔧 Prerequisites</h3>
          <p className="text-base leading-relaxed">
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
            for composable variants. Make sure your project is already set up
            with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>React 18+</li>
            <li>Tailwind CSS (v3.0+)</li>
            <li>PostCSS configuration (standard Tailwind setup)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">✨ What’s Included</h3>
          <p className="text-base leading-relaxed">
            When you install <code>drux-ui</code>, you’ll get access to a
            growing suite of components such as:
          </p>
          <ul className="list-disc pl-6 space-y-1">
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
          <h3 className="text-xl font-semibold">📁 Folder Structure</h3>
          <p className="text-base leading-relaxed">
            Drux UI follows a flat and modular file structure — every component
            is isolated, customizable, and TypeScript-friendly. You can import
            only what you need:
          </p>
          <pre className="bg-gray-100 text-sm p-4 rounded border border-gray-200 overflow-auto">
            <code>
              import &#123; Button &#125; from "drux-ui";
              <br />
              import &#123; Badge &#125; from "drux-ui";
            </code>
          </pre>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">📖 Next Steps</h3>
          <p className="text-base leading-relaxed">
            After installing, explore our documentation for examples, props, and
            usage patterns for each component. All components are open and
            composable — meaning you can extend, override, or theme them however
            you'd like.
          </p>
          <p className="text-sm pt-2">
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
          <h2 className="text-2xl font-semibold text-black">🚀 Usage</h2>
          <p className="text-black text-base">
            Drux UI is designed to be drop-in ready. Once installed, you can
            start using components right away without any extra configuration.
            Each component is built with accessibility, customization, and clean
            structure in mind.
          </p>
          <p className="text-black text-base">
            Here's a quick example of how to use the{" "}
            <code className="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded border">
              Button
            </code>{" "}
            component:
          </p>
          <pre className="relative bg-gray-100 text-sm p-4 rounded border border-gray-200 overflow-auto">
            <code className="w-auto">
              {codeSnippet}
              <button
                onClick={() => copyToClipboard(codeSnippet)}
                className="absolute top-2 right-2 p-1 rounded bg-white border border-gray-300 hover:bg-gray-50 transition"
              >
                {copied ? (
                  <FiCheck className="text-green-500 w-4 h-4" />
                ) : (
                  <FiCopy className="text-gray-600 w-4 h-4" />
                )}
              </button>
            </code>
          </pre>

          <p className="text-black text-base">
            Every component comes with smart defaults but can be extended and
            styled using props or utility classes. Whether you're building a
            dashboard, form, or interactive UI — Drux components work seamlessly
            with Tailwind CSS.
          </p>
          <p className="text-black text-base">
            For example, you can easily add a size or icon to the button:
          </p>

          <pre className="bg-gray-100 text-sm p-4 rounded border border-gray-200 overflow-auto">
            <code>{`<Button variant="outline" size="sm">
      <Icon className="mr-2" />
      Small Outline
    </Button>`}</code>
          </pre>

          <p className="text-black text-base">
            All components are tree-shakable and only include what you use.
            Explore the full list in the documentation to see props, variants,
            and usage examples.
          </p>
        </div>
      </section>
    ),
  };
  const components = {
    Accordion: (
      <ComponentShowcase
        title="Accordion"
        preview={
          <Accordion title="Example" variant="primary">
            Content
          </Accordion>
        }
        code={`<Accordion title="Example" variant="primary">Content</Accordion>`}
        variants={
          <Accordion title="Alternative" variant="secondary">
            Different Look
          </Accordion>
        }
      />
    ),
    Alerts: (
      <ComponentShowcase
        title="Alerts"
        preview={<Alert variant="success">Success Alert</Alert>}
        code={`<Alert variant="success">Success Alert</Alert>`}
        variants={
          <>
            <Alert variant="warning">Warning Alert</Alert>
            <Alert variant="destructive">Destructive Alert</Alert>
          </>
        }
      />
    ),
    AlertDialog: (
      <ComponentShowcase
        title="Alert Dialog"
        preview={
          <>
            <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
            <AlertDialog
              isOpen={isDialogOpen}
              title="Confirm"
              description="Are you sure?"
              onClose={() => setIsDialogOpen(false)}
            />
          </>
        }
        code={`<Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>\n<AlertDialog isOpen={isDialogOpen} title="Confirm" description="Are you sure?" onClose={() => setIsDialogOpen(false)} />`}
        variants={
          <>
            <Button onClick={() => setIsDialogOpen(true)}>
              Trigger Danger Dialog
            </Button>
            <AlertDialog
              isOpen={isDialogOpen}
              title="Danger"
              description="This action is irreversible!"
              onClose={() => setIsDialogOpen(false)}
            />
          </>
        }
      />
    ),
    Avatar: (
      <ComponentShowcase
        title="Avatar"
        preview={
          <Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="md" />
        }
        code={`<Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="md" />`}
        variants={
          <>
            <Avatar
              src="https://i.pravatar.cc/150"
              alt="User Avatar"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150"
              alt="User Avatar"
              size="xl"
            />
          </>
        }
      />
    ),
    Button: (
      <ComponentShowcase
        title="Buttons"
        preview={
          <div className="flex space-x-2">
            <Button variant={"primary"}>Primary</Button>
            <Button variant={"secondary"}>Secondary</Button>
          </div>
        }
        code={`<Button variant={'primary'}>Primary</Button>\n<Button variant={'secondary'}>Secondary</Button>`}
        variants={
          <div className="flex space-x-2">
            <Button variant={"success"}>Success</Button>
            <Button variant={"warning"}>Warning</Button>
            <Button variant={"destructive"}>Destructive</Button>
            <Button variant={"outline"}>Outline</Button>
            <Button variant={"ghost"}>Ghost</Button>
            <Button variant={"link"}>Link</Button>
          </div>
        }
      />
    ),
    Badges: (
      <ComponentShowcase
        title="Badges"
        preview={<Badge text="Success" variant="success" />}
        code={`<Badge text="Success" variant="success" />`}
        variants={
          <>
            <Badge text="Warning" variant="warning" />
            <Badge text="Danger" variant="danger" />
          </>
        }
      />
    ),
    Breadcrumb: (
      <ComponentShowcase
        title="BreadCrumb"
        preview={
          <BreadCrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
            ]}
          />
        }
        code={`<BreadCrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]} />`}
        variants={
          <BreadCrumb
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Settings", href: "/settings" },
            ]}
            separator=">"
          />
        }
      />
    ),
    Calendar: (
      <ComponentShowcase
        title="Calendar"
        preview={<Calendar />}
        code={`<Calendar />`}
        variants={<Calendar minDate={new Date()} />}
      />
    ),
    Checkbox: (
      <ComponentShowcase
        title="Checkbox"
        preview={
          <Checkbox
            label="Accept Terms"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        code={`<Checkbox label="Accept Terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} />`}
        variants={<Checkbox label="Subscribe" />}
      />
    ),
    Datepicker: (
      <ComponentShowcase
        title="Datepicker"
        preview={<Datepicker value={date} onChange={setDate} />}
        code={`<Datepicker value={date} onChange={setDate} />`}
        variants={
          <Datepicker value={date} onChange={setDate} minDate={new Date()} />
        }
      />
    ),
    Dropdown: (
      <ComponentShowcase
        title="Dropdown"
        preview={
          <Dropdown
            options={["Option 1", "Option 2", "Option 3"]}
            selected={selected}
            onSelect={setSelected}
          />
        }
        code={`<Dropdown options={["Option 1", "Option 2", "Option 3"]} selected={selected} onSelect={setSelected} />`}
        variants={
          <Dropdown
            options={["A", "B", "C"]}
            selected={selected}
            onSelect={setSelected}
          />
        }
      />
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
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 py-4 z-50 px-20 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="https://druxui.s3.ap-south-1.amazonaws.com/just-logo.png"
            alt="Drux UI Logo"
            className="h-8"
          />
          <span className="text-lg font-semibold">Drux UI</span>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-sm border border-gray-200">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-transparent w-full focus:outline-none text-sm"
            />
            <span className="text-xs text-black ml-2 hidden sm:inline w-25 border border-gray-200 rounded px-2 py-0.5">
              ⌘K / Ctrl K
            </span>
          </div>

          {filteredResults.length > 0 && (
            <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredResults.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => handleSelect(item.key)}
                >
                  <span className="font-medium">{item.key}</span>{" "}
                  <span className="text-gray-400">({item.type})</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2 sm:mt-0">
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
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full transition-all"
          >
            {theme === "light" ? (
              <FiMoon size={24} className="text-gray-800" />
            ) : (
              <FiSun size={24} className="text-yellow-400" />
            )}
          </button>
        </div>
      </header>

      <div className="flex h-screen bg-gray-100 px-20">
        <aside
          className={`py-20 border-l border-r border-dotted border-gray-300 shadow-none p-6 transition-all duration-300 h-screen overflow-y-auto scrollbar-hide ${isSidebarOpen ? "w-64" : "w-20"}`}
        >
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="cursor-pointer mb-2 py-2  text-black rounded flex items-center"
          >
            {isSidebarOpen ? (
              <FiChevronLeft size={20} />
            ) : (
              <FiChevronRight size={20} />
            )}
          </button>
          {isSidebarOpen && (
            <>
              <h2 className="text-xl font-semibold mb-4">Introduction</h2>
              <ul className="space-y-2 mb-4">
                {Object.keys(introduction).map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => setSelectedComponent(key)}
                      className={`block p-2 w-full text-left rounded ${selectedComponent === key ? "bg-black text-white" : "hover:bg-gray-200"}`}
                    >
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
              <h2 className="text-xl font-semibold mb-4">Components</h2>
              <ul className="space-y-2">
                {Object.keys(components).map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => setSelectedComponent(key)}
                      className={`block p-2 w-full text-left rounded ${selectedComponent === key ? "bg-black text-white" : "hover:bg-gray-200"}`}
                    >
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
        <main className="flex-1 p-6 overflow-auto relative scrollbar-hide py-20 border-r border-dotted border-gray-300">
          {introduction[selectedComponent] || components[selectedComponent]}
        </main>
      </div>
    </>
  );
}

export default App;
