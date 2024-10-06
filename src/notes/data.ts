import { Subject } from "./types";

export const subjects: Subject[] = [
  {
    id: "data-structures",
    title: "Data Structures",
    description: "Comprehensive notes on various data structures and their implementations",
    course: "computer-science",
    year: "2",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=350&fit=crop",
    units: [
      {
        unit_name: "Unit 1: Arrays and Linked Lists",
        topics: [
          { topic_name: "Introduction to Arrays", notes_link: "/notes/data-structures/arrays-intro.pdf" },
          { topic_name: "Linked Lists", notes_link: "/notes/data-structures/linked-lists.pdf" },
        ],
      },
      {
        unit_name: "Unit 2: Trees and Graphs",
        topics: [
          { topic_name: "Binary Trees", notes_link: "/notes/data-structures/binary-trees.pdf" },
          { topic_name: "Graph Algorithms", notes_link: "/notes/data-structures/graph-algorithms.pdf" },
        ],
      },
    ],
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    description: "In-depth study of operating system concepts and design",
    course: "computer-science",
    year: "3",
    imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=350&fit=crop",
    units: [
      {
        unit_name: "Unit 1: Process Management",
        topics: [
          { topic_name: "Process Scheduling", notes_link: "/notes/operating-systems/process-scheduling.pdf" },
          { topic_name: "Synchronization", notes_link: "/notes/operating-systems/synchronization.pdf" },
        ],
      },
      {
        unit_name: "Unit 2: Memory Management",
        topics: [
          { topic_name: "Virtual Memory", notes_link: "/notes/operating-systems/virtual-memory.pdf" },
          { topic_name: "Page Replacement Algorithms", notes_link: "/notes/operating-systems/page-replacement.pdf" },
        ],
      },
    ],
  },
  {
    id: "calculus",
    title: "Calculus",
    description: "Fundamental concepts of differential and integral calculus",
    course: "mathematics",
    year: "1",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=350&fit=crop",
    units: [
      {
        unit_name: "Unit 1: Limits and Continuity",
        topics: [
          { topic_name: "Limits of Functions", notes_link: "/notes/calculus/limits.pdf" },
          { topic_name: "Continuity", notes_link: "/notes/calculus/continuity.pdf" },
        ],
      },
      {
        unit_name: "Unit 2: Differentiation",
        topics: [
          { topic_name: "Derivative Rules", notes_link: "/notes/calculus/derivative-rules.pdf" },
          { topic_name: "Applications of Derivatives", notes_link: "/notes/calculus/derivative-applications.pdf" },
        ],
      },
    ],
  },
  {
    id: "digital-circuits",
    title: "Digital Circuits",
    description: "Design and analysis of digital electronic circuits",
    course: "engineering",
    year: "2",
    imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=350&fit=crop",
    units: [
      {
        unit_name: "Unit 1: Boolean Algebra",
        topics: [
          { topic_name: "Logic Gates", notes_link: "/notes/digital-circuits/logic-gates.pdf" },
          { topic_name: "Karnaugh Maps", notes_link: "/notes/digital-circuits/karnaugh-maps.pdf" },
        ],
      },
      {
        unit_name: "Unit 2: Sequential Circuits",
        topics: [
          { topic_name: "Flip-Flops", notes_link: "/notes/digital-circuits/flip-flops.pdf" },
          { topic_name: "Counters and Registers", notes_link: "/notes/digital-circuits/counters-registers.pdf" },
        ],
      },
    ],
  },
  {
    id: "quantum-mechanics",
    title: "Quantum Mechanics",
    description: "Fundamental principles and mathematical formulations of quantum mechanics",
    course: "physics",
    year: "3",
    imageUrl: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=500&h=350&fit=crop",
    units: [
      {
        unit_name: "Unit 1: Wave Functions and Schrödinger Equation",
        topics: [
          { topic_name: "Wave-Particle Duality", notes_link: "/notes/quantum-mechanics/wave-particle-duality.pdf" },
          { topic_name: "Time-Independent Schrödinger Equation", notes_link: "/notes/quantum-mechanics/schrodinger-equation.pdf" },
        ],
      },
      {
        unit_name: "Unit 2: Quantum States and Observables",
        topics: [
          { topic_name: "Hilbert Space and Operators", notes_link: "/notes/quantum-mechanics/hilbert-space.pdf" },
          { topic_name: "Uncertainty Principle", notes_link: "/notes/quantum-mechanics/uncertainty-principle.pdf" },
        ],
      },
    ],
  },
  {
    id: "organic-chemistry",
    title: "Organic Chemistry",
    description: "Study of structure, properties, and reactions of organic compounds",
    course: "chemistry",
    year: "2",
    imageUrl: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=500&h=350&fit=crop",
    units: [
      {
        unit_name: "Unit 1: Alkanes and Cycloalkanes",
        topics: [
          { topic_name: "Nomenclature", notes_link: "/notes/organic-chemistry/nomenclature.pdf" },
          { topic_name: "Conformations", notes_link: "/notes/organic-chemistry/conformations.pdf" },
        ],
      },
      {
        unit_name: "Unit 2: Stereochemistry",
        topics: [
          { topic_name: "Chirality and Optical Activity", notes_link: "/notes/organic-chemistry/chirality.pdf" },
          { topic_name: "R/S Configuration", notes_link: "/notes/organic-chemistry/rs-configuration.pdf" },
        ],
      },
    {
      unit_name: "Unit 3: Reaction Mechanisms",
      topics: [
        { topic_name: "SN1 and SN2 Reactions", notes_link: "/notes/organic-chemistry/sn1-sn2-reactions.pdf" },
        { topic_name: "E1 and E2 Reactions", notes_link: "/notes/organic-chemistry/e1-e2-reactions.pdf" },
      ],
    },
    ],
  },
  {
    id: "computer-networks",
    title: "Computer Networks",
    description: "Study of computer network architectures, protocols, and technologies",
    course: "computer-science",
    year: "3",
    imageUrl: "https://images.unsplash.com/photo-1581091870622-1c6a6c7ed8a5?w=500&h=350&fit=crop",
    units: [
    {
      unit_name: "Unit 1: Network Models",
      topics: [
        { topic_name: "OSI Model", notes_link: "/notes/computer-networks/osi-model.pdf" },
        { topic_name: "TCP/IP Model", notes_link: "/notes/computer-networks/tcp-ip-model.pdf" },
      ],
    },
    {
      unit_name: "Unit 2: Network Protocols",
      topics: [
        { topic_name: "HTTP and HTTPS", notes_link: "/notes/computer-networks/http-https.pdf" },
        { topic_name: "DNS and DHCP", notes_link: "/notes/computer-networks/dns-dhcp.pdf" },
      ],
    },
    ],
  },
  {
    id: "database-systems",
    title: "Database Systems",
    description: "Introduction to database design, management, and SQL",
    course: "computer-science",
    year: "2",
    imageUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de7ab05?w=500&h=350&fit=crop",
    units: [
    {
      unit_name: "Unit 1: Relational Databases",
      topics: [
        { topic_name: "Entity-Relationship Model", notes_link: "/notes/database-systems/er-model.pdf" },
        { topic_name: "Normalization", notes_link: "/notes/database-systems/normalization.pdf" },
      ],
    },
    {
      unit_name: "Unit 2: SQL and Transactions",
      topics: [
        { topic_name: "SQL Queries", notes_link: "/notes/database-systems/sql-queries.pdf" },
        { topic_name: "Transaction Management", notes_link: "/notes/database-systems/transaction-management.pdf" },
      ],
    },
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Principles and practices of software development and project management",
    course: "computer-science",
    year: "4",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=350&fit=crop",
    units: [
    {
      unit_name: "Unit 1: Software Development Life Cycle",
      topics: [
        { topic_name: "Requirements Analysis", notes_link: "/notes/software-engineering/requirements-analysis.pdf" },
        { topic_name: "Design Patterns", notes_link: "/notes/software-engineering/design-patterns.pdf" },
      ],
    },
    {
      unit_name: "Unit 2: Agile Methodologies",
      topics: [
        { topic_name: "Scrum Framework", notes_link: "/notes/software-engineering/scrum-framework.pdf" },
        { topic_name: "Kanban", notes_link: "/notes/software-engineering/kanban.pdf" },
      ],
    },
    ],
  },
]