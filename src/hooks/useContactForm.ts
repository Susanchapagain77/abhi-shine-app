import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { fetchFromApi } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  subject: z.string().max(255, "Subject is too long").optional().or(z.literal("")),
  message: z.string().min(10, "Please include a bit more detail"),
});

export type ContactFormValues = z.infer<typeof schema>;

export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      await fetchFromApi("/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "group",
          name: values.name || null,
          email: values.email,
          phone: values.phone || null,
          subject: values.subject || null,
          message: values.message,
        }),
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We will respond shortly.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Unable to send message",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
  };
};

