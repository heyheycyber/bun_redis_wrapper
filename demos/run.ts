#!/usr/bin/env bun

/**
 * Demo Runner - Interactive menu to run demos
 * 
 * Usage: bun run demos/run.ts
 */

const demos = [
  {
    id: 1,
    name: "Getting Started",
    file: "01-getting-started.ts",
    description: "Basic operations: GET, SET, JSON, TTL",
    difficulty: "Beginner"
  },
  {
    id: 2,
    name: "Session Management",
    file: "02-session-management.ts",
    description: "User sessions, multi-device, expiration",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    name: "Caching Strategies",
    file: "03-caching-strategies.ts",
    description: "Cache-aside, write-through, warming",
    difficulty: "Intermediate"
  },
  {
    id: 4,
    name: "Rate Limiting",
    file: "04-rate-limiting.ts",
    description: "Fixed window, sliding window, token bucket",
    difficulty: "Advanced"
  },
  {
    id: 5,
    name: "Leaderboard System",
    file: "05-leaderboard.ts",
    description: "Rankings, scores, sorted sets",
    difficulty: "Intermediate"
  },
  {
    id: 6,
    name: "Event Logging",
    file: "06-event-logging.ts",
    description: "Streams, audit logs, event sourcing",
    difficulty: "Advanced"
  },
  {
    id: 7,
    name: "Location Services",
    file: "07-location-services.ts",
    description: "Geospatial, proximity search",
    difficulty: "Intermediate"
  },
  {
    id: 8,
    name: "Analytics (HyperLogLog)",
    file: "08-analytics-hyperloglog.ts",
    description: "Unique counting, DAU/MAU tracking",
    difficulty: "Intermediate"
  },
  {
    id: 9,
    name: "Multi-Tenant Application",
    file: "09-multi-tenant.ts",
    description: "Tenant isolation, quotas, namespaces",
    difficulty: "Advanced"
  },
  {
    id: 10,
    name: "Job Queue System",
    file: "10-job-queue.ts",
    description: "Background jobs, priorities, retries",
    difficulty: "Advanced"
  },
  {
    id: 11,
    name: "Environment Namespaces & CMS",
    file: "11-environment-namespaces-cms.ts",
    description: "Dev/staging/prod isolation, CRUD operations",
    difficulty: "Intermediate"
  }
];

function printMenu() {
  console.clear();
  console.log("╔═══════════════════════════════════════════════════════════════╗");
  console.log("║          Redis Wrapper - Interactive Demo Runner             ║");
  console.log("╚═══════════════════════════════════════════════════════════════╝\n");

  demos.forEach(demo => {
    const difficultyEmoji = demo.difficulty === "Beginner" ? "⭐" 
      : demo.difficulty === "Intermediate" ? "⭐⭐" 
      : "⭐⭐⭐";
    
    console.log(`${demo.id.toString().padStart(2)}. ${demo.name.padEnd(25)} ${difficultyEmoji}`);
    console.log(`    ${demo.description}`);
    console.log("");
  });

  console.log("─────────────────────────────────────────────────────────────────");
  console.log(" 0. Run all demos");
  console.log(" q. Quit\n");
}

async function runDemo(file: string, name: string) {
  console.log(`\n${"═".repeat(65)}`);
  console.log(`Running: ${name}`);
  console.log("═".repeat(65) + "\n");

  const proc = Bun.spawn(["bun", "run", `demos/${file}`], {
    stdout: "inherit",
    stderr: "inherit"
  });

  await proc.exited;

  console.log(`\n${"═".repeat(65)}`);
  console.log(`Completed: ${name}`);
  console.log("═".repeat(65) + "\n");

  console.log("Press Enter to continue...");
  await Bun.stdin.stream().getReader().read();
}

async function runAllDemos() {
  console.log("\n🚀 Running all demos...\n");

  for (const demo of demos) {
    await runDemo(demo.file, demo.name);
  }

  console.log("\n✨ All demos completed!\n");
  console.log("Press Enter to return to menu...");
  await Bun.stdin.stream().getReader().read();
}

async function main() {
  while (true) {
    printMenu();
    
    const input = prompt("Select a demo (1-10, 0 for all, q to quit):");

    if (!input || input.toLowerCase() === "q") {
      console.log("\n👋 Goodbye!\n");
      break;
    }

    const choice = parseInt(input);

    if (choice === 0) {
      await runAllDemos();
    } else if (choice >= 1 && choice <= demos.length) {
      const demo = demos[choice - 1];
      await runDemo(demo.file, demo.name);
    } else {
      console.log("\n❌ Invalid choice. Press Enter to try again...");
      await Bun.stdin.stream().getReader().read();
    }
  }
}

main().catch(console.error);
