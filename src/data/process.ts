import {
  ChartNoAxesColumnIncreasing,
  Code2,
  FileText,
  Headphones,
  Layers,
  LayoutGrid,
  MessageCircle,
  Monitor,
  Palette,
  Rocket,
  Settings,
  Target,
  type LucideIcon,
} from "lucide-react";

export type ProcessFeature = {
  label: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: string;
  alt: string;
  outline: string[];
  features: ProcessFeature[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business goals, challenges, and requirements.",
    icon: "/assets/JADE_Our_Process_SVGs/discover.svg",
    alt: "Origami magnifying glass illustration",
    outline: [
      "M37 49 L55 29 L87 29 L107 49 L107 80 L87 101 L55 101 L35 80 Z",
      "M92 87 L128 123 L113 138 L77 102 Z",
    ],
    features: [
      { label: "Consultation", icon: MessageCircle },
      { label: "Requirements Analysis", icon: FileText },
      { label: "Define Goals", icon: Target },
    ],
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft a tailored solution and modern UX for your business.",
    icon: "/assets/JADE_Our_Process_SVGs/design.svg",
    alt: "Origami pencil illustration",
    outline: [
      "M98 40 L110 27 L129 45 L117 57 Z",
      "M40 111 L98 40 L117 57 L58 127 L31 137 Z",
    ],
    features: [
      { label: "Wireframing", icon: LayoutGrid },
      { label: "UI/UX Design", icon: Palette },
      { label: "System Planning", icon: Layers },
    ],
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team builds, tests, and refines your software with best practices.",
    icon: "/assets/JADE_Our_Process_SVGs/develop.svg",
    alt: "Origami code brackets illustration",
    outline: [
      "M52 45 L22 78 L52 110 L63 95 L44 78 L63 60 Z",
      "M108 45 L138 78 L108 110 L97 95 L116 78 L97 60 Z",
      "M88 31 L102 36 L73 126 L59 121 Z",
    ],
    features: [
      { label: "Clean & Scalable Code", icon: Code2 },
      { label: "Testing & QA", icon: Settings },
      { label: "Integrations", icon: Monitor },
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your solution and provide ongoing support for your growth.",
    icon: "/assets/JADE_Our_Process_SVGs/launch.svg",
    alt: "Origami paper airplane illustration",
    outline: ["M16 83 L139 27 L110 135 L79 99 L55 127 L56 95 Z"],
    features: [
      { label: "Deployment", icon: Rocket },
      { label: "Training & Support", icon: Headphones },
      { label: "Continuous Improvements", icon: ChartNoAxesColumnIncreasing },
    ],
  },
];