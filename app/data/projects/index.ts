import { agricultureVictoria } from "./agriculture-victoria";
import { businessVictoria } from "./business-victoria";
import { outdoorRecreationVictoria } from "./outdoor-recreation-victoria";
import { penrithCityCouncil } from "./penrith-city-council";
import { localCouncilsSA } from "./local-councils-sa";

export const projects = {
  "agriculture-victoria": agricultureVictoria,
  "business-victoria": businessVictoria,
  "outdoor-recreation-victoria": outdoorRecreationVictoria,
  "penrith-city-council": penrithCityCouncil,
  "local-councils-sa": localCouncilsSA,
} as const;
