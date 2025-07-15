import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log("Form submitted:", formData);

    toast({
      title: "Message Sent Successfully",
      description:
        "Thank you for your inquiry. I will respond within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: "general",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      primary: "sarojgupta1234@gmail.com",
      secondary: "Official university email",
      href: "mailto:sarojgupta1234@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone",
      primary: "+91-9425693570",
      secondary: "+91-7000696501",
      href: "tel:+919425693570",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Office Address",
      primary: "Department of Education",
      secondary: "Dr. Harisingh Gour University, Sagar (M.P.) 470001",
      href: "#",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Office Hours",
      primary: "Monday - Friday: 10:00 AM - 5:00 PM",
      secondary: "Saturday: 10:00 AM - 2:00 PM",
      href: "#",
    },
  ];

  const officeHours = [
    {
      day: "Monday - Friday",
      time: "10:00 AM - 5:00 PM",
      type: "Regular Hours",
    },
    { day: "Saturday", time: "10:00 AM - 2:00 PM", type: "Limited Hours" },
    { day: "Sunday", time: "Closed", type: "Weekend" },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "research", label: "Research Collaboration" },
    { value: "academic", label: "Academic Consultation" },
    { value: "student", label: "Student Mentorship" },
    { value: "speaking", label: "Speaking Engagement" },
    { value: "media", label: "Media & Press" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Contact Information
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I welcome opportunities for collaboration, consultation, and
              academic discourse. Please feel free to reach out for any
              professional inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-slate-700 font-medium">
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {info.primary}
                        </a>
                      ) : (
                        info.primary
                      )}
                    </p>
                    <p className="text-sm text-slate-600">{info.secondary}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-blue-600" />
                    Send a Message
                  </CardTitle>
                  <p className="text-slate-600">
                    Please fill out this form for any professional inquiries. I
                    aim to respond within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="category">Inquiry Type</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="mt-1"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours and Additional Info */}
            <div className="space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {officeHours.map((hours, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-800">
                            {hours.day}
                          </span>
                          <span className="text-slate-600">{hours.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          {hours.type}
                        </p>
                        {index < officeHours.length - 1 && (
                          <Separator className="mt-3" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>General inquiries: Within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Research collaborations: Within 48 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span>Student inquiries: Within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span>Media requests: Within 2-3 business days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Professional Consultation Available
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Educational curriculum development</li>
                    <li>• Research methodology guidance</li>
                    <li>• Academic program evaluation</li>
                    <li>• Teacher training programs</li>
                    <li>• Educational technology integration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 text-center">
                University Location
              </CardTitle>
              <p className="text-slate-600 text-center">
                Dr. Harisingh Gour University, Sagar, Madhya Pradesh
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-slate-100 rounded-lg flex items-center justify-center">
                <iframe
                className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.7932541638656!2d78.76864461105184!3d23.82594978578227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d15c01940a2b%3A0x53f0bc9db8fc188e!2sDr.%20Hari%20Singh%20Gour%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1752566270295!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
