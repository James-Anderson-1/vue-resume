import { defineStore } from 'pinia';
import type { Resume } from '../models/Resume';
/** Resume files */
import enUS from '@/assets/json/resume.en.json';
import ptBR from '@/assets/json/resume.pt.json';

const languages = [
  { code: 'en-US', data: enUS },
  { code: 'pt-BR', data: ptBR },
];

export const useResumeStore = defineStore('resume', {
  state: () => {
    return {
      resume: languages[0].data as Resume,
    };
  },
  actions: {
    loadResume() {
      if ('locale' in localStorage) {
        const selected = languages.find((lang) => lang.code == localStorage.locale)?.data;
        if (selected) this.resume = selected;
      }
    },
  },
});
