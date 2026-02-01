import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().max(1000).optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const interestOptions = [
  "Career Counseling",
  "Course Selection",
  "College Admission",
  "Nursing Admission",
  "Study Abroad",
  "Resume & Interview Support",
  "Other",
];

interface EnquiryFormProps {
  variant?: "default" | "compact";
}

export function EnquiryForm({ variant = "default" }: EnquiryFormProps) {
  const [selectedInterest, setSelectedInterest] = useState("");
  
  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: EnquiryFormData) => {
      const { error } = await supabase.from("enquiries").insert([{
        name: data.name,
        email: data.email,
        phone: data.phone,
        interest: data.interest,
        message: data.message || null,
      }]);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Enquiry submitted successfully! We'll contact you soon.");
      form.reset();
      setSelectedInterest("");
    },
    onError: () => {
      toast.error("Failed to submit enquiry. Please try again.");
    },
  });

  const onSubmit = (data: EnquiryFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className={variant === "compact" ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <div>
          <Input
            placeholder="Your Name *"
            {...form.register("name")}
            className="h-12"
          />
          {form.formState.errors.name && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            placeholder="Email Address *"
            type="email"
            {...form.register("email")}
            className="h-12"
          />
          {form.formState.errors.email && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div className={variant === "compact" ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <div>
          <Input
            placeholder="Phone Number *"
            type="tel"
            {...form.register("phone")}
            className="h-12"
          />
          {form.formState.errors.phone && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>
          )}
        </div>
        <div>
          <Select
            value={selectedInterest}
            onValueChange={(value) => {
              setSelectedInterest(value);
              form.setValue("interest", value);
            }}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Interested In *" />
            </SelectTrigger>
            <SelectContent>
              {interestOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.interest && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.interest.message}</p>
          )}
        </div>
      </div>

      <div>
        <Textarea
          placeholder="Your Message (Optional)"
          {...form.register("message")}
          className="min-h-[100px] resize-none"
        />
        {form.formState.errors.message && (
          <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Enquiry
          </>
        )}
      </Button>
    </form>
  );
}
