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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider font-medium">FAQ Melon</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2331] tracking-tight">
            Your Questions
            <br />
            Answered
          </h1>
        </div>

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-[#5B94E5] transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                  {item.answer || "Content goes here."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[#1c2331] mb-4">
              Can&rsquo;t find what you&rsquo;re looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you with any questions or concerns you might have.
            </p>
            <a 
              href="mailto:support@melon.com" 
              className="inline-flex items-center px-6 py-3 bg-[#5B94E5] text-white rounded-lg font-medium hover:bg-[#4A7ABF] transition-colors"
            >
              Reach out to support
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}