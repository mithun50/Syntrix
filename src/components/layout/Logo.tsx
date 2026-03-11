import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/assets/logo/syntrix-logo.jpg"
        alt="Syntrix"
        width={32}
        height={32}
        className="rounded-lg group-hover:scale-105 transition-transform duration-500"
      />
      <span className="text-lg font-bold font-[var(--font-heading)] tracking-tight text-foreground">
        Syntrix
      </span>
    </Link>
  );
}
