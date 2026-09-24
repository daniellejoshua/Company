import {
  Braces,
  ClipboardList,
  Frame,
  Headset,
  Palette,
  PhoneCall,
  Plug,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ProcessFeature = {
  label: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  number: string;
  icon: string;
  alt: string;
  title: string;
  description: string;
  features: ProcessFeature[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "/assets/JADE_Our_Process_SVGs/discover.svg",
    alt: "Discover origami magnifying glass",
    title: "Discover",
    description: "We learn about your goals, challenges, and requirements.",
    features: [
      { label: "Consultation", icon: PhoneCall },
      { label: "Requirements Analysis", icon: ClipboardList },
      { label: "Define Goals", icon: Target },
    ],
  },
  {
    number: "02",
    icon: "/assets/JADE_Our_Process_SVGs/design.svg",
    alt: "Design origami pencil",
    title: "Design",
    description: "We create a tailored experience designed around your business.",
    features: [
      { label: "Wireframing", icon: Frame },
      { label: "UI/UX Design", icon: Palette },
      { label: "System Planning", icon: Workflow },
    ],
  },
  {
    number: "03",
    icon: "/assets/JADE_Our_Process_SVGs/develop.svg",
    alt: "Develop origami code brackets",
    title: "Develop",
    description: "We build, test, and refine your software with best practices.",
    features: [
      { label: "Clean & Scalable Code", icon: Braces },
      { label: "Testing & QA", icon: ShieldCheck },
      { label: "Integrations", icon: Plug },
    ],
  },
  {
    number: "04",
    icon: "/assets/JADE_Our_Process_SVGs/launch.svg",
    alt: "Launch origami paper airplane",
    title: "Launch & Support",
    description: "We deploy your solution and support you as you grow.",
    features: [
      { label: "Deployment", icon: Rocket },
      { label: "Training & Support", icon: Headset },
      { label: "Continuous Improvements", icon: TrendingUp },
    ],
  },
];