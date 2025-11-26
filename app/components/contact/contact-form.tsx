"use client";
import axios from "axios";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import pillIcon from "../../assets/icons/pill.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import map from "../../assets/images/loc.png";
import { BASE_URL } from "@/utils/constant";
// import Map from "../map/map";
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(50, "Full name must be under 50 characters"),
  companyName: z
    .string()
    .min(2, "Please enter your company's name")
    .max(50, "Company's name must be under 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  topic: z.string().min(2, "Please select a topic"),   // <-- NEW FIELD
  userType: z.string().min(2, "Please select a type"), // <-- NEW FIELD
  message: z.string().optional(),
});


const topics = [
  {
    value: "product",
    label: "Product Inquiry",
  },
  {
    value: "retai",
    label: "Retail Onboarding",
  },
  {
    value: "wholesale",
    label: "Wholesale Onboarding",
  },
  {
    value: "genaral",
    label: "Genaral Inquiry",
  },
  {
    value: "Careers",
    label: "Careers",
  },

  {
    value: "other",
    label: "Other",
  },
];

const professions = [
  {
    value: "retailer",
    label: "Retailer",
  },
  {
    value: "wholesaler",
    label: "Wholesaler",
  },
  {
    value: "e-pharmacy",
    label: "E-Pharmacy",
  },
  {
    value: "other",
    label: "Other",
  },
];

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      topic: "",      // <-- NEW
      userType: "",   // <-- NEW
      message: "",
    },

  });

  const handleSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log("values", values);
    setLoading(true);
    submitContact(values)
      .then(() => {
        setLoading(false);
        contactForm.reset();
      })
      .catch((error) => {
        console.error("Error submitting contact form:", error);
        setLoading(false);
      });
  };

  const submitContact = async (values: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/inquiry`, {
        full_name: values.fullName,
        company_name: values.companyName,
        email: values.email,
        phone: values.phoneNumber,
        topic: values.topic,
        type: values.userType,
        message: values.message,
      }, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      toast.success("Inquiry submitted successfully!");
      setLoading(false);
      contactForm.reset();
    } catch (error: any) {
      console.error("Submit error:", error.response?.data || error.message);
      setLoading(false);

      const errMsg = error.response?.data?.message || "Failed to submit form. Please try again.";
      toast.error(errMsg);
    }
  };




  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Info Section */}
      <div className="flex flex-col justify-start">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Contact Tejas Pharma</h2>
        <p className="text-gray-500 text-base mb-6">Our team would love to hear from you.</p>

        <div className="flex flex-col gap-4 text-sm text-gray-700 mb-10">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={20} />
            <Link
              href="mailto:sales@tejaspharma.in"
              className="hover:text-app transition"
              aria-label="Send email to sales@tejaspharma.in"
            >
              sales@tejaspharma.in
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" size={20} />
            <a
              href="tel:+917980066405"
              className="hover:text-blue-800 transition"
              aria-label="Call +91 7980066405"
            >
              +91 7980066405
            </a>
          </div>
          <Link
            href="https://maps.app.goo.gl/qkytt3vQVdHP6FVD8?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-left hover:text-blue-700 transition"
          >
            <MapPin className="text-blue-600 mt-1" size={20} />
            <div className="text-sm leading-relaxed">
              <strong>TEJAS PHARMA</strong>
              <br />
              Floor No.: Ground Floor<br />
              Building No./Flat No.: 153F<br />
              Name Of The Premises/Building: NA<br />
              Road/Street: S M BOSE ROAD<br />
              Locality/Sub Locality: AGARPARA<br />
              City/Town/Village: Panihati<br />
              District: North Twenty Four Parganas<br />
              State: West Bengal<br />
              PIN Code: 700114<br />
              GST No.: 19AAQFT0688M1Z7
            </div>
          </Link>
        </div>

        <Image
          src={map}
          alt="Google Map Location"
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-100 p-8 rounded-2xl shadow-xl">
        <Form {...contactForm}>
          <form
            onSubmit={contactForm.handleSubmit(handleSubmit)}
            className="grid gap-6"
            id="form-filed-1"
          >
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={contactForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Full Name"
                        {...field}
                        className="input-style"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Company name"
                        {...field}
                        className="input-style"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@gmail.com"
                        {...field}
                        className="input-style"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number*</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+91 9876543210"
                        {...field}
                        className="input-style"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={contactForm.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose a topic*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="input-style">
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {topics.map((topic) => (
                        <SelectItem key={topic.value} value={topic.value}>
                          {topic.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={contactForm.control}
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which best describes you?*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 md:grid-cols-2 gap-2"
                    >
                      {professions.map((profession, idx) => (
                        <FormItem
                          className="flex items-center space-x-3"
                          key={idx}
                        >
                          <FormControl>
                            <RadioGroupItem value={profession.value} />
                          </FormControl>
                          <FormLabel className="font-normal">{profession.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here..."
                      {...field}
                      className="input-style min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-fit px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Please wait...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>

  );
};

export default ContactForm;
