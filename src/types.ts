/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic Lucide icon key
  colorClass: string; // Tailwind tint variant
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  description: string;
  avatarSeed: string; // Visual variation
  vibe: string; // Alternative spiritual title
}

export interface Nomenclature {
  term: string;
  definition: string;
  vibeColor: string; // Aesthetic vibe color
}

export interface ShroomMessage {
  id: string;
  author: string;
  content: string;
  avatarIndex: number;
  timestamp: string;
  likes: number;
}
