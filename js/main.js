/* ============================================
   Vikas Yadav — Academic Portfolio JS
   ============================================ */

// ---------- Paper Data ----------
const PAPERS = [
  {
    id: "dnr-bench",
    title: "DNR Bench: Benchmarking Over-Reasoning in Reasoning LLMs",
    venue: "AAAI 2026",
    year: 2026,
    date: "2026",
    category: "reasoning",
    url: "https://arxiv.org/abs/2503.15793",
    image: "images/papers/dnr-bench.png",
    abstract: "Introduces DNR Bench, a benchmark specifically designed to evaluate and quantify over-reasoning behaviors in large language models, revealing critical failure modes in current reasoning systems.",
    colors: ["#6B21A8", "#7E3FBF", "#9F67E0"],
  },
  {
    id: "grammar-search",
    title: "Grammar Search for Multi-Agent Systems",
    venue: "ArXiv",
    year: 2025,
    date: "December 2025",
    category: "agents",
    url: "https://arxiv.org/abs/2512.14079",
    image: "images/papers/grammar-search.png",
    abstract: "Proposes a grammar-based search framework for discovering optimal communication and coordination protocols in multi-agent systems, enabling more efficient collaborative problem-solving.",
    colors: ["#0D9488", "#14B8A6", "#2DD4BF"],
  },
  {
    id: "arm",
    title: "ARM: Discovering Agentic Reasoning Modules for Generalizable Multi-Agent Systems",
    venue: "ArXiv",
    year: 2025,
    date: "October 2025",
    category: "agents",
    url: "https://arxiv.org/abs/2510.05746",
    image: "images/papers/arm.png",
    abstract: "Presents ARM, a framework for automatically discovering composable agentic reasoning modules that can be combined to create generalizable multi-agent systems for complex tasks.",
    colors: ["#DC2626", "#EF4444", "#F87171"],
  },
  {
    id: "apriel-nemotron",
    title: "Technical Report: Apriel-Nemotron-15B-Thinker",
    venue: "Tech Report",
    year: 2025,
    date: "August 2025",
    category: "llm",
    url: "https://huggingface.co/ServiceNow-AI/Apriel-Nemotron-15b-Thinker",
    image: "images/papers/apriel-nemotron.png",
    abstract: "Technical report on Apriel-Nemotron-15B-Thinker, a 15B parameter language model optimized for deep reasoning and thinking capabilities through advanced training methodologies.",
    colors: ["#D97706", "#F59E0B", "#FBBF24"],
  },
  {
    id: "bigcharts-r1",
    title: "BIGCHARTS-R1: Enhanced Chart Reasoning with Visual Reinforcement Finetuning",
    venue: "COLM 2025",
    year: 2025,
    date: "2025",
    category: "multimodal",
    url: "https://arxiv.org/abs/2508.09804",
    image: "images/papers/bigcharts-r1.png",
    abstract: "Introduces BIGCHARTS-R1, a vision-language model enhanced through visual reinforcement finetuning for improved chart understanding, reasoning, and question answering capabilities.",
    colors: ["#059669", "#10B981", "#34D399"],
  },
  {
    id: "multi-tag",
    title: "Multi-TAG: Scaling Math Reasoning with Multi-Tool Aggregation",
    venue: "EMNLP 2025",
    year: 2025,
    date: "2025",
    category: "reasoning",
    url: "https://arxiv.org/abs/2507.18973",
    image: "images/papers/multi-tag.png",
    abstract: "Presents Multi-TAG, a framework that scales mathematical reasoning by aggregating multiple specialized tools, demonstrating that diverse tool usage outperforms single-tool approaches.",
    colors: ["#7C3AED", "#8B5CF6", "#A78BFA"],
  },
  {
    id: "conciserl",
    title: "ConciseRL: Conciseness-Guided Reinforcement Learning for Efficient Reasoning",
    venue: "EMNLP 2025",
    year: 2025,
    date: "2025",
    category: "reasoning",
    url: "https://arxiv.org/abs/2505.17250",
    image: "images/papers/conciserl.png",
    abstract: "Proposes ConciseRL, a reinforcement learning approach that trains reasoning models to generate concise yet accurate chain-of-thought responses, reducing computational overhead.",
    colors: ["#2563EB", "#3B82F6", "#60A5FA"],
  },
  {
    id: "dynamic-notes",
    title: "Augmenting LLM Reasoning with Dynamic Notes Writing for Complex QA",
    venue: "ArXiv",
    year: 2025,
    date: "April 2025",
    category: "reasoning",
    url: "https://arxiv.org/abs/2505.16293",
    image: "images/papers/dynamic-notes.png",
    abstract: "Augments LLM reasoning with a dynamic notes-writing mechanism that enables models to organize and reference intermediate findings during complex multi-step question answering.",
    colors: ["#0891B2", "#06B6D4", "#22D3EE"],
  },
  {
    id: "copyspec",
    title: "CopySpec: Accelerating LLMs with Speculative Copy-and-Paste",
    venue: "EMNLP 2025",
    year: 2025,
    date: "2025",
    category: "efficiency",
    url: "https://arxiv.org/abs/2502.08923",
    image: "images/papers/copyspec.png",
    abstract: "Introduces CopySpec, a novel speculative decoding method that accelerates LLM inference by identifying and reusing repeated text patterns through an efficient copy-and-paste mechanism.",
    colors: ["#4338CA", "#4F46E5", "#6366F1"],
  },
  {
    id: "cats-confuse",
    title: "Cats Confuse Reasoning LLM: Query Agnostic Adversarial Triggers",
    venue: "COLM 2025",
    year: 2025,
    date: "2025",
    category: "alignment",
    url: "https://arxiv.org/abs/2503.01781",
    image: "images/papers/cats-confuse.png",
    abstract: "Reveals that simple, query-agnostic adversarial triggers can significantly degrade reasoning LLM performance, exposing fundamental robustness vulnerabilities in current models.",
    colors: ["#BE185D", "#DB2777", "#EC4899"],
  },
  {
    id: "layer-quant",
    title: "Layer-Wise Quantization: Quantizing LLMs Beyond Integer Bit-Levels",
    venue: "ACL 2025",
    year: 2025,
    date: "2025",
    category: "efficiency",
    url: "https://arxiv.org/abs/2406.17415",
    image: "images/papers/layer-quant.png",
    abstract: "Presents a layer-wise quantization approach that enables non-uniform bit allocation across transformer layers, achieving better efficiency-quality tradeoffs than uniform quantization.",
    colors: ["#92400E", "#B45309", "#D97706"],
  },
  {
    id: "m2lingual",
    title: "M2Lingual: Enhancing Multilingual, Multi-Turn Instruction Alignment in LLMs",
    venue: "NAACL 2025",
    year: 2025,
    date: "2025",
    category: "multilingual",
    url: "https://arxiv.org/abs/2406.16783",
    image: "images/papers/m2lingual.png",
    abstract: "Introduces M2Lingual, a framework for improving multilingual and multi-turn instruction following in LLMs through specialized alignment training across diverse languages.",
    colors: ["#047857", "#059669", "#10B981"],
  },
  {
    id: "phonemes",
    title: "Prompting with Phonemes: Enhancing LLM Multilinguality for non-Latin Scripts",
    venue: "NAACL 2025",
    year: 2025,
    date: "2025",
    category: "multilingual",
    url: "https://arxiv.org/abs/2411.02398",
    image: "images/papers/phonemes.png",
    abstract: "Demonstrates that prompting LLMs with phonemic representations significantly improves performance on non-Latin script languages by bridging the script gap.",
    colors: ["#1D4ED8", "#2563EB", "#3B82F6"],
  },
  {
    id: "auto-cypher",
    title: "Auto-Cypher: Improving LLMs on Cypher Generation via Generation-Verification",
    venue: "NAACL 2025",
    year: 2025,
    date: "2025",
    category: "reasoning",
    url: "https://arxiv.org/abs/2412.12612",
    image: "images/papers/auto-cypher.png",
    abstract: "Proposes Auto-Cypher, an LLM-supervised framework that iteratively generates and verifies Cypher queries for knowledge graphs, achieving state-of-the-art graph query generation.",
    colors: ["#4C1D95", "#5B21B6", "#6D28D9"],
  },
  {
    id: "abstention",
    title: "Do LLMs Know When to NOT Answer? Investigating Abstention Abilities",
    venue: "COLING 2025",
    year: 2025,
    date: "2025",
    category: "alignment",
    url: "https://arxiv.org/abs/2407.16221",
    image: "images/papers/abstention.png",
    abstract: "Investigates the abstention capabilities of large language models—their ability to recognize and refuse to answer questions they cannot reliably address—revealing significant gaps.",
    colors: ["#7F1D1D", "#991B1B", "#B91C1C"],
  },
  {
    id: "curry-dpo",
    title: "Curry-DPO: Enhancing Preference Alignment using Ranked Responses",
    venue: "EMNLP 2024",
    year: 2024,
    date: "2024",
    category: "alignment",
    url: "https://arxiv.org/abs/2403.07230",
    image: "images/papers/curry-dpo.png",
    abstract: "Introduces Curry-DPO, extending Direct Preference Optimization with ranked response hierarchies to enable more nuanced preference learning and improved alignment outcomes.",
    colors: ["#0E7490", "#0891B2", "#06B6D4"],
  },
  {
    id: "dynamic-slicing",
    title: "Change Is the Only Constant: Dynamic LLM Slicing based on Layer Redundancy",
    venue: "EMNLP 2024",
    year: 2024,
    date: "2024",
    category: "efficiency",
    url: "https://arxiv.org/abs/2411.03513",
    image: "images/papers/dynamic-slicing.png",
    abstract: "Proposes dynamic LLM slicing that adaptively removes redundant layers at inference time, achieving significant model compression while maintaining performance across diverse tasks.",
    colors: ["#1E40AF", "#1D4ED8", "#2563EB"],
  },
  {
    id: "alpagasus",
    title: "AlpaGasus: Training A Better Alpaca with Fewer Data",
    venue: "ICLR 2024",
    year: 2024,
    date: "2024",
    category: "llm",
    url: "https://arxiv.org/abs/2307.08701",
    image: "images/papers/alpagasus.png",
    abstract: "Demonstrates that filtering training data using an LLM-based quality scorer enables training superior instruction-following models with significantly less data than Alpaca.",
    colors: ["#9D174D", "#BE185D", "#DB2777"],
  },
  {
    id: "virtual-prompt-injection",
    title: "Virtual Prompt Injection for Instruction-Tuned LLMs",
    venue: "NAACL 2024",
    year: 2024,
    date: "2024",
    category: "alignment",
    url: "https://arxiv.org/abs/2307.16888",
    image: "images/papers/virtual-prompt-injection.png",
    abstract: "Identifies and demonstrates virtual prompt injection attacks against instruction-tuned LLMs, where carefully crafted inputs can hijack model behavior without visible prompt manipulation.",
    colors: ["#374151", "#4B5563", "#6B7280"],
  },
];

// ---------- SVG Diagram Generator ----------
function generatePaperSVG(paper, width = 400, height = 200) {
  const [c1, c2, c3] = paper.colors;
  const seed = hashString(paper.id);

  // Generate a unique abstract diagram based on paper category
  const patterns = {
    reasoning: generateReasoningDiagram,
    agents: generateAgentsDiagram,
    efficiency: generateEfficiencyDiagram,
    alignment: generateAlignmentDiagram,
    multilingual: generateMultilingualDiagram,
    multimodal: generateMultimodalDiagram,
    llm: generateLLMDiagram,
  };

  const generator = patterns[paper.category] || generateReasoningDiagram;
  const inner = generator(seed, c1, c2, c3, width, height);

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${paper.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${c1};stop-opacity:0.08"/>
        <stop offset="100%" style="stop-color:${c2};stop-opacity:0.15"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg-${paper.id})"/>
    ${inner}
  </svg>`;
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateReasoningDiagram(seed, c1, c2, c3, w, h) {
  const rng = seededRandom(seed);
  const nodes = [];
  const nodeCount = 5 + Math.floor(rng() * 3);
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({ x: 40 + rng() * (w - 80), y: 30 + rng() * (h - 60), r: 8 + rng() * 12 });
  }
  let svg = '';
  // Connections
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i], b = nodes[i + 1];
    svg += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${c2}" stroke-width="1.5" opacity="0.4"/>`;
    // Arrow
    const angle = Math.atan2(b.y - a.y, b.x - a.x);
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    svg += `<polygon points="${mx},${my - 3} ${mx + 6},${my} ${mx},${my + 3}" fill="${c2}" opacity="0.6" transform="rotate(${angle * 180 / Math.PI}, ${mx}, ${my})"/>`;
  }
  // Nodes
  nodes.forEach((n, i) => {
    svg += `<circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="${i === 0 ? c1 : c2}" opacity="${0.3 + rng() * 0.4}"/>`;
    svg += `<circle cx="${n.x}" cy="${n.y}" r="${n.r * 0.5}" fill="${c3}" opacity="0.7"/>`;
  });
  return svg;
}

function generateAgentsDiagram(seed, c1, c2, c3, w, h) {
  const rng = seededRandom(seed);
  let svg = '';
  const agents = [
    { x: w * 0.2, y: h * 0.3 }, { x: w * 0.5, y: h * 0.2 },
    { x: w * 0.8, y: h * 0.3 }, { x: w * 0.35, y: h * 0.7 },
    { x: w * 0.65, y: h * 0.7 },
  ];
  // Connections between agents
  for (let i = 0; i < agents.length; i++) {
    for (let j = i + 1; j < agents.length; j++) {
      if (rng() > 0.3) {
        svg += `<line x1="${agents[i].x}" y1="${agents[i].y}" x2="${agents[j].x}" y2="${agents[j].y}"
                  stroke="${c2}" stroke-width="1" opacity="0.25" stroke-dasharray="4,4"/>`;
      }
    }
  }
  // Agent nodes
  agents.forEach((a, i) => {
    const size = 16 + rng() * 8;
    svg += `<rect x="${a.x - size / 2}" y="${a.y - size / 2}" width="${size}" height="${size}"
              rx="4" fill="${i === 0 ? c1 : c2}" opacity="0.5"/>`;
    svg += `<circle cx="${a.x}" cy="${a.y}" r="4" fill="#fff" opacity="0.8"/>`;
  });
  // Central hub
  svg += `<circle cx="${w / 2}" cy="${h / 2}" r="20" fill="${c1}" opacity="0.15"/>`;
  svg += `<circle cx="${w / 2}" cy="${h / 2}" r="10" fill="${c1}" opacity="0.3"/>`;
  return svg;
}

function generateEfficiencyDiagram(seed, c1, c2, c3, w, h) {
  const rng = seededRandom(seed);
  let svg = '';
  // Bar chart-like visualization
  const barCount = 8;
  const barWidth = (w - 80) / barCount - 4;
  for (let i = 0; i < barCount; i++) {
    const barH = 30 + rng() * (h - 80);
    const x = 40 + i * (barWidth + 4);
    const y = h - 20 - barH;
    svg += `<rect x="${x}" y="${y}" width="${barWidth}" height="${barH}" rx="3"
              fill="${i < barCount / 2 ? c1 : c2}" opacity="${0.2 + (i / barCount) * 0.4}"/>`;
  }
  // Trend line
  svg += `<path d="M 40 ${h * 0.6} Q ${w * 0.3} ${h * 0.3}, ${w * 0.5} ${h * 0.45} T ${w - 40} ${h * 0.25}"
            fill="none" stroke="${c3}" stroke-width="2.5" opacity="0.7"/>`;
  return svg;
}

function generateAlignmentDiagram(seed, c1, c2, c3, w, h) {
  const rng = seededRandom(seed);
  let svg = '';
  // Concentric circles for alignment
  for (let i = 4; i >= 0; i--) {
    const r = 20 + i * 18;
    svg += `<circle cx="${w / 2}" cy="${h / 2}" r="${r}" fill="none"
              stroke="${i % 2 === 0 ? c1 : c2}" stroke-width="1.5" opacity="${0.15 + i * 0.08}"/>`;
  }
  // Scattered points
  for (let i = 0; i < 12; i++) {
    const angle = rng() * Math.PI * 2;
    const dist = 20 + rng() * 70;
    const px = w / 2 + Math.cos(angle) * dist;
    const py = h / 2 + Math.sin(angle) * dist;
    svg += `<circle cx="${px}" cy="${py}" r="${3 + rng() * 4}" fill="${rng() > 0.5 ? c2 : c3}" opacity="0.5"/>`;
  }
  // Center dot
  svg += `<circle cx="${w / 2}" cy="${h / 2}" r="6" fill="${c1}" opacity="0.8"/>`;
  return svg;
}

function generateMultilingualDiagram(seed, c1, c2, c3, w, h) {
  const rng = seededRandom(seed);
  let svg = '';
  // Globe-like grid
  const cx = w / 2, cy = h / 2, r = 60;
  svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${c1}" stroke-width="1" opacity="0.2"/>`;
  for (let i = -2; i <= 2; i++) {
    const rx = Math.abs(r * Math.cos(Math.asin(i / 3)));
    svg += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${r}" fill="none"
              stroke="${c2}" stroke-width="0.8" opacity="0.2" transform="rotate(${i * 30}, ${cx}, ${cy})"/>`;
  }
  // Language dots
  const scripts = ['あ', 'ب', 'Д', 'ह', '中', 'A', 'α'];
  scripts.forEach((_, i) => {
    const angle = (i / scripts.length) * Math.PI * 2 - Math.PI / 2;
    const px = cx + Math.cos(angle) * (r + 20);
    const py = cy + Math.sin(angle) * (r + 20);
    svg += `<circle cx="${px}" cy="${py}" r="8" fill="${c1}" opacity="0.3"/>`;
    svg += `<circle cx="${px}" cy="${py}" r="3" fill="${c2}" opacity="0.7"/>`;
  });
  return svg;
}

function generateMultimodalDiagram(seed, c1, c2, c3, w, h) {
  const rng = seededRandom(seed);
  let svg = '';
  // Image placeholder
  svg += `<rect x="${w * 0.08}" y="${h * 0.15}" width="${w * 0.35}" height="${h * 0.55}" rx="6"
            fill="${c1}" opacity="0.15" stroke="${c1}" stroke-width="1" stroke-opacity="0.3"/>`;
  // Text lines
  for (let i = 0; i < 5; i++) {
    const lw = 40 + rng() * 80;
    svg += `<rect x="${w * 0.55}" y="${h * 0.2 + i * 18}" width="${lw}" height="6" rx="3"
              fill="${c2}" opacity="${0.15 + rng() * 0.2}"/>`;
  }
  // Connection arrow
  svg += `<path d="M ${w * 0.47} ${h * 0.42} L ${w * 0.53} ${h * 0.42}"
            stroke="${c3}" stroke-width="2" opacity="0.6" marker-end="url(#arrow)"/>`;
  // Fusion circle
  svg += `<circle cx="${w * 0.5}" cy="${h * 0.8}" r="14" fill="${c1}" opacity="0.2"/>`;
  svg += `<circle cx="${w * 0.5}" cy="${h * 0.8}" r="6" fill="${c3}" opacity="0.6"/>`;
  return svg;
}

function generateLLMDiagram(seed, c1, c2, c3, w, h) {
  const rng = seededRandom(seed);
  let svg = '';
  // Transformer block representation
  const blockCount = 6;
  const blockW = 50, blockH = (h - 40) / blockCount - 4;
  const startX = w / 2 - blockW / 2;
  for (let i = 0; i < blockCount; i++) {
    const y = 20 + i * (blockH + 4);
    svg += `<rect x="${startX}" y="${y}" width="${blockW}" height="${blockH}" rx="4"
              fill="${c1}" opacity="${0.15 + (i / blockCount) * 0.3}"/>`;
    // Skip connections
    if (i > 0 && i < blockCount - 1) {
      svg += `<path d="M ${startX - 5} ${y} C ${startX - 30} ${y}, ${startX - 30} ${y - blockH - 4}, ${startX - 5} ${y - blockH - 4}"
                fill="none" stroke="${c2}" stroke-width="1" opacity="0.3"/>`;
    }
  }
  // Attention heads
  for (let i = 0; i < 4; i++) {
    const ax = startX + blockW + 20 + rng() * 60;
    const ay = 40 + rng() * (h - 80);
    svg += `<circle cx="${ax}" cy="${ay}" r="${5 + rng() * 8}" fill="${c3}" opacity="0.2"/>`;
  }
  return svg;
}

// ---------- Render Paper Cards ----------
function renderPaperCards(papers) {
  const grid = document.getElementById("papers-grid");
  if (!grid) return;

  grid.innerHTML = papers.map(paper => {
    const imageHTML = paper.image
      ? `<img src="${paper.image}" alt="${paper.title}" loading="lazy"
             onerror="this.outerHTML=generatePaperSVG(PAPERS.find(p=>p.id==='${paper.id}'))">`
      : generatePaperSVG(paper);

    return `
    <article class="paper-card fade-in" data-paper-id="${paper.id}" data-category="${paper.category}" onclick="openPaperModal('${paper.id}')">
      <div class="paper-card-image">
        ${imageHTML}
        <span class="paper-venue-badge">${paper.venue}</span>
      </div>
      <div class="paper-card-body">
        <div class="paper-date">${paper.date}</div>
        <h3>${paper.title}</h3>
        <p class="paper-abstract">${paper.abstract}</p>
      </div>
      <div class="paper-card-footer">
        <a href="${paper.url}" class="paper-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
          Read Paper
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
      </div>
    </article>
  `;
  }).join("");

  // Trigger animations
  requestAnimationFrame(() => observeElements());
}

// ---------- Paper Modal ----------
function openPaperModal(paperId) {
  const paper = PAPERS.find(p => p.id === paperId);
  if (!paper) return;

  const modal = document.getElementById("paper-modal");
  const modalImage = modal.querySelector(".modal-image");
  if (paper.image) {
    modalImage.innerHTML = `<img src="${paper.image}" alt="${paper.title}"
      style="width:100%;height:100%;object-fit:contain;background:#f5f7fc;"
      onerror="this.outerHTML=generatePaperSVG(PAPERS.find(p=>p.id==='${paper.id}'),700,280)">`;
  } else {
    modalImage.innerHTML = generatePaperSVG(paper, 700, 280);
  }
  modal.querySelector(".modal-title").textContent = paper.title;
  modal.querySelector(".modal-venue").textContent = paper.venue;
  modal.querySelector(".modal-date").textContent = paper.date;
  modal.querySelector(".abstract-full").textContent = paper.abstract;
  modal.querySelector(".modal-cta").href = paper.url;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePaperModal() {
  const modal = document.getElementById("paper-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ---------- Filtering ----------
function filterPapers(category) {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  const filtered = category === "all"
    ? PAPERS
    : PAPERS.filter(p => p.category === category);

  renderPaperCards(filtered);
}

// ---------- Scroll Animations ----------
function observeElements() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// ---------- Navbar Scroll ----------
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => links.classList.remove("open"));
  });
}

// ---------- Smooth scroll for nav links ----------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ---------- Active nav link ----------
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  });
}

// ---------- Counter Animation ----------
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        const suffix = entry.target.dataset.suffix || "";
        let current = 0;
        const increment = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = current + suffix;
        }, 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ---------- Modal close on escape / overlay click ----------
function initModalHandlers() {
  const modal = document.getElementById("paper-modal");
  if (!modal) return;

  modal.addEventListener("click", e => {
    if (e.target === modal) closePaperModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closePaperModal();
  });
}

// ---------- Contact Form ----------
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = document.getElementById("form-submit-btn");
    const btnText = btn.querySelector(".btn-text");
    const btnSending = btn.querySelector(".btn-sending");
    const status = document.getElementById("form-status");

    // Show sending state
    btn.disabled = true;
    btnText.style.display = "none";
    btnSending.style.display = "inline";
    status.style.display = "none";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "\u2705 Message sent! I'll get back to you soon.";
        status.className = "form-status success";
        status.style.display = "block";
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      // Fallback: open mailto with the form data
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const message = formData.get("message") || "";
      const subject = encodeURIComponent("Message from " + name + " via research portfolio");
      const body = encodeURIComponent(
        `From: ${name} (${email})\n\n${message}`
      );
      window.location.href = `mailto:vikasy.zona@gmail.com?subject=${subject}&body=${body}`;

      status.textContent = "Opening your email client as a fallback\u2026";
      status.className = "form-status success";
      status.style.display = "block";
    } finally {
      btn.disabled = false;
      btnText.style.display = "inline";
      btnSending.style.display = "none";
    }
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initSmoothScroll();
  initActiveNav();
  animateCounters();
  initModalHandlers();
  initContactForm();
  renderPaperCards(PAPERS);
  observeElements();
});
