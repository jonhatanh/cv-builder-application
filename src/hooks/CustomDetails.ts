import { useContext } from "react";
import {
} from "../contexts/PersonalDetailsProvider";
import { EducationContext, EducationDispatchContext, ExperienceContext, ExperienceDispatchContext, OthersContext, OthersDispatchContext } from "../contexts/CustomDetailsProvider";


export function useEducation() {
  return useContext(EducationContext);
}
export function useEducationDispatch() {
  return useContext(EducationDispatchContext);
}
export function useExperience() {
  return useContext(ExperienceContext);
}
export function useExperienceDispatch() {
  return useContext(ExperienceDispatchContext);
}
export function useOthers() {
  return useContext(OthersContext);
}
export function useOthersDispatch() {
  return useContext(OthersDispatchContext);
}

