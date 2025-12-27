# 🎯 Demos Feature Matrix

Quick reference showing which Redis features each demo uses.

## Feature Coverage

| Feature | Demos Using It | Description |
|---------|----------------|-------------|
| **Strings** | 01, 02, 03, 09 | Basic key-value storage |
| **JSON** | 01, 02, 03, 09, 10 | Structured data storage |
| **Hashes** | 01 | Field-value maps |
| **Lists** | 01 | Ordered collections |
| **Sets** | 01, 02 | Unique collections |
| **Sorted Sets** | 04, 05, 10 | Ranked collections |
| **Streams** | 06 | Event logs and time-series |
| **Geospatial** | 07 | Location-based data |
| **HyperLogLog** | 08 | Unique counting |
| **TTL/Expiry** | 01, 02, 03, 04 | Automatic expiration |
| **Namespaces** | 02, 03, 04, 06, 09, 10 | Data isolation |
| **Scanning** | 01, 09, 10 | Pattern matching |
| **Transactions** | - | Atomic operations |
| **Pub/Sub** | - | Messaging |

## Demo Comparison

### By Complexity

```
Simple          Medium              Complex
  ↓               ↓                    ↓
 01          02, 03, 05, 07        04, 06, 09, 10
              08
```

### By Use Case Category

#### 🔐 **Authentication & Security**
- **02**: Session Management
- **04**: Rate Limiting

#### 💾 **Data & Storage**
- **01**: Basic Operations
- **03**: Caching Strategies
- **09**: Multi-Tenant Data

#### 📊 **Analytics & Tracking**
- **06**: Event Logging
- **08**: Unique Visitor Counting

#### 🎮 **Real-Time Features**
- **05**: Leaderboards
- **07**: Location Services
- **10**: Job Processing

### By Redis Data Type

#### **Sorted Sets** (Rankings & Priorities)
- **04**: Rate limit tracking
- **05**: Player rankings
- **10**: Job priorities

#### **Streams** (Events & Logs)
- **06**: Event sourcing and audit trails

#### **Geospatial** (Locations)
- **07**: Store finder, delivery routing

#### **HyperLogLog** (Counting)
- **08**: DAU/MAU analytics

## Code Statistics

| Demo | Lines of Code | Classes | Functions | Complexity |
|------|---------------|---------|-----------|------------|
| 01 | ~160 | 0 | 1 | ⭐ |
| 02 | ~320 | 1 | 10+ | ⭐⭐ |
| 03 | ~360 | 2 | 12+ | ⭐⭐ |
| 04 | ~380 | 1 | 8+ | ⭐⭐⭐ |
| 05 | ~420 | 1 | 15+ | ⭐⭐ |
| 06 | ~400 | 1 | 12+ | ⭐⭐⭐ |
| 07 | ~460 | 1 | 13+ | ⭐⭐ |
| 08 | ~340 | 1 | 10+ | ⭐⭐ |
| 09 | ~440 | 1 | 12+ | ⭐⭐⭐ |
| 10 | ~520 | 2 | 15+ | ⭐⭐⭐ |
| 11 | ~580 | 1 | 12+ | ⭐⭐ |
| **Total** | **~4,400** | **12** | **120+** | - |

## Learning Time Estimates

| Demo | Read Time | Run Time | Experiment Time | Total |
|------|-----------|----------|-----------------|-------|
| 01 | 5 min | 2 min | 5 min | **12 min** |
| 02 | 10 min | 3 min | 10 min | **23 min** |
| 03 | 12 min | 5 min | 15 min | **32 min** |
| 04 | 15 min | 5 min | 15 min | **35 min** |
| 05 | 12 min | 3 min | 10 min | **25 min** |
| 06 | 15 min | 5 min | 15 min | **35 min** |
| 07 | 15 min | 3 min | 12 min | **30 min** |
| 08 | 10 min | 8 min | 10 min | **28 min** |
| 09 | 15 min | 5 min | 15 min | **35 min** |
| 10 | 18 min | 5 min | 20 min | **43 min** |
| 11 | 12 min | 3 min | 15 min | **30 min** |
| **Total** | **2h 19m** | **47m** | **2h 22m** | **~5.5 hours** |

## Real-World Applicability

### Production-Ready Patterns ✅

These demos show production patterns:
- 02: Session management
- 03: Cache strategies
- 04: Rate limiting
- 09: Multi-tenancy
- 10: Job queues

### Learning Examples 📚

These demos are for learning concepts:
- 01: Basic operations
- 05: Leaderboards
- 06: Event logging
- 07: Geospatial
- 08: Analytics

## API Coverage

Percentage of wrapper API methods used in each demo:

```
01: ████████████░░░░░░░░ 60% (Core operations)
02: ████████████░░░░░░░░ 55% (Core + TTL)
03: █████████████░░░░░░░ 65% (Core + JSON + TTL)
04: ██████████████░░░░░░ 70% (Core + Sorted Sets + TTL)
05: ████████████████████ 95% (Sorted Sets intensive)
06: ████████████████░░░░ 80% (Streams intensive)
07: ███████████████░░░░░ 75% (Geospatial intensive)
08: ██████████░░░░░░░░░░ 50% (HyperLogLog focused)
09: ███████████████░░░░░ 75% (Full namespace usage)
10: ██████████████████░░ 85% (Sorted Sets + Sets + JSON)
```

## Recommended Learning Paths

### Path 1: Web Developer (3 hours)
```
01 → 02 → 03 → 04
└─> Session-based apps with caching and rate limiting
```

### Path 2: Game Developer (2.5 hours)
```
01 → 05 → 08 → 10
└─> Leaderboards, analytics, background jobs
```

### Path 3: SaaS Developer (3.5 hours)
```
01 → 02 → 03 → 09 → 10
└─> Multi-tenant with sessions, cache, and jobs
```

### Path 4: Location-Based Apps (2 hours)
```
01 → 07 → 08 → 09
└─> Store locators with analytics
```

### Path 5: Full Stack (5 hours)
```
01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10
└─> Complete Redis mastery
```

## Quick Commands

```bash
# Run a specific demo
bun run demos/01-getting-started.ts

# Run all basic demos (1-3)
for i in {1..3}; do bun run demos/0${i}-*.ts; done

# Run all advanced demos (4-10)
for i in {4..9}; do bun run demos/0${i}-*.ts; done
bun run demos/10-job-queue.ts

# Interactive menu
bun run demos/run.ts
```

## Dependencies Between Demos

```
01 (Basic)
 ├─> 02 (Uses namespaces from 01)
 ├─> 03 (Uses JSON from 01)
 ├─> 05 (Uses sorted sets concepts)
 └─> 08 (Uses basic operations)

02 (Sessions)
 └─> 09 (Extends to multi-tenant)

04 (Rate Limiting)
 └─> 10 (Uses sorted sets for priorities)

06 (Events)
 └─> 09 (Audit logs for tenants)
```

## Success Criteria

After completing all demos, you should be able to:

- ✅ Perform all basic Redis operations
- ✅ Implement session management
- ✅ Design caching strategies
- ✅ Build rate limiters
- ✅ Create leaderboard systems
- ✅ Implement event logging
- ✅ Work with geospatial data
- ✅ Track unique visitors efficiently
- ✅ Build multi-tenant applications
- ✅ Design job queue systems

---

**Start your journey:** [GETTING_STARTED.md](GETTING_STARTED.md)

**Full documentation:** [README.md](README.md)
