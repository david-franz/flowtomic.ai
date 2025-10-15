import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Layers, Workflow, Cpu, Boxes, Code, Share2, GitBranch, Download, Command, ArrowUpRight, Activity, Globe, BookOpen } from "lucide-react";

type FlowOffering = {
  name: string;
  tagline: string;
  icon: ReactNode;
  chips: string[];
  link: string;
};

export default function FlowtomicBrandUniverseV2() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'd') setDark((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const products: FlowOffering[] = [];

  const released: FlowOffering[] = [
    { name: "Flowlang.dev", tagline: "A robust JVM-based, sandboxed-by-default language with a functional style and declarative task orchestration. Compiles to the portable .flow format, enabling safe, composable, and reproducible logic across the Flowtomic ecosystem.", icon: <Code className="w-5 h-5"/>, chips: ["DSL", ".flow", "Compiler"], link: "https://flowlang.dev" },
    { name: "Flowport.dev", tagline: "Gateway to leading LLM models with unified APIs, adaptive routing, and evaluation tooling for production-grade agents.", icon: <Globe className="w-5 h-5"/>, chips: ["LLM Gateway", "Routing", "Evaluation"], link: "https://flowport.dev" },
    { name: "Flowknow.dev", tagline: "Create reusable knowledge bases and automatically build optimized RAG datasets, indexes, and refresh pipelines.", icon: <BookOpen className="w-5 h-5"/>, chips: ["Knowledge", "RAG", "Automation"], link: "https://flowknow.dev" },
    { name: "Flowgraph.dev", tagline: "Visual graph builder and rendering library for constructing, editing, and visualizing intelligent flow structures in real time.", icon: <Workflow className="w-5 h-5"/>, chips: ["Graph", "Nodes", "Runtime"], link: "https://flowgraph.dev" },
    { name: "Flowform.dev", tagline: "Visual form builder and lightweight library that transforms schemas into structured, validated, and dynamic form interfaces.", icon: <Boxes className="w-5 h-5"/>, chips: ["Schemas", "Validation", "UI"], link: "https://flowform.dev" }
  ];

  const inDevelopment: FlowOffering[] = [
    { name: "Flowtool.dev", tagline: "Builder and deployment tool for creating robust agentic AI workflows — currently in development.", icon: <Cpu className="w-5 h-5"/>, chips: ["Builder", ".flow native", "Visual + Code"], link: "https://flowtool.dev" },
    { name: "Flowedit.dev", tagline: "Editor for managing and debugging .flow projects. Combines text-based development with interactive graph views.", icon: <Command className="w-5 h-5"/>, chips: ["IDE", "Debug", "Visual Edit"], link: "https://flowedit.dev" },
    { name: "Flowback.dev", tagline: "Backend SDK offering queues, workers, and event handlers to power flow-native backend systems.", icon: <Layers className="w-5 h-5"/>, chips: ["SDK", "Workers", "Queues"], link: "https://flowback.dev" },
    { name: "Flowdeploy.dev", tagline: "Deployment toolkit for packaging, testing, and deploying flows to any environment, local or cloud.", icon: <Download className="w-5 h-5"/>, chips: ["CI/CD", "Cloud", "Packages"], link: "https://flowdeploy.dev" }
  ];

  const futureRoadmap: FlowOffering[] = [
    { name: "Flowsync.dev", tagline: "Data synchronization framework for maintaining consistent state across clients, services, and agents.", icon: <GitBranch className="w-5 h-5"/>, chips: ["Sync", "Events", "CRDT"], link: "https://flowsync.dev" },
    { name: "Flowshare.dev", tagline: "Platform for sharing, versioning, and collaborating on flow assets and models.", icon: <Share2 className="w-5 h-5"/>, chips: ["Private/Public", "Teams", "Versioning"], link: "https://flowshare.dev" },
    { name: "Flowmonitor.dev", tagline: "Monitoring and observability suite for tracing, metrics, and cost tracking in production flows.", icon: <Activity className="w-5 h-5"/>, chips: ["Tracing", "Metrics", "Alerts"], link: "https://flowmonitor.dev" }
  ];

  const sectionColors = {
    released: dark ? 'border-emerald-400 bg-emerald-950/30' : 'border-emerald-400 bg-emerald-100',
    inDev: dark ? 'border-emerald-700 bg-emerald-900/20' : 'border-emerald-200 bg-emerald-50',
    future: dark ? 'border-zinc-700 bg-zinc-900/60' : 'border-zinc-200 bg-zinc-50'
  };

  const productGridLayout =
    products.length === 1
      ? 'grid w-full grid-cols-1 gap-6 max-w-xl lg:max-w-2xl'
      : products.length === 2
        ? 'grid w-full grid-cols-1 sm:grid-cols-2 gap-6'
        : 'grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-b ${dark ? 'from-zinc-950 via-black to-zinc-950 text-zinc-50' : 'from-sky-50 via-white to-fuchsia-50 text-zinc-900'}`}>
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className={`${dark ? 'opacity-20' : 'opacity-70'} absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-sky-200 via-cyan-200 to-emerald-200 blur-3xl`} />
        <div className={`${dark ? 'opacity-15' : 'opacity-50'} absolute top-1/3 right-[-8rem] h-80 w-80 rounded-full bg-gradient-to-bl from-fuchsia-200 via-violet-200 to-sky-100 blur-[120px]`} />
        <div className={`${dark ? 'opacity-15' : 'opacity-45'} absolute bottom-[-12rem] left-[18%] h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-200 via-teal-200 to-transparent blur-[140px]`} />
        <div className={`${dark ? 'opacity-20' : 'opacity-60'} absolute top-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-200 via-sky-200 to-emerald-100 blur-2xl`} />
        <div className={`${dark ? 'opacity-10' : 'opacity-40'} absolute bottom-28 right-1/4 h-56 w-56 rounded-full bg-gradient-to-br from-sky-200 via-emerald-100 to-transparent blur-[150px]`} />
      </div>
      <header className="relative">
        <div className="absolute right-6 top-6 z-10">
          <button onClick={()=>setDark(!dark)} className={`rounded-full border px-3 py-1.5 text-sm ${dark ? 'border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800' : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'} transition`}>
            {dark ? 'Light mode (D)' : 'Dark mode (D)'}
          </button>
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="flex items-center gap-3 text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className={`inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl border shadow-sm ${dark ? 'border-zinc-700 bg-zinc-900/70' : 'border-zinc-200 bg-white/80'}`}>
              <img src="/logo.ico" alt="Flowtomic logo" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
            </span>
            <span>Flowtomic</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className={`mt-4 max-w-2xl text-lg md:text-xl ${dark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            Flowtomic focuses on building and deploying robust agentic AI workflows. Every part of the ecosystem converges on the <span className="font-mono">.flow</span> format — a portable, composable, and declarative standard for defining tasks, logic, and interactions across languages, runtimes, and environments.
          </motion.p>
        </div>
      </header>

      {products.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Products</h2>
          <div className={productGridLayout}>
            {products.map((p) => (
              <ProductCard key={p.name} p={p} dark={dark} />
            ))}
          </div>
        </section>
      )}

      <section id="devtools" className="mx-auto max-w-7xl px-6 py-10 space-y-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Developer Tools (.dev)</h2>
          <p className={`${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>Core libraries and SDKs powering the Flowtomic ecosystem, grouped by release stage.</p>
        </div>

        <ToolSection title="Released" data={released} color={sectionColors.released} dark={dark} />
        <ToolSection title="In Development" data={inDevelopment} color={sectionColors.inDev} dark={dark} />
        <ToolSection title="Future Roadmap" data={futureRoadmap} color={sectionColors.future} dark={dark} />
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-16 text-sm text-center border-t border-zinc-200 dark:border-zinc-800 text-zinc-500">
        <p>All tools, languages, and runtimes in the Flowtomic ecosystem converge on the <span className="font-mono">.flow</span> standard — ensuring interoperability, clarity, and composability across every layer.</p>
      </footer>
    </div>
  );
}

type CardProps = {
  p: FlowOffering;
  dark: boolean;
};

function ProductCard({ p, dark }: CardProps) {
  return (
    <a
      key={p.name}
      href={p.link}
      className={`group flex flex-col justify-between rounded-2xl border p-5 shadow-sm hover:shadow-md transition h-full ${dark ? 'border-zinc-800 bg-zinc-900 hover:border-zinc-700' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`rounded-xl border p-2 ${dark ? 'border-zinc-700 bg-zinc-800' : 'border-zinc-200 bg-gradient-to-br from-cyan-50 to-emerald-50'}`}>{p.icon}</div>
            <h3 className={`text-lg font-semibold tracking-tight ${dark ? 'text-zinc-50' : ''}`}>{p.name}</h3>
          </div>
          <ArrowUpRight className={`w-5 h-5 transition ${dark ? 'text-zinc-500 group-hover:text-zinc-200' : 'text-zinc-400 group-hover:text-zinc-900'}`}/>
        </div>
        <p className={`mt-2 text-sm min-h-[40px] ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{p.tagline}</p>
      </div>
      <div className="mt-auto pt-4 flex flex-wrap gap-2 items-end">
        {p.chips.map((c) => (
          <span key={c} className={`rounded-full border px-2.5 py-1 text-xs ${dark ? 'border-zinc-700 bg-zinc-800 text-zinc-300' : 'border-zinc-200 bg-gradient-to-br from-zinc-50 to-white text-zinc-600'}`}>{c}</span>
        ))}
      </div>
    </a>
  );
}

type ToolSectionProps = {
  title: string;
  data: FlowOffering[];
  color: string;
  dark: boolean;
};

function ToolSection({ title, data, color, dark }: ToolSectionProps) {
  const gridLayout =
    data.length >= 4
      ? 'grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
      : data.length === 3
        ? 'grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
        : data.length === 2
          ? 'grid w-full grid-cols-1 sm:grid-cols-2 gap-6'
          : 'grid w-full grid-cols-1 gap-6 max-w-xl mx-auto';

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className={`rounded-2xl border p-4 ${color}`}>
        <div className={gridLayout}>
          {data.map((p) => (
            <ToolCard key={p.name} p={p} dark={dark} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolCard({ p, dark }: CardProps) {
  return (
    <a
      href={p.link}
      className={`group flex flex-col justify-between rounded-2xl border p-5 shadow-sm hover:shadow-md transition h-full ${dark ? 'border-zinc-800 bg-zinc-900 hover:border-zinc-700' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`rounded-xl border p-2 ${dark ? 'border-zinc-700 bg-zinc-800' : 'border-zinc-200 bg-gradient-to-br from-cyan-50 to-emerald-50'}`}>{p.icon}</div>
            <h3 className={`text-base font-semibold tracking-tight ${dark ? 'text-zinc-50' : ''}`}>{p.name}</h3>
          </div>
          <ArrowUpRight className={`w-5 h-5 transition ${dark ? 'text-zinc-500 group-hover:text-zinc-200' : 'text-zinc-400 group-hover:text-zinc-900'}`}/>
        </div>
        <p className={`mt-2 text-sm min-h-[40px] ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{p.tagline}</p>
      </div>
      <div className="mt-auto pt-4 flex flex-wrap gap-2 items-end">
        {p.chips.map((c) => (
          <span key={c} className={`rounded-full border px-2.5 py-1 text-xs ${dark ? 'border-zinc-700 bg-zinc-800 text-zinc-300' : 'border-zinc-200 bg-gradient-to-br from-zinc-50 to-white text-zinc-600'}`}>{c}</span>
        ))}
      </div>
    </a>
  );
}
