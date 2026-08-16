/* AWAITING FINAL COPY */
import React from "react";
import type { Metadata } from "next";
import PlaceholderGuideShell, { generatePlaceholderMetadata } from "@/components/placeholder-guide-shell";

const ID = "western-aspects";

export async function generateMetadata(): Promise<Metadata> {
  return generatePlaceholderMetadata(ID);
}

export default function WesternAspectsPage() {
  /* AWAITING FINAL COPY */
  return <PlaceholderGuideShell id={ID} />;
}
