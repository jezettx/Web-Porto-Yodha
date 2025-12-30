import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center">
            <PageHeader
                title="Let’s build something that ships."
                desc="For questions, ideas, or feedback, reach me via WhatsApp or email."
                align="center" />
            <p className="mt-4 text-sm text-white/70 text-center">
                If you message me, include the context and constraints so I can respond clearly.
            </p><div className="mt-10">
                <ContactSection />
            </div><p className="mt-8 text-xs text-white/50 text-center">
                Based in Surabaya · GMT+7
            </p></div>
    );
}
