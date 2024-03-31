import React from "react";
import Faq from "./Faq";

const Faqs = () => {
  return (
    <div
      id="faqs"
      className="w-full flex flex-col items-center mx-auto xl:max-w-screen-lg px-4 xl:px-36 pb-12"
    >
      <h5 className="w-full mb-2 text-[28px] md:text-[28px] xl:text-[45px] text-center font-bold tracking-tight text-primary">
        Faqs
      </h5>
      <div className="w-full">
        <Faq
          title="What locations in San Francisco do you offer for photoshoots?"
          description="We offer photoshoots at a variety of iconic locations throughout San Francisco, including the Golden Gate Bridge, Lombard Street, Fisherman's Wharf, and more. Additionally, we can recommend hidden gems and lesser-known spots for a unique experience tailored to your preferences."
        />
        <hr />
        <Faq
          title="How far in advance should I book my photoshoot?"
          description="We recommend booking your photoshoot at least 2-4 weeks in advance to ensure availability, especially during peak tourist seasons. However, we understand that plans can change, so we'll do our best to accommodate last-minute bookings whenever possible."
        />{" "}
        <hr />
        <Faq
          title="What's included in your photography packages?"
          description="Our photography packages typically include a specified number of hours of shooting time, a professional photographer, high-resolution edited photos, and digital downloads or prints, depending on the package you choose. We also offer customization options to tailor the package to your needs."
        />{" "}
        <hr />
        <Faq
          title="Can I request specific poses or styles for my photoshoot?"
          description="Absolutely! We encourage our clients to share their vision and preferences with us. Whether you're looking for candid shots, posed portraits, or a specific theme, our photographers will work closely with you to capture the style and mood you desire."
        />{" "}
        <hr />
        <Faq
          title="How soon will I receive my edited photos after the photoshoot?"
          description="We strive to deliver your edited photos promptly while ensuring the highest quality. Typically, you can expect to receive your edited photos within 1-2 weeks after the photoshoot. However, this timeline may vary depending on factors such as the volume of photos and any additional editing requests. We'll keep you informed throughout the process to ensure your satisfaction."
        />
      </div>
    </div>
  );
};

export default Faqs;
