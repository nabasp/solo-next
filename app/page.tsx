import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import HoverCard from "@/components/card/card";
import SimpleCard from "@/components/SimpleCard";
import { LinkCard } from "@/components/card/linkCard";
import { FeatureCard } from "@/components/card/FeatureCard";
import { FeatureIconDisplay } from "@/components/card/FeatureIconDisplay";
import Footer from "@/components/Footer";
import Image from "next/image";
import UnifiedWorkspaceSection from "@/components/section/UnifiedWorkspaceSection";
import SectionHeader from "@/components/SectionHeader";

// Replace all color constants with CSS variables
const BG_DARK = "var(--color-bg-dark)";
const BG_LIGHT = "var(--color-bg-light)";

export default function Home() {
  return (
    <div className="flex w-full">
      <main style={{}} className="flex w-full flex-col">
        <Section backgroundColor={BG_LIGHT}>
          <div className="flex flex-col lg:flex-row h-[31.75rem] mx-[1rem] xl:mx-[4rem] gap-4 xl:gap-[8.438rem] p-4">
            <div className="flex flex-col items-start gap-[1.5rem] justify-center">
              <code
                style={{
                  color: "var(--color-label)",
                  backgroundColor: "#0000000A",
                }}
                className="rounded px-[0.375rem] py-[0.25rem] font-mono font-bold uppercase text-base tracking-widest leading-[1.25rem]"
              >
                REVENUE STACK
              </code>
              <div className="flex flex-col items-start">
                <h1
                  style={{
                    fontFamily: "DegularDisplay",
                    color: "var(--color-label)",
                  }}
                  className="font-degular-display text-[3rem] leading-[3rem] sm:text-[4rem] sm:leading-[3.5rem] md:text-[5rem] md:leading-[4.5rem] lg:text-[6rem] lg:leading-[5.25rem] font-bold"
                >
                  Intelligent CRM, purpose-built to
                  <span style={{ color: "#2D2926" }}> close more</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[1.5rem] justify-center">
              <p
                style={{ color: "var(--color-desc)" }}
                className="font-manrope text-[1.5rem] leading-[2.25rem] font-medium sm:text-[1.625rem] sm:leading-[2.5rem] md:text-[1.75rem] md:leading-[2.75rem]"
              >
                Powerful, flexible and easy-to-use, Revenue Stack makes it easy
                for opinionated teams to close more on autopilot.
              </p>
              <Button
                style={{
                  color: "var(--color-bg-light)",
                  backgroundColor: "var(--color-bg-dark)",
                }}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </Section>

        <Section bgImageSrc="/background/sea.png">
          <div className="flex justify-center items-center py-5 px-9 xl:px-[10.25rem] xl:py-[4rem]">
            <Image
              src="/dashboard/d1.png"
              alt="dashboard "
              layout="responsive"
              width={300}
              height={173}
              className="rounded-[0.75rem] border-[6px] border-white/65"
            />
          </div>
        </Section>

        <UnifiedWorkspaceSection
          mode="LIGHT"
          sectionLabel="UNIFIED WORKSPACE"
          heading="Everything you need to close more revenue"
          description="Enter meetings armed with critical lead and account information in a single interface. Add tasks, create opportunities and automate follow-ups without having to switch to another screen."
          accordionItems={[
            {
              title: "End-to-End Lifecycle Management",
              content:
                "Track your entire revenue lifecycle from lead generation to account closure in a unified workspace.",
            },
            {
              title: "Live Account Overview and Smart Insights",
              content:
                "Stay on top of accounts, tracking everything from activity and tickets to revenue and risks in one single view.",
            },
            {
              title: "AI-Generated Cheat Sheet",
              content:
                "Get a cheat sheet before every meeting enriched with context from past conversations, activities and best practices.",
            },
            {
              title: "Task Management and Collaboration",
              content:
                "Always know what’s next with a schedule view of tasks prioritized with AI. Zoom out to plan with a calendar view.",
            },
          ]}
          videoBgImage="oil_paint"
        />

        <UnifiedWorkspaceSection
          mode="DARK"
          sectionLabel="INTELLIGENT AUTOMATIONS"
          heading="Make more space for revenue critical tasks"
          description="Automate the busywork out of your sales process with Solo’s smart logging, update on the fly interfaces and automation platform, so that your team can focus on what they do best, talking to more customers."
          accordionItems={[
            {
              title: "Quick Updates for Deals and Tasks",
              content:
                "Get a cheat sheet before every meeting enriched with context from past conversations, activities and best practices.",
            },
            {
              title: "Quick Commands and References",
              content:
                "Create and reference opportunities, tasks and meetings in the flow without having to leave your screen",
            },
            {
              title: "Automation with AI",
              content:
                "Track your entire revenue lifecycle from lead generation to account closure in a unified workspace.",
            },
            {
              title: "One-Click Enrichment",
              content:
                "Always know what’s next with a schedule view of tasks prioritized with AI. Zoom out to plan with a calendar view.",
            },
          ]}
          videoBgImage="book"
        />

        <UnifiedWorkspaceSection
          mode="LIGHT"
          sectionLabel="Insights and Analytics"
          heading="Never leave revenue on the table"
          description="Get real-time sales insights to course correct on revenue targets with intelligent, actionable and customisable forecasting and reporting."
          accordionItems={[
            {
              title: "Intelligent Forecasts",
              content:
                "Track your entire revenue lifecycle from lead generation to account closure in a unified workspace.",
            },
            {
              title: "Unified Revenue Reporting and Analytics",
              content:
                "Get deep pipeline insights to know which marketing channels are working, and which deals close the fastest to optimise for successful and shorter sales cycles",
            },
            {
              title: "Live Performance and Workload Tracking",
              content:
                "Get a cheat sheet before every meeting enriched with context from past conversations, activities and best practices.",
            },
            {
              title: "Proactive Insights",
              content:
                "Always know what’s next with a schedule view of tasks prioritized with AI. Zoom out to plan with a calendar view.",
            },
          ]}
          videoBgImage="sea"
        />

        <Section backgroundColor={BG_DARK}>
          <div
            className={`flex flex-col gap-12 py-5 px-9 xl:py-[7.5rem] xl:px-[9.75rem]`}
          >
            <SectionHeader
              mode="DARK"
              sectionLabel="SEAMLESS MIGRATION"
              heading={<>Get going in minutes, not months</>}
              description={
                <>
                  Craft your bespoke Revenue Stack with an AI Builder assistant.
                  <br /> No code required.
                </>
              }
            />
            <div className={`flex flex-col bg-[#3D3834] rounded-[0.75rem] p-2`}>
              <div className="bg-cover bg-center bg-[url('/background/sea.png')] xl:p-[2.75rem] rounded-[.5rem] p-6">
                <Image
                  src="/dashboard/d2.png"
                  alt="dashboard"
                  width={1024}
                  height={640}
                  className="rounded-[0.75rem] border-[6px] border-white/65"
                  layout="responsive"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-6">
                <SimpleCard
                  title="White glove onboarding"
                  description="Personalised onboarding for your entire tool and process stack onto Solo for free."
                />
                <SimpleCard
                  title="24x7 real-time support"
                  description="We work closely with our Beta customers and will always be available to them."
                />
                <SimpleCard
                  title="Goes with your stack"
                  description="Solo plays well with your tool stack with over 500+ integrations."
                />
              </div>
            </div>
          </div>
        </Section>

        <Section backgroundColor={BG_LIGHT}>
          <div className="flex flex-col gap-12 py-5 px-9 xl:py-[7.5rem] xl:px-[9.75rem]">
            <SectionHeader
              mode="LIGHT"
              sectionLabel="Solo AI"
              heading={
                <>
                  AI superpowers for <br /> your entire team
                </>
              }
              description={
                <>
                  Solo AI is trained and keeps learning from your Revenue
                  <br /> Stack to help you increase conversion and cut the{" "}
                  <br />
                  busywork across your revenue lifecycle
                </>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <HoverCard
                videoSrc="/dashboard/AI_1.mp4"
                title="Prospecting"
                description="Find and add accounts and stakeholders in your TAM with a single prompt."
              />
              <HoverCard
                videoSrc="/dashboard/AI_2.mp4"
                title="Reach-outs"
                description="Find and add accounts and stakeholders in your TAM with a single prompt."
              />
              <HoverCard
                videoSrc="/dashboard/AI_3.mp4"
                title="Pipeline management"
                description="Find and add accounts and stakeholders in your TAM with a single prompt."
              />
              <HoverCard
                videoSrc="/dashboard/AI_4.mp4"
                title="Account Management"
                description="Find and add accounts and stakeholders in your TAM with a single prompt."
              />
              <HoverCard
                videoSrc="/dashboard/AI_5.mp4"
                title="Forecasting"
                description="Find and add accounts and stakeholders in your TAM with a single prompt."
              />
              <HoverCard
                videoSrc="/dashboard/AI_6.mp4"
                title="Analytics and Reporting"
                description="Find and add accounts and stakeholders in your TAM with a single prompt."
              />
            </div>
          </div>
        </Section>

        <Section backgroundColor={BG_DARK}>
          <div className="flex flex-col gap-12 py-5 px-9 xl:py-[7.5rem] xl:px-[9.75rem]">
            <SectionHeader
              mode="DARK"
              sectionLabel="UNDER THE HOOD"
              heading={
                <>
                  Built on strong <br />
                  foundations
                </>
              }
              description={
                <>
                  The Revenue Stack is built with the powerful and connected
                  building blocks of an intelligent platform. <br />
                  Extend your stack to serve the unique processes of your
                  revenue teams, and beyond.
                </>
              }
            />

            <div
              className="gap-6"
              style={{
                display: "flex",
                overflowX: "scroll",
                overflowY: "hidden",
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none",
              }}
            >
              <LinkCard
                title="PLATFORM"
                description="Easy-to-use, powerful agent modelling platform"
                imageSrc="/dashboard/d-bend1.png"
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
              <LinkCard
                title="TECHNOLOGY"
                description="Powering the next era of symbiotic computing"
                imageSrc="/dashboard/d-bend2.png"
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            </div>
          </div>
        </Section>

        <Section backgroundColor={BG_LIGHT}>
          <div className="flex flex-col sm:flex-row gap-4 py-5 px-9 xl:py-[7.5rem] xl:px-[9.75rem]">
            <FeatureCard
              icon={<FeatureIconDisplay type="platform" />}
              label="Cross Platform Support"
              title={
                <>
                  Get going on web, <br /> mobile or desktop
                </>
              }
              description={
                "Runs on all devices with dedicated apps for iOS, Android and iPadOS"
              }
            />
            <FeatureCard
              icon={<FeatureIconDisplay type="security" />}
              label="Enterprise-grade security"
              title={
                <>
                  Security first.
                  <br />
                  And second.
                </>
              }
              description={
                "Your data is never shared without your consent and will never be used for model training"
              }
            />
          </div>
        </Section>
        <Section backgroundColor={BG_LIGHT}>
          <Footer />
        </Section>
      </main>
    </div>
  );
}
