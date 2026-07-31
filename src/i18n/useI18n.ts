import { useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import { getUi } from './ui';
import { getEducation, getExperience, getProfile, getProjects } from './content';

export function useT() {
  const { lang } = useLanguage();
  return useMemo(() => getUi(lang), [lang]);
}

export function useLocalizedContent() {
  const { lang } = useLanguage();
  return useMemo(
    () => ({
      lang,
      profile: getProfile(lang),
      projects: getProjects(lang),
      experience: getExperience(lang),
      education: getEducation(lang),
      t: getUi(lang),
    }),
    [lang]
  );
}
