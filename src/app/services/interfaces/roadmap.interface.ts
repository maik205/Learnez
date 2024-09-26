export interface RoadmapSkill {
  skillName: string;
  skillDescription: string;
  relatedCategories: string[];
}

export interface Roadmap {
  title: string;
  description: string;
  steps: RoadmapStep[];
  skill: RoadmapSkill;
  relatedCategories: string[];
  timeOfGeneration: number;
}

export interface RoadmapStep {
  stepName: string;
  stepDescription: string;
  relatedCategories: string[];
  isCompleted: boolean;
}
