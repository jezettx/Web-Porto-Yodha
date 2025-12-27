import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center">
            <PageHeader
                title="Let’s build something that ships."
                desc="Open for collaboration on software builds and operational systems. Fast response via WhatsApp or email."
                align="center" />
            <p className="mt-4 text-sm text-white/70 text-center">
                If you have a project that needs clear execution, reliable delivery, and
                strong coordination, send the context and timeline.
            </p><div className="mt-10">
                <ContactSection />
            </div><p className="mt-8 text-xs text-white/50 text-center">
                Based in Surabaya · GMT+7
            </p></div>
    );
}
