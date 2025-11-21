import React from "react";
import {
  BookOpen,
  Atom,
  Calculator,
  Cpu,
  PenTool,
  FlaskConical,
  CircuitBoard,
  Globe,
} from "lucide-react";

export function SubjectIcon({ subject, className = "w-6 h-6" }) {
  if (!subject) return <BookOpen className={className} />;

  const key = subject.toLowerCase();

  switch (key) {
    case "math":
    case "mathematics":
      return <Calculator className={className} />;

    case "science":
    case "physics":
    case "chemistry":
    case "biology":
      return <FlaskConical className={className} />;

    case "english":
      return <BookOpen className={className} />;

    case "computer":
    case "cs":
    case "cse":
    case "coding":
      return <Cpu className={className} />;

    case "electronics":
      return <CircuitBoard className={className} />;

    case "geography":
    case "social":
      return <Globe className={className} />;

    default:
      return <PenTool className={className} />;
  }
}
