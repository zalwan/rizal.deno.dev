"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  // WhatsApp details
  const phoneNumber = "6285813095235";

  // State management
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState({
    name: false,
    message: false,
  });

  // Validation
  const isNameValid = name.trim().length >= 2;
  const isMessageValid = message.trim().length >= 10;
  const isFormValid = isNameValid && isMessageValid;

  const generateWhatsAppLink = () => {
    const formattedMessage = `Hello, my name is ${name.trim()}. ${message.trim()}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
  };

  const handleBlur = (field: "name" | "message") => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="wrapper px-4 py-8 md:py-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Get in touch with us directly through WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* WhatsApp Contact Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-green-500" />
                WhatsApp Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name*</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={
                    isTouched.name && !isNameValid ? "border-red-500" : ""
                  }
                />
                {isTouched.name && !isNameValid && (
                  <p className="text-sm text-red-500">
                    Please enter at least 2 characters
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message*</Label>
                <Textarea
                  id="message"
                  placeholder="I'd like to discuss..."
                  className={`min-h-[120px] ${isTouched.message && !isMessageValid ? "border-red-500" : ""}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => handleBlur("message")}
                />
                {isTouched.message && !isMessageValid && (
                  <p className="text-sm text-red-500">
                    Message must be at least 10 characters
                  </p>
                )}
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h3 className="mb-2 font-medium">Message Preview:</h3>
                <p className="text-muted-foreground text-sm">
                  {isNameValid && isMessageValid
                    ? `Hello, my name is ${name}. ${message}`
                    : "Complete the form to see message preview"}
                </p>
              </div>

              <Button
                asChild
                className={`w-full ${isFormValid ? "bg-green-600 hover:bg-green-700" : "cursor-not-allowed bg-gray-400"}`}
                disabled={!isFormValid}
              >
                <Link
                  href={isFormValid ? generateWhatsAppLink() : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!isFormValid}
                  onClick={(e) => !isFormValid && e.preventDefault()}
                  className={!isFormValid ? "pointer-events-none" : ""}
                >
                  {isFormValid
                    ? "Send via WhatsApp"
                    : "Please complete all fields"}
                </Link>
              </Button>

              <div className="text-muted-foreground text-sm">
                <p>* Required fields</p>
                <p className="mt-2">Or contact us directly:</p>
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  https://wa.me/{phoneNumber}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info and Map */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-muted flex h-64 items-center justify-center rounded-lg">
              <div className="p-4 text-center">
                <MapPin className="text-muted-foreground mx-auto mb-2 h-12 w-12" />
                <p className="text-muted-foreground">
                  Location map will appear here
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Our Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-medium">Phone / WhatsApp</p>
                    <p className="text-muted-foreground">+{phoneNumber}</p>
                    <Link
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-green-600 hover:underline"
                    >
                      Start chat now
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-medium">Business Address</p>
                    <p className="text-muted-foreground">
                      123 Business Avenue
                      <br />
                      City, State 12345
                      <br />
                      Country
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
