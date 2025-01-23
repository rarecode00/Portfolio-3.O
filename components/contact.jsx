import { SectionHeading } from "./about";

export default function Contact() {
  return (
    <div className="mt-16 mx-40" id="contact">
      {/* Section Heading */}
      <div className="flex justify-center">
        <SectionHeading heading={"Contact"} />
      </div>

      <div
        className="flex flex-col items-center gap-6 font-sans mt-6 px-4 md:px-12 text-center"
        id="contact"
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          {/* Email */}
          <div className="flex items-center gap-4">
            <img
              src="/mail.svg"
              alt="Email Icon"
              className="w-6 h-6 object-contain"
            />
            <p              
              className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300"
            >
              ks9192174414@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <img
              src="/phone.svg"
              alt="Phone Icon"
              className="w-6 h-6 object-contain"
            />
            <p              
              className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 hover:underline"
            >
              +91 8171841691
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <img
              src="/location.svg"
              alt="Location Icon"
              className="w-6 h-6 object-contain"
            />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
              Hapur, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
