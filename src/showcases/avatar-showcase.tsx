import { Avatar } from "../lib/components/Avatar";
import { ComponentShowcase } from "./component-showcase";

const AvatarPreview = ({ size }: { size: "sm" | "md" | "lg" | "xl" }) => (
  <div className="flex items-center gap-3">
    <Avatar
      src={`https://i.pravatar.cc/150?img=${size === "sm" ? 1 : size === "md" ? 2 : size === "lg" ? 3 : 4}`}
      alt={`Avatar ${size}`}
      size={size}
    />
    <p className="text-sm font-medium">size="{size}"</p>
  </div>
);

const sizes = ["sm", "md", "lg", "xl"] as const;

const AvatarShowcase = () => {
  return (
    <ComponentShowcase
      title="Avatar"
      preview={
        <div className="flex justify-start">
          <Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="md" />
        </div>
      }
      code={`<Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="md" />`}
      variants={
        <div className="space-y-4">
          {sizes.map((size) => (
            <AvatarPreview key={size} size={size} />
          ))}
        </div>
      }
    />
  );
};

export default AvatarShowcase;
