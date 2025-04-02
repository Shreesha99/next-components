import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from "react";
import { Button } from './components/Button';
import { Accordion } from './components/Accordion';
import { Alert } from './components/Alert';
import { AlertDialog } from './components/AlertDialog';
import { Avatar } from "./components/Avatar";
import { Badge } from "./components/Badge";
import { Breadcrumb } from './components/BreadCrumb';
import { Calendar } from "./components/Calendar";
import { Checkbox } from "./components/Checkbox";
import { Datepicker } from "./components/Datepicker";
import { Dropdown } from "./components/Dropdown";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Route = createFileRoute('/')({
  component: App,
});

function ComponentShowcase({ title, preview, code, variants }) {
  const [activeTab, setActiveTab] = useState('preview');
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex border-b mb-4">
          <button className={`p-2 ${activeTab === 'preview' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('preview')}>Preview</button>
          <button className={`p-2 ml-4 ${activeTab === 'code' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('code')}>Code</button>
          <button className={`p-2 ml-4 ${activeTab === 'variants' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('variants')}>Variants</button>
        </div>
        {activeTab === 'preview' ? preview : activeTab === 'code' ? <pre className="bg-gray-100 p-2 overflow-auto text-sm"><code>{code}</code></pre> : variants}
      </div>
    </section>
  );
}

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Buttons");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const components = {
    Accordion: <ComponentShowcase title="Accordion" preview={<Accordion title="Example" variant="primary">Content</Accordion>} code={`<Accordion title="Example" variant="primary">Content</Accordion>`} variants={<Accordion title="Alternative" variant="secondary">Different Look</Accordion>} />, 
    Alerts: <ComponentShowcase title="Alerts" preview={<Alert variant="success">Success Alert</Alert>} code={`<Alert variant="success">Success Alert</Alert>`} variants={<><Alert variant="warning">Warning Alert</Alert><Alert variant="destructive">Destructive Alert</Alert></>} />, 
    AlertDialog: <ComponentShowcase 
      title="Alert Dialog" 
      preview={<><Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button><AlertDialog isOpen={isDialogOpen} title="Confirm" description="Are you sure?" onClose={() => setIsDialogOpen(false)} /></>} 
      code={`<Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>\n<AlertDialog isOpen={isDialogOpen} title="Confirm" description="Are you sure?" onClose={() => setIsDialogOpen(false)} />`} 
      variants={<><Button onClick={() => setIsDialogOpen(true)}>Trigger Danger Dialog</Button><AlertDialog isOpen={isDialogOpen} title="Danger" description="This action is irreversible!" onClose={() => setIsDialogOpen(false)} /></>} 
    />,
    Avatar: <ComponentShowcase title="Avatar" preview={<Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="md" />} code={`<Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="md" />`} variants={<><Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="lg" /><Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="xl" /></>} />, 
    Buttons: <ComponentShowcase 
    title="Buttons" 
    preview={<div className="flex space-x-2"><Button variant={'primary'}>Primary</Button><Button variant={'secondary'}>Secondary</Button></div>} 
    code={`<Button variant={'primary'}>Primary</Button>\n<Button variant={'secondary'}>Secondary</Button>`}
    variants={<div className="flex space-x-2"><Button variant={'success'}>Success</Button><Button variant={'warning'}>Warning</Button><Button variant={'destructive'}>Destructive</Button><Button variant={'outline'}>Outline</Button><Button variant={'ghost'}>Ghost</Button><Button variant={'link'}>Link</Button></div>}
  />, 
    Badges: <ComponentShowcase title="Badges" preview={<Badge text="Success" variant="success" />} code={`<Badge text="Success" variant="success" />`} variants={<><Badge text="Warning" variant="warning" /><Badge text="Danger" variant="danger" /></>} />, 
    Breadcrumb: <ComponentShowcase title="Breadcrumb" preview={<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]} />} code={`<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]} />`} variants={<Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Settings", href: "/settings" }]} separator=">" />} />,
    Calendar: <ComponentShowcase title="Calendar" preview={<Calendar />} code={`<Calendar />`} variants={<Calendar minDate={new Date()} />} />, 
    Checkbox: <ComponentShowcase title="Checkbox" preview={<Checkbox label="Accept Terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} />} code={`<Checkbox label="Accept Terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} />`} variants={<Checkbox label="Subscribe" />} />, 
    Datepicker: <ComponentShowcase title="Datepicker" preview={<Datepicker value={date} onChange={setDate} />} code={`<Datepicker value={date} onChange={setDate} />`} variants={<Datepicker value={date} onChange={setDate} minDate={new Date()} />} />, 
    Dropdown: <ComponentShowcase title="Dropdown" preview={<Dropdown options={["Option 1", "Option 2", "Option 3"]} selected={selected} onSelect={setSelected} />} code={`<Dropdown options={["Option 1", "Option 2", "Option 3"]} selected={selected} onSelect={setSelected} />`} variants={<Dropdown options={["A", "B", "C"]} selected={selected} onSelect={setSelected} />} />, 
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className={`bg-white shadow-lg p-6 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-4 p-2 bg-blue-500 text-white rounded flex items-center">
          {isSidebarOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </button>
        {isSidebarOpen && (
          <>
            <h2 className="text-xl font-semibold mb-4">Component Showcase</h2>
            <ul className="space-y-2">
              {Object.keys(components).map((key) => (
                <li key={key}>
                  <button onClick={() => setSelectedComponent(key)} className={`block p-2 w-full text-left rounded ${selectedComponent === key ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}>{key}</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {components[selectedComponent]}
      </main>
    </div>
  );
}

export default App;