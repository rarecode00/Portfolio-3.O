import { SectionHeading } from "./about";

export default function Contact() {
  return (
    <div className="mt-10 sm:mt-16 px-4 sm:px-10 md:px-20 lg:px-40" id="contact">
      {/* Section Heading */}
      <div className="flex justify-center">
        <SectionHeading heading={"Contact"} />
      </div>

      <div
        className="flex flex-col items-center gap-4 sm:gap-6 font-sans mt-4 sm:mt-6 px-2 sm:px-4 text-center"
        id="contact"
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <img
              src="/mail.svg"
              alt="Email Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
            />
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 truncate" title="ks9192174414@gmail">
              ks9192174414@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <img
              src="/phone.svg"
              alt="Phone Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
            />
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">
              +91 8171841691
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <img
              src="/location.svg"
              alt="Location Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
            />
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">
              Hapur, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}