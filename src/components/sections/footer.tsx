import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/jd.webp"
                alt="Jacob Detailing"
                width={48}
                height={48}
                className="object-contain mr-2 dark:bg-inherit bg-neutral-200/80 rounded-full"
              />
              <h3 className="text-xl font-bold">Jacob Detailing</h3>
            </div>
            <p className="dark:text-neutral-400 text-neutral-600">
              Profesjonalny auto detailing, ochrona lakieru, czyszczenie wnętrz
              i pielęgnacja samochodów.
            </p>
          </div>
          <div className="text-right">
            <h4 className="text-lg font-semibold my-2 mb-4">
              Znajdziesz nas na
            </h4>
            <div className="flex space-x-4 items-center justify-end">
              {/* Facebook Icon */}
              <Link
                href="https://www.facebook.com/profile.php?id=61574533026006"
                className="transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg
                  className="h-10 w-10 text-blue-500 hover:text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {/* Instagram Icon */}
              <Link
                href="https://www.instagram.com/jacob.detailing/"
                className="transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  className="h-10 w-10 text-fuchsia-500 hover:text-fuchsia-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {/* Google Icon (standardized size) */}
              <Link
                href="https://share.google/CPN8SN9hAIOrur2lc"
                className="transition-colors flex items-center justify-center"
                aria-label="Google"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.5 24.5c0-1.63-.15-3.19-.43-4.69H24v9.09h13.22c-.57 3.09-2.29 5.7-4.89 7.46v6.19h7.89C44.91 38.09 47.5 31.89 47.5 24.5z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24 48c6.48 0 11.92-2.15 15.89-5.85l-7.89-6.19c-2.19 1.47-5 2.34-8 2.34-6.15 0-11.36-4.15-13.23-9.72H2.65v6.28C6.59 43.07 14.56 48 24 48z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.77 28.58A14.77 14.77 0 019.09 24c0-1.58.28-3.12.77-4.58V13.14H2.65A23.97 23.97 0 000 24c0 3.78.91 7.36 2.65 10.86l8.12-6.28z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M24 9.5c3.53 0 6.68 1.22 9.17 3.62l6.87-6.87C35.92 2.15 30.48 0 24 0 14.56 0 6.59 4.93 2.65 13.14l8.12 6.28C12.64 13.65 17.85 9.5 24 9.5z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-neutral-600 border-neutral-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="dark:text-neutral-400 text-neutral-600">
            © {new Date().getFullYear()} Jacob Detailing.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <span className="dark:text-neutral-400 text-neutral-600 hover:text-white text-sm transition-colors">
                  Powered by{" "}
                  <a href="https://github.com/ikarpiatkowski" target="_blank">
                    Ikar
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
