import { Instagram } from "lucide-react";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Instagram,
};

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass glass-hover hover:text-cyan transition-colors"
            aria-label={social.platform}
          >
            {Icon && <Icon size={18} />}
          </a>
        );
      })}
    </div>
  );
}
