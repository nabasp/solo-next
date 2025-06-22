import * as React from "react";

const footerLinks = [
  {
    heading: "Products",
    links: [
      { label: "Agent Stacks", muted: true },
      { label: "Agent Store" },
      { label: "Agent Foundry" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Agent Studio" },
      { label: "Knowledge Studio" },
      { label: "Skill Studio" },
      { label: "Canvas Studio" },
      { label: "Intelligence Studio" },
    ],
  },
  {
    heading: "Solo For",
    links: [
      { label: "Individuals" },
      { label: "Small Businesses" },
      { label: "Enterprises", muted: true },
    ],
  },
  {
    heading: "For Teams",
    links: [
      { label: "Revenue Stack" },
      { label: "Operations Stack", muted: true },
      { label: "Marketing Stack", muted: true },
      { label: "Product Stack", muted: true },
      { label: "HR Stack", muted: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About" },
      { label: "Careers" },
      { label: "Blog" },
      { label: "Customers" },
      { label: "Press Kit/Brand" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-footer-bg)] py-5 px-9 xl:py-[7.5rem] xl:px-[9.75rem]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="uppercase text-xs font-bold tracking-widest mb-3 text-[var(--color-footer-text)]">
              {col.heading}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li
                  key={link.label}
                  className={
                    link.muted
                      ? "text-[var(--color-footer-text)] opacity-30 text-base font-medium cursor-default"
                      : "text-[var(--color-footer-text)] text-base font-medium hover:opacity-80 transition cursor-pointer"
                  }
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
