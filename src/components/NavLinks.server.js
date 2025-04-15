// components/NavLinks.server.js
const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

export default function NavLinks() {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
                <a href={link.url} key={link.title}>
                    {link.title}
                </a>
            ))}
        </div>
    );
}
