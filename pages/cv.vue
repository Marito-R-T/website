<template>
  <div class="space-y-6">
    <!-- Header Bento Card -->
    <BentoCard color="coral">
      <!-- Responsive Top Strip: Zero overlap on mobile -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-black/10 pb-3 dark:border-white/10">
        <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/80 px-3 py-1 font-mono text-xs font-bold text-black dark:border-white/20 dark:bg-black/40 dark:text-white">
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Mario Moisés Ramírez Tobar</span>
        </div>
        <span class="neo-stamp bg-white text-black shrink-0">
          {{ $t('CVBadge') || 'CV' }}
        </span>
      </div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="min-w-0">
          <h1 class="font-display text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight">
            {{ $t('CVHeroRole') }}
          </h1>
          <p class="mt-3 text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-200 max-w-3xl leading-relaxed">
            {{ $t('CVHeroDesc') }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2.5 shrink-0">
          <a
            href="mailto:mariomoises20008@gmail.com"
            class="neo-btn !bg-white !text-black"
          >
            <svg class="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{{ $t('Contact') }}</span>
          </a>
          <a
            href="https://linkedin.com/in/marito-r-t"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn !bg-black !text-white dark:!bg-white dark:!text-black"
          >
            <span>LinkedIn</span>
            <span class="font-mono text-xs">↗</span>
          </a>
          <a
            href="https://github.com/Marito-R-T"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn !bg-white !text-black"
          >
            <span>GitHub</span>
            <span class="font-mono text-xs">↗</span>
          </a>
        </div>
      </div>
    </BentoCard>

    <!-- Main Grid: Experiencia & Educación/Idiomas -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Experiencia Laboral (7 cols) -->
      <div class="lg:col-span-7 space-y-4">
        <h2 class="font-display text-2xl font-extrabold text-black dark:text-white flex items-center gap-2">
          <span>{{ $t('WorkExperienceTitle') }}</span>
        </h2>

        <!-- 1. MC2 (Current) -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2.5 dark:border-white/10">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="neo-stamp bg-[#FBE795] text-black shrink-0">ACTUAL</span>
                <h3 class="font-display text-base sm:text-lg font-extrabold text-black dark:text-white">
                  {{ $t('MC2Role') }}
                </h3>
              </div>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#7A9CFF] mt-0.5">
                {{ $t('MC2Company') }}
              </p>
            </div>
            <span class="neo-badge neo-badge--butter self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
              {{ $t('MC2Period') }}
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('MC2Desc') }}
          </p>
          <div class="mt-3.5 flex flex-wrap gap-1.5">
            <span class="neo-badge neo-badge--sm neo-badge--butter">#VoiceAIAgents</span>
            <span class="neo-badge neo-badge--sm neo-badge--butter">#ElevenLabs</span>
            <span class="neo-badge neo-badge--sm neo-badge--sage">#PromptEngineering</span>
            <span class="neo-badge neo-badge--sm neo-badge--cobalt">#FullStack</span>
            <span class="neo-badge neo-badge--sm neo-badge--coral">#Telemetry</span>
          </div>
        </BentoCard>

        <!-- 2. Steamops -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2.5 dark:border-white/10">
            <div>
              <h3 class="font-display text-base sm:text-lg font-extrabold text-black dark:text-white">
                {{ $t('SteamopsRole') }}
              </h3>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#7A9CFF] mt-0.5">
                {{ $t('SteamopsCompany') }}
              </p>
            </div>
            <span class="neo-badge neo-badge--coral self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
              {{ $t('SteamopsPeriod') }}
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('SteamopsDesc') }}
          </p>
          <div class="mt-3.5 flex flex-wrap gap-1.5">
            <span class="neo-badge neo-badge--sm neo-badge--coral">#Python</span>
            <span class="neo-badge neo-badge--sm neo-badge--butter">#AWS</span>
            <span class="neo-badge neo-badge--sm neo-badge--sage">#EventDriven</span>
            <span class="neo-badge neo-badge--sm neo-badge--cobalt">#Serverless</span>
            <span class="neo-badge neo-badge--sm">#CICD</span>
          </div>
        </BentoCard>

        <!-- 3. University Professor (CUNOC) -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2.5 dark:border-white/10">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="neo-stamp bg-[#FBE795] text-black shrink-0">ACTUAL</span>
                <h3 class="font-display text-base sm:text-lg font-extrabold text-black dark:text-white">
                  {{ $t('ProfessorRole') }}
                </h3>
              </div>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#7A9CFF] mt-0.5">
                {{ $t('ProfessorCompany') }}
              </p>
            </div>
            <span class="neo-badge neo-badge--sage self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
              {{ $t('ProfessorPeriod') }}
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('ProfessorDesc') }}
          </p>
          <div class="mt-3.5 flex flex-wrap gap-1.5">
            <span class="neo-badge neo-badge--sm neo-badge--sage">#DataStructures</span>
            <span class="neo-badge neo-badge--sm neo-badge--butter">#Compilers</span>
            <span class="neo-badge neo-badge--sm neo-badge--cobalt">#Algorithms</span>
            <span class="neo-badge neo-badge--sm">#Pedagogy</span>
          </div>
        </BentoCard>

        <!-- 4. DUIN -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2.5 dark:border-white/10">
            <div>
              <h3 class="font-display text-base sm:text-lg font-extrabold text-black dark:text-white">
                {{ $t('DuinRole') }}
              </h3>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#7A9CFF] mt-0.5">
                {{ $t('DuinCompany') }}
              </p>
            </div>
            <span class="neo-badge neo-badge--cobalt self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
              {{ $t('DuinPeriod') }}
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('DuinDesc') }}
          </p>
          <div class="mt-3.5 flex flex-wrap gap-1.5">
            <span class="neo-badge neo-badge--sm neo-badge--cobalt">#ETL/ELT</span>
            <span class="neo-badge neo-badge--sm neo-badge--butter">#Python</span>
            <span class="neo-badge neo-badge--sm neo-badge--sage">#MongoDB</span>
            <span class="neo-badge neo-badge--sm neo-badge--coral">#Redis</span>
            <span class="neo-badge neo-badge--sm">#PostgreSQL</span>
          </div>
        </BentoCard>

        <!-- 5. Nabenik -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2.5 dark:border-white/10">
            <div>
              <h3 class="font-display text-base sm:text-lg font-extrabold text-black dark:text-white">
                {{ $t('NabenikRole') }}
              </h3>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#7A9CFF] mt-0.5">
                {{ $t('NabenikCompany') }}
              </p>
            </div>
            <span class="neo-badge self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
              {{ $t('NabenikPeriod') }}
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('NabenikDesc') }}
          </p>
          <div class="mt-3.5 flex flex-wrap gap-1.5">
            <span class="neo-badge neo-badge--sm neo-badge--cobalt">#Go</span>
            <span class="neo-badge neo-badge--sm neo-badge--coral">#JavaSpringBoot</span>
            <span class="neo-badge neo-badge--sm neo-badge--butter">#GraphQL</span>
            <span class="neo-badge neo-badge--sm neo-badge--sage">#Kubernetes</span>
            <span class="neo-badge neo-badge--sm">#ArgoCD</span>
          </div>
        </BentoCard>
      </div>

      <!-- Educación & Idiomas (5 cols) -->
      <div class="lg:col-span-5 space-y-4">
        <h2 class="font-display text-2xl font-extrabold text-black dark:text-white flex items-center gap-2">
          <span>{{ $t('EducationTitle') }}</span>
        </h2>

        <!-- Master's Degree (Cum Laude) -->
        <BentoCard color="sage">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-2 dark:border-white/10">
            <span class="neo-stamp bg-[#FBE795] text-black shrink-0">{{ $t('MasterHonors') }}</span>
            <span class="font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300">{{ $t('MasterPeriod') }}</span>
          </div>
          <h3 class="mt-2.5 font-display text-lg font-extrabold text-black dark:text-white leading-tight">
            {{ $t('MasterDegree') }}
          </h3>
          <p class="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">
            {{ $t('MasterSpecialty') }}
          </p>
          <p class="mt-2.5 text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {{ $t('MasterDesc') }}
          </p>
        </BentoCard>

        <!-- B.S. Systems Engineering -->
        <BentoCard color="butter">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-2 dark:border-white/10">
            <span class="neo-stamp bg-white text-black shrink-0">{{ $t('EngineeringPeriod') }}</span>
            <span class="font-mono text-[11px] font-extrabold text-black">CUNOC - USAC</span>
          </div>
          <h3 class="mt-2.5 font-display text-lg font-extrabold text-black dark:text-white leading-tight">
            {{ $t('EngineeringDegree') }}
          </h3>
          <p class="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">
            ★ {{ $t('EngineeringHonors') }}
          </p>
          <p class="mt-2 text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {{ $t('EngineeringDesc') }}
          </p>
        </BentoCard>

        <!-- Certificaciones y Honores -->
        <BentoCard color="white">
          <h3 class="font-mono text-xs font-extrabold uppercase text-neutral-500 mb-3">
            {{ $t('AchievementsTitle') }}
          </h3>
          <ul class="space-y-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-200">
            <li class="flex items-start gap-2">
              <span class="text-amber-500 font-bold shrink-0">★</span>
              <span>{{ $t('CertNvidia') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-500 font-bold shrink-0">★</span>
              <span>{{ $t('CertTecmilenio') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-500 font-bold shrink-0">★</span>
              <span>{{ $t('CertMath') }}</span>
            </li>
          </ul>
        </BentoCard>

        <!-- Idiomas (Languages) -->
        <BentoCard color="coral">
          <h3 class="font-mono text-xs font-extrabold uppercase text-neutral-900 dark:text-neutral-100 mb-3">
            {{ $t('LanguagesSpokenTitle') }}
          </h3>
          <div class="space-y-2">
            <div class="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl border border-black bg-white/80 dark:border-white dark:bg-black/40">
              <span class="font-sans text-xs font-bold text-black dark:text-white">{{ $t('SpanishLevel') }}</span>
              <span class="neo-stamp bg-[#C6D8C4] text-black shrink-0">NATIVO</span>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl border border-black bg-white/80 dark:border-white dark:bg-black/40">
              <span class="font-sans text-xs font-bold text-black dark:text-white">{{ $t('EnglishLevel') }}</span>
              <span class="neo-stamp bg-[#FBE795] text-black shrink-0">B2</span>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>

    <!-- Skills Técnicas & Soft Skills Grid (NO REFERENCES) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Technical Skills (7 cols) -->
      <BentoCard color="white" custom-class="lg:col-span-7">
        <h2 class="font-display text-xl font-extrabold text-black dark:text-white mb-4">
          {{ $t('SkillsTitle') }}
        </h2>
        <div class="space-y-4">
          <!-- Lenguajes Principales -->
          <div>
            <span class="font-mono text-xs font-extrabold text-neutral-500 uppercase">{{ $t('LanguagesCategory') }}:</span>
            <div class="mt-1.5 flex flex-wrap gap-2">
              <span class="neo-badge neo-badge--butter">TypeScript / JavaScript</span>
              <span class="neo-badge neo-badge--coral">Python (4+ yrs)</span>
              <span class="neo-badge neo-badge--cobalt">Go</span>
              <span class="neo-badge neo-badge--sage">Java</span>
              <span class="neo-badge">C / C++</span>
              <span class="neo-badge">SQL & R</span>
            </div>
          </div>

          <!-- IA & Voice Agents -->
          <div>
            <span class="font-mono text-xs font-extrabold text-neutral-500 uppercase">{{ $t('AICategory') }}:</span>
            <div class="mt-1.5 flex flex-wrap gap-2">
              <span class="neo-badge neo-badge--butter">ElevenLabs</span>
              <span class="neo-badge neo-badge--sage">Voice AI Agents</span>
              <span class="neo-badge neo-badge--coral">Autonomous AI Agents</span>
              <span class="neo-badge neo-badge--cobalt">Prompt Engineering</span>
              <span class="neo-badge">LLM Integration</span>
              <span class="neo-badge">AI Telemetry & Analytics</span>
            </div>
          </div>

          <!-- Data Science & ETL -->
          <div>
            <span class="font-mono text-xs font-extrabold text-neutral-500 uppercase">{{ $t('DataCategory') }}:</span>
            <div class="mt-1.5 flex flex-wrap gap-2">
              <span class="neo-badge neo-badge--cobalt">ETL / ELT Pipelines</span>
              <span class="neo-badge neo-badge--butter">Data Modeling & Processing</span>
              <span class="neo-badge neo-badge--sage">Pandas & Scientific Python</span>
              <span class="neo-badge">Decision Proposals / Data Strategy</span>
            </div>
          </div>

          <!-- Cloud, DevOps & Backend -->
          <div>
            <span class="font-mono text-xs font-extrabold text-neutral-500 uppercase">{{ $t('CloudCategory') }}:</span>
            <div class="mt-1.5 flex flex-wrap gap-2">
              <span class="neo-badge neo-badge--coral">AWS (Lambda, S3, API Gateway, EventBridge)</span>
              <span class="neo-badge neo-badge--sage">Kubernetes</span>
              <span class="neo-badge neo-badge--cobalt">Docker</span>
              <span class="neo-badge neo-badge--butter">ArgoCD</span>
              <span class="neo-badge">PostgreSQL</span>
              <span class="neo-badge">Redis</span>
              <span class="neo-badge">MongoDB</span>
              <span class="neo-badge">GraphQL & REST APIs</span>
            </div>
          </div>

          <!-- Frontend -->
          <div>
            <span class="font-mono text-xs font-extrabold text-neutral-500 uppercase">{{ $t('FrontendCategory') }}:</span>
            <div class="mt-1.5 flex flex-wrap gap-2">
              <span class="neo-badge neo-badge--sage">Vue.js / Nuxt 3</span>
              <span class="neo-badge neo-badge--coral">Angular</span>
              <span class="neo-badge neo-badge--butter">Tailwind CSS & SCSS</span>
              <span class="neo-badge">Reveal.js</span>
            </div>
          </div>
        </div>
      </BentoCard>

      <!-- Soft Skills & Leadership (5 cols) -->
      <BentoCard color="white" custom-class="lg:col-span-5 flex flex-col justify-between">
        <div>
          <h2 class="font-display text-xl font-extrabold text-black dark:text-white mb-2">
            {{ $t('SoftSkillsTitle') }}
          </h2>
          <p class="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
            Competencias de comunicación, liderazgo y colaboración técnica en equipo:
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-2.5 rounded-xl border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-[#1C201A]">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#FBE795] font-mono text-xs font-bold text-black border border-black">
                01
              </span>
              <p class="text-xs font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {{ $t('SoftSkill1') }}
              </p>
            </div>

            <div class="flex items-start gap-3 p-2.5 rounded-xl border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-[#1C201A]">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#C6D8C4] font-mono text-xs font-bold text-black border border-black">
                02
              </span>
              <p class="text-xs font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {{ $t('SoftSkill2') }}
              </p>
            </div>

            <div class="flex items-start gap-3 p-2.5 rounded-xl border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-[#1C201A]">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#F4B6A6] font-mono text-xs font-bold text-black border border-black">
                03
              </span>
              <p class="text-xs font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {{ $t('SoftSkill3') }}
              </p>
            </div>

            <div class="flex items-start gap-3 p-2.5 rounded-xl border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-[#1C201A]">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#B8C9F8] font-mono text-xs font-bold text-black border border-black">
                04
              </span>
              <p class="text-xs font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {{ $t('SoftSkill4') }}
              </p>
            </div>

            <div class="flex items-start gap-3 p-2.5 rounded-xl border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-[#1C201A]">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#B5EAD7] font-mono text-xs font-bold text-black border border-black">
                05
              </span>
              <p class="text-xs font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {{ $t('SoftSkill5') }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
          <span>+5 AÑOS DE EXPERIENCIA</span>
          <span class="font-bold text-black dark:text-white">LEADERSHIP & AGILITY</span>
        </div>
      </BentoCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from '~/components/bento/BentoCard.vue'
</script>