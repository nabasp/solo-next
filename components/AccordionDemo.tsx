import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

const content_neutral_primary = "#FFF7F1";
const content_neutral_secondary = "#FCC998";

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
        <AccordionItem value={`item-${idx}`} key={idx}>
          <AccordionTrigger
            style={{ color: darkMode ? content_neutral_primary : "" }}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent
            className={`flex flex-col gap-4 text-balance`}
            style={{ color: darkMode ? content_neutral_secondary : "" }}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
