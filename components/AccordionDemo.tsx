import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface AccordionItemData {
  title: string;
  content: ReactNode;
}

interface AccordionDemoProps {
  items: AccordionItemData[];
  darkMode?: boolean;
}

export default function AccordionDemo({
  items,
  darkMode = false,
}: AccordionDemoProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={items[0] ? `item-0` : undefined}
    >
      {items.map((item, idx) => (
        <AccordionItem
          value={`item-${idx}`}
          key={idx}
          className={`border-b border-b-[rgba(255,159,79,0.32)]`}
        >
          <AccordionTrigger
            style={{
              color: darkMode
                ? "rgba(255, 247, 241, 1)"
                : "rgba(45, 41, 38, 1)",
            }}
            className="font-manrope text-[0.9375rem] leading-[1.25rem] font-bold"
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent
            className={
              "font-manrope text-[0.9375rem] leading-[1.25rem] font-medium"
            }
            style={{
              color: darkMode
                ? "rgba(252, 201, 152, 0.7)"
                : "rgba(150, 147, 143, 1)",
            }}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
