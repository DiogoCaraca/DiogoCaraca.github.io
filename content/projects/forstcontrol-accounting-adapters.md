---
order: 1
title: "ForstControl accounting adapters"
roleLabel: "Architecture & build"
tagline: "One core, many finance systems: a plugin architecture that brings accounting into ForstControl."
context: "ForstControl 3.0: forestry and accounting software with several million records and several thousand users."
diogosPart: [Architecture, Build]
stack: [Laravel, PHP, MySQL, Vue]
badge: "Closed source · siabit AG"
links:
  - { label: "ForstControl", url: "https://forstcontrol.com/en/", description: "ForstControl product website" }
visual: adapters-diagram
award: "ForstControl 3.0 won Gold at the Best of Swiss Software Awards 2025 (Enterprise Software). I've been on the team since 2023."
caseStudy: |
  **The constraint.** Customers use different finance systems, and each one has its own API and data model. Wiring every system straight into the core would have spread integration code across the whole product.

  **The decision.** I defined one accounting contract inside ForstControl and put every finance system behind its own adapter that implements it. The core only ever talks to the contract.

  **The trade-off.** More structure up front, and the contract had to be right before the first adapter shipped. In return, each adapter is isolated and testable on its own, and connecting the next finance system means writing one adapter, not changing the core.
---

Forestry businesses kept their books in a separate finance system and reconciled the same data twice. I designed and built a plugin/adapter architecture in Laravel that connects ForstControl to different finance systems. Accounting now runs directly inside ForstControl, and the double reconciliation is gone.
