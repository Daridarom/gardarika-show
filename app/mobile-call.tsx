"use client";

import { useEffect, useState } from "react";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MobileCall() {
  const [heroPassed, setHeroPassed] = useState(false);
  const [contactReached, setContactReached] = useState(false);

  useEffect(() => {
    const primaryButton = document.getElementById("hero-primary-cta");
    const contacts = document.getElementById("contacts");
    if (!primaryButton || !contacts) return;

    const heroObserver = new IntersectionObserver(([entry]) => {
      setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    });

    const contactObserver = new IntersectionObserver(([entry]) => {
      setContactReached(
        entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight * 0.84,
      );
    }, { rootMargin: "0px 0px -16% 0px" });

    heroObserver.observe(primaryButton);
    contactObserver.observe(contacts);

    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const visible = heroPassed && !contactReached;

  return (
    <a
      className={`mobile-call ${visible ? "mobile-call-visible" : ""}`}
      href="tel:+79990330688"
      aria-label="Заказать шоу по телефону"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Заказать шоу <ArrowIcon />
    </a>
  );
}
