import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="section container">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}