"use client";

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
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import chartIcon from "../../assets/icons/chart.svg";
import magnifyingGlass from "../../assets/icons/magnifyingGlass.svg";
import user from "../../assets/icons/user.svg";
import medal from "../../assets/icons/medal.svg";
import shield from "../../assets/icons/shieldCheck.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { UploadButton } from "../uploadthing/uploadthing";
import { toast } from "sonner";
import { BASE_URL } from "@/utils/constant";

const scheduleFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "Please enter your first name")
    .max(50, "First name must be under 50 characters"),
  lastName: z
    .string()
    .min(2, "Please enter your last name")
    .max(50, "Last name must be under 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  jobRole: z.string().min(2, "Please select a job role"),
  resume: z.any(),
  hiringReason: z.string().optional(),
});

const jobRoles = [
  {
    value: "digital marketing executive",
    label: "Digital Marketing Executive",
  },
  {
    value: "content writer",
    label: "Content Writer",
  },
  {
    value: "social media manager",
    label: "Social Media Manager",
  },
  {
    value: "account manager",
    label: "Account Manager",
  },
  {
    value: "project manager",
    label: "Project Manager",
  },
  {
    value: "business development executive",
    label: "Business Development Executive",
  },
  {
    value: "sales executive",
    label: "Sales Executive",
  },
  {
    value: "customer support executive",
    label: "Customer Support Executive",
  },
  {
    value: "hr executive",
    label: "HR Executive",
  },
  {
    value: "finance executive",
    label: "Finance Executive",
  },
  {
    value: "admin executive",
    label: "Admin Executive",
  },
  {
    value: "office assistant",
    label: "Office Assistant",
  },
];

const CareerForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string>("");

  const scheduleForm = useForm<z.infer<typeof scheduleFormSchema>>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      jobRole: "",
      resume: "",
      hiringReason: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof scheduleFormSchema>) => {
    if (!resumeUrl) {
      toast.error("Please upload your resume!.");
      return;
    }
    values.resume = resumeUrl;
    console.log("values", values);
    setLoading(true);
    bookMeeting(values)
      .then(() => {
        setLoading(false);
        setResumeUrl("");
        scheduleForm.reset();
      })
      .catch((error) => {
        console.error("Error booking meeting:", error);
        setLoading(false);
      });
  };

const bookMeeting = async (values: any) => {
  try {
    const payload = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phoneNumber,
      role: values.jobRole,
      message: values.hiringReason,
      resume: values.resume, // optional — if your backend supports it
    };

    const response = await fetch(`${BASE_URL}/api/application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Server error");
    }

    toast.success("🎉 We have received your application!");
    setLoading(false);
    scheduleForm.reset();
    setResumeUrl("");
  } catch (error: any) {
    console.error("Error submitting form:", error);
    toast.error(error.message || "Failed to submit application.");
    setLoading(false);
  }
};
 

  return (
   <section className="w-full px-4 md:px-8 max-w-screen-xl mx-auto py-20 text-left">
  <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-10 border border-white/20">
    <p className="text-3xl font-bold text-gray-800">
      Interested? <span className="text-app">Let&apos;s Talk</span>
    </p>
    <p className="text-sm text-zinc-600 mt-2">
      Enter your details and we will reach out to you.
    </p>

    <Form {...scheduleForm}>
      <form
        onSubmit={scheduleForm.handleSubmit(handleSubmit)}
        className="w-full mt-8 grid gap-6"
      >
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={scheduleForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">First Name*</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Rohan"
                    {...field}
                    className="rounded-lg h-12 focus:ring-2 focus:ring-app focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={scheduleForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Last Name*</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Biswas"
                    {...field}
                    className="rounded-lg h-12 focus:ring-2 focus:ring-app focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={scheduleForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                    className="rounded-lg h-12 focus:ring-2 focus:ring-app focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={scheduleForm.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Phone Number*</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+91 7980066405"
                    {...field}
                    className="rounded-lg h-12 focus:ring-2 focus:ring-app focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Role & Resume */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={scheduleForm.control}
            name="jobRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Choose a Role*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="rounded-lg h-12 focus:ring-2 focus:ring-app focus:outline-none">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-lg">
                    {jobRoles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={scheduleForm.control}
            name="resume"
            render={() => (
              <FormItem>
                <FormLabel className="text-gray-700">Upload Resume*</FormLabel>
                <div className="flex gap-4 items-center">
                  <UploadButton
                    className="rounded-lg text-sm w-36 ut-button:bg-app ut-button:rounded-lg ut-button:shadow-md"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      setResumeUrl(res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                  <FormLabel className="text-sm text-zinc-600">
                    {resumeUrl}
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Hiring Reason */}
        <FormField
          control={scheduleForm.control}
          name="hiringReason"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">
                Why should we hire you?
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here"
                  {...field}
                  className="rounded-lg min-h-[120px] focus:ring-2 focus:ring-app focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-fit mt-4 bg-app text-white px-6 py-3 rounded-lg hover:bg-app/90 hover:shadow-lg transition-all duration-300"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-6 w-6 mr-2" />
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

export default CareerForm;
