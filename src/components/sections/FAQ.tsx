import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function FAQ() {
    const faqItems = [
      {
        question: "What is Melon?",
        answer: "Melon is a powerful tool that helps organizations measure impact beyond reporting.",
      },
      {
        question: "Is Melon free for startups?",
        answer: "Yes! Melon offers a free plan for startups to get started.",
      },
      {
        question: "How does Melon work?",
        answer: "Melon integrates with your existing workflow to provide real-time impact measurement and data management.",
      },
      {
        question: "How can I get support?",
        answer: "You can reach out to our support team via the contact page or email us at support@melon.com.",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-gray-500 mb-2">FAQ Melon</p>
          <h1 className="text-5xl text-[#212631] font-bold tracking-tight">
            Your Questions
            <br />
            Answered
          </h1>
        </div>
  
        {/* Accordion Section */}
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer || "Content goes here."}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  
        {/* Contact Section */}
        <div className="mt-12">
          <p className="text-start text-[#000000]">
            Can&rsquo;t find what you&rsquo;re looking for?{" "}
            <a href="mailto:support@melon.com" className="underline font-medium">
              Reach out
            </a>
          </p>
        </div>
      </div>
    );
  }
  