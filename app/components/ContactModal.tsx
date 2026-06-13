"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactModalContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({ open: false, setOpen: () => {} });

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    // Reset form after close animation
    setTimeout(() => {
      setFormState("idle");
      setErrorMsg("");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormState("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <ContactModalContext.Provider value={{ open, setOpen }}>
      {children}
      {open && (
        <div
          className="contact-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="contact-modal">
            <button
              className="contact-modal-close"
              onClick={handleClose}
              aria-label="Close"
            >
              ×
            </button>

            {formState === "success" ? (
              <div className="contact-modal-header" style={{ textAlign: "center", padding: "60px 20px" }}>
                <h2 className="contact-modal-title">Message sent!</h2>
                <p className="contact-modal-desc" style={{ marginTop: 16 }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
                <Button
                  style={{ marginTop: 32 }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div className="contact-modal-header">
                  <h2 className="contact-modal-title">
                    Let&apos;s make it happen.
                  </h2>
                  <p className="contact-modal-desc">
                    Tell me what you&apos;re working on and I&apos;ll get back to
                    you within 24 hours with a plan.
                  </p>
                </div>
                <div className="contact-modal-details">
                  <div className="contact-modal-detail-item">
                    <span className="contact-modal-detail-label">Email</span>
                    <a href="mailto:hello@clarkuyanguren.com">
                      hello@clarkuyanguren.com
                    </a>
                  </div>
                </div>
                <form className="contact-modal-form" onSubmit={handleSubmit}>
                  <div className="contact-modal-row">
                    <div className="contact-modal-field">
                      <Label htmlFor="modal-firstname">First Name *</Label>
                      <Input
                        type="text"
                        id="modal-firstname"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                      />
                    </div>
                    <div className="contact-modal-field">
                      <Label htmlFor="modal-lastname">Last Name</Label>
                      <Input
                        type="text"
                        id="modal-lastname"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="contact-modal-field">
                    <Label htmlFor="modal-email">Email *</Label>
                    <Input
                      type="email"
                      id="modal-email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="contact-modal-field">
                    <Label htmlFor="modal-subject">Subject</Label>
                    <Input
                      type="text"
                      id="modal-subject"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>
                  <div className="contact-modal-field">
                    <Label htmlFor="modal-message">Message *</Label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      id="modal-message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  {formState === "error" && (
                    <p
                      style={{
                        color: "#dc2626",
                        fontSize: "0.85rem",
                        marginBottom: 8,
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={formState === "loading"}
                  >
                    {formState === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}

export function ContactTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useContactModal();
  return (
    <button className={className} onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}
