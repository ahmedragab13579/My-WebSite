import React from "react";
import {
  Server,
  Lock,
  Code,
  Database,
  Github,
  ExternalLink,
} from "lucide-react";

export const ServerIcon = (props) => <Server {...props} />;
export const LockIcon = (props) => <Lock {...props} />;
export const CodeIcon = (props) => <Code {...props} />;
export const DatabaseIcon = (props) => <Database {...props} />;
export const GithubIcon = (props) => <Github {...props} />;
export const ExternalLinkIcon = (props) => <ExternalLink {...props} />;

export default {
  ServerIcon,
  LockIcon,
  CodeIcon,
  DatabaseIcon,
  GithubIcon,
  ExternalLinkIcon,
};
