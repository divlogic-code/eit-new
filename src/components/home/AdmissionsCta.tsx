
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { BrandMark } from "@/components/layout/BrandMark";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { admissionsCta } from "@/data/home/admissions";

export function AdmissionsCta() {
  const {
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    links,
    contactAction,
  } = admissionsCta;

  return (
    <section
      aria-label="Admissions"
      data-scroll-section="cta"
      className="eit-admissions"
    >
      <Container>
        <div className="eit-admissions__shell">
          {/* Decorative pastel bars */}
          <div
            className="eit-admissions__art"
            aria-hidden="true"
          >
            {[1, 2, 3, 4].map((number) => (
              <span
                key={number}
                data-anim="bar"
                className={`eit-admissions__bar eit-admissions__bar--${number}`}
              />
            ))}
          </div>

          <div className="eit-admissions__layout">
            {/* Main content */}
            <div className="eit-admissions__content">
              <p
                data-anim="heading"
                className="eit-admissions__eyebrow"
              >
                <BrandMark className="size-6" />
                {eyebrow}
              </p>

              <h2
                data-anim="heading"
                className="eit-admissions__title"
              >
                <span className="eit-admissions__title-main">
                  {title[0]}
                </span>

                <span className="eit-admissions__title-accent">
                  {title[1]}
                </span>
              </h2>

              <span
                className="eit-admissions__underline"
                aria-hidden="true"
              />

              <p
                data-anim="heading"
                className="eit-admissions__description"
              >
                {description}
              </p>

              <div
                data-anim="cta-buttons"
                className="eit-admissions__actions"
              >
                <Button
                  asChild
                  size="lg"
                  className="eit-admissions__primary"
                >
                  <Link href={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight
                      size={19}
                      aria-hidden="true"
                    />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="eit-admissions__secondary"
                >
                  <Link href={secondaryAction.href}>
                    {secondaryAction.label}
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick answers */}
            <div
              data-anim="panel-right"
              className="eit-admissions__panel"
            >
              <div className="eit-admissions__panel-heading">
                <span className="eit-admissions__panel-dot" />
                <h3>Quick answers</h3>
              </div>

              <ul className="eit-admissions__links">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="eit-admissions__link"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={19}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={contactAction.href}
                className="eit-admissions__contact"
              >
                {contactAction.label}
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
