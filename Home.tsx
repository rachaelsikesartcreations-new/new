import { Hero } from "../components/Hero";
import { Workflow } from "../components/Workflow";
import { CommandCenter } from "../components/CommandCenter";
import { RepPartnerSplit } from "../components/RepPartnerSplit";
import { AIAssistant } from "../components/AIAssistant";
import { Integrations } from "../components/Integrations";
import { Newsroom } from "../components/Newsroom";
import { FinalCTA } from "../components/FinalCTA";

export function Home() {
  return (
    <>
      <Hero />
      <Workflow />
      <CommandCenter />
      <RepPartnerSplit />
      <AIAssistant />
      <Integrations />
      <Newsroom />
      <FinalCTA />
    </>
  );
}
