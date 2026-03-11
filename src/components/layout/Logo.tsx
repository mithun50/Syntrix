import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src="/assets/logo/syntrix-logo.jpg"
        alt="Syntrix"
        width={36}
        height={36}
        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-xl font-bold font-[var(--font-heading)] gradient-text">
        Syntrix
      </span>
    </Link>
  );
}
