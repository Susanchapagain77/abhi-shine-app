import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["info@abhidhgroup.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+977-9841080407", "+977-9801110981"],
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Nardevi, Kathmandu, Nepal"],
  },
];

const Contact = () => {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="space-y-24 pt-28">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-[#eef2ff] to-background" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-[-220px] h-[320px] w-[380px] -rotate-12 rounded-full bg-primary/25 blur-[110px]" />
            <div className="absolute top-36 right-[-210px] h-[420px] w-[500px] rotate-6 rounded-full bg-primary/15 blur-[130px]" />
          </div>
          <div className="container relative z-10 mx-auto px-6 py-20">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Contact Abhidh Group
              </div>
              <h1 className="text-balance text-4xl font-semibold text-slate-900 md:text-5xl">
                Let’s build the future together.
              </h1>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Share your challenge, and our team will connect you with the right experts from Abhidh Academy or Abhidh Creative to make progress faster.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="border border-slate-200 bg-white/85 shadow-sm backdrop-blur">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-slate-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-slate-200 bg-white/90 shadow-lg backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
                <p className="mt-2 text-sm text-slate-600">
                  We aim to respond within one business day. Tell us how we can help and we’ll take it from there.
                </p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full name</FormLabel>
                            <FormControl>
                              <Input placeholder="Alex Sharma" autoComplete="name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@company.com" autoComplete="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+977-9800000000" autoComplete="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea rows={6} placeholder="Tell us about your project or training requirement." className="resize-y" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-primary px-6 py-6 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(33,65,165,0.55)] hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

