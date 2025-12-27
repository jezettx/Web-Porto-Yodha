export default function ContactSection() {
    return (
        <section id="contact-actions" className="mx-auto mt-2 max-w-2xl">
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                        href="https://wa.me/6285755175145"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-medium text-blue-200 hover:bg-blue-500/30"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="mailto:yourname@email.com"
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                    >
                        Email
                    </a>
                </div>
            </section>
    );
}
