"use client";

import * as React from "react";

import { Button } from "@/components/ui/Button";

export function WaitlistForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">(
    "idle",
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("done");
      setEmail("");
    }, 450);
  }

  if (status === "done") {
    return (
      <p
        className="desquite-fade-up p text-pretty text-accent-11"
        role="status"
        aria-live="polite"
      >
        Gracias. Te avisaremos cuando la obra esté lista.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="desquite-fade-up-delay-2 flex w-full max-w-md flex-col gap-1 sm:flex-row sm:items-center"
      noValidate
    >
      <label className="sr-only" htmlFor="waitlist-email">
        Correo electrónico
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="tu@correo.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-4 min-w-0 flex-1 border-0 bg-gray-3 px-2 text-gray-12 placeholder:text-gray-11 focus:outline focus:outline-2 focus:outline-accent-9"
        disabled={status === "loading"}
      />
      <Button type="submit" size="md" isLoading={status === "loading"}>
        Unirme a la lista
      </Button>
    </form>
  );
}
