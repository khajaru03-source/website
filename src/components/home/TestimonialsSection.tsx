import React from "react";
import { Quote } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const sampleTestimonials = [
    {
      quote: t.testimonials.t1.quote,
      clientType: t.testimonials.t1.client,
      location: t.testimonials.t1.location,
    },
    {
      quote: t.testimonials.t2.quote,
      clientType: t.testimonials.t2.client,
      location: t.testimonials.t2.location,
    },
    {
      quote: t.testimonials.t3.quote,
      clientType: t.testimonials.t3.client,
      location: t.testimonials.t3.location,
    },
  ];

  return (
    <section className="py-20 bg-[#161411] border-t border-[#24201A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
            <span>{t.testimonials.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F7F4EE]">
            {t.testimonials.heading}
          </h2>
          <p className="text-xs text-[#A8A29A] font-light">
            {t.testimonials.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#11100E] p-8 border border-[#2B2620]/60 relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#C6A15B]/20 mb-4" />
              
              <p className="text-sm text-[#D5CEBF] font-serif-luxury italic leading-relaxed mb-6">
                “{item.quote}”
              </p>

              <div className="pt-4 border-t border-[#24201A]">
                <span className="block text-xs font-semibold text-[#E5CC91]">
                  {item.clientType}
                </span>
                <span className="text-[11px] text-[#A8A29A]">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="text-[11px] text-[#A8A29A]/70 uppercase tracking-widest">
            {t.testimonials.disclaimer}
          </span>
        </div>

      </div>
    </section>
  );
};
