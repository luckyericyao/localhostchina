import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const variants = {
    primary:
      "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink",
    secondary:
      "border-line bg-transparent text-ink hover:border-ink hover:bg-paper",
    dark:
      "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center border px-6 text-sm transition-colors ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
