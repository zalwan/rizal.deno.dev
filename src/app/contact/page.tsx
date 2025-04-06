"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import data from "@/data";

export default function ContactPage() {
  const { contactData, availabilityData, contactMethods } = data.contact;
  // State management
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState({
    name: false,
    message: false,
  });

  // Validation
  const isNameValid = name.trim().length >= 3;
  const isMessageValid = message.trim().length >= 10;
  const isFormValid = isNameValid && isMessageValid;

  const generateWhatsAppLink = () => {
    const formattedMessage = `Hello, my name is ${name.trim()}. ${message.trim()}`;
    return `https://wa.me/${contactData.phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
  };

  const handleBlur = (field: "name" | "message") => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="wrapper px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Feel free to reach out through WhatsApp or other channels
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
                    Please enter at least 3 characters
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
                <p className="mt-2">Or contact directly:</p>
                <Link
                  href={`https://wa.me/${contactData.phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  https://wa.me/{contactData.phoneNumber}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Personal Contact Information */}
          <div className="space-y-6">
            {/* Availability Section */}
            <Card>
              <CardHeader>
                <CardTitle>My Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {availabilityData.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <item.icon className="text-primary mt-0.5 h-5 w-5" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <method.icon className="text-primary mt-0.5 h-5 w-5" />
                    <div>
                      <p className="font-medium">{method.title}</p>
                      <p className="text-muted-foreground">{method.value}</p>
                      <Link
                        href={method.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm hover:underline"
                      >
                        {method.actionText}
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
