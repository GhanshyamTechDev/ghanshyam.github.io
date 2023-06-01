type Props = {
  noPadding?: boolean;
};

const Footer: React.FC<Props> = ({ noPadding = false }) => {
  return (
    <footer
      className={`${noPadding ? "pb-4" : "pb-24"} md:pb-4 text-center mt-auto`}
    >
      <div className="flex justify-center space-x-12 mb-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            title={social.title}
            target="_blank"
            className="transform scale-150 md:scale-125 link-outline" rel="noreferrer"
          >
            {social.svg}
          </a>
        ))}
      </div>
      <div>
        Coded with <span className="sr-only">love</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-1 inline-block mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>{" "}
        by Ghanshyam
      </div>
    </footer>
  );
};

const socialLinks = [
  
  {
    id: 1,
    title: "Ghanshyam LinkedIn Profile",
    link: "https://www.linkedin.com/in/ghanshyam-dhadange-62a345152/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
      </svg>
    ),
  },
  
  {
    id: 2,
    title: "Ghanshyam Profile on Facebook",
    link: "https://www.facebook.com/ghanshyamdadange/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
      </svg>
    ),
  },
];

export default Footer;
