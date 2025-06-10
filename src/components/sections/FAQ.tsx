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
      answer: "Melon is a data technology company that helps organizations collect, analyze, and visualize project & field data, especially geospatial data to make faster, smarter decisions. We combine mobile data collection tools, geospatial analytics, and intuitive dashboards to power your insights.",
    },
    {
      question: "What types of organizations do you work with?",
      answer: "We work with governments, development agencies, telecoms, energy companies, health programs, financial institutions, and more - any organization that needs accurate, location-based data to monitor projects, target interventions, or improve outcomes.",
    },
    {
      question: "How do you collect data from the field?",
      answer: "We deploy trained agents using our custom-built Galia by Melon mobile app. Our agents gather geotagged photos, surveys, and real-time observations even in remote or offline locations across Nigeria and beyond.",
    },
    {
      question: "Can I visualize my data on a map or dashboard?",
      answer: "Absolutely. Kajari by Melon offers interactive dashboards that show your data in real-time on maps, charts, and tables customized to your needs. You can filter by location, date, agent, and more.",
    },
    {
      question: "Where do you operate?",
      answer: "Melon operates across all 36 states of Nigeria, with a growing presence in Ghana and other West African countries. We can mobilize data agents nationwide within 48 hours.",
    },
    {
      question: "How do I get started with Melon?",
      answer: "Just reach out via our contact form or click the signup button. We'll schedule a brief discovery call to understand your needs and show you how Melon can support your project.",
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
                  {item.answer}
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