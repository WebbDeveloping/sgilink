"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, DocumentIcon } from "@heroicons/react/24/outline";
import type { SectionConfig } from "./sectionsConfig";

interface SectionMetadataProps {
  section: SectionConfig;
}

export function SectionMetadata({ section }: SectionMetadataProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 rounded-lg border border-white/8 bg-card/50 p-6 backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-white">{section.name}</h3>
            <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-brand">
              {section.layoutType}
            </span>
          </div>
          <p className="text-sm text-text-muted mb-4">{section.description}</p>
          <div className="flex items-center gap-2 text-xs text-text-subtle">
            <DocumentIcon className="h-4 w-4" />
            <code className="font-mono">{section.filePath}</code>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 flex-shrink-0 rounded-lg border border-white/8 bg-white/5 p-2 transition-colors hover:bg-white/10"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <ChevronUpIcon className="h-5 w-5 text-text-muted" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-text-muted" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-white/8">
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-text-muted">Category:</span>
              <span className="ml-2 text-text">{section.category}</span>
            </div>
            <div>
              <span className="font-medium text-text-muted">Layout Type:</span>
              <span className="ml-2 text-text">{section.layoutType}</span>
            </div>
            <div>
              <span className="font-medium text-text-muted">Component ID:</span>
              <span className="ml-2 text-text font-mono">{section.id}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
