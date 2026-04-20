# Claude Design Setup Guide

Personal playbook for rolling out Claude Design at Seed. Launched April 17, 2026, research preview, powered by Claude Opus 4.7.

Access: [claude.ai/design](https://claude.ai/design)

---

## 1. Enable access

- Enterprise plans have Claude Design **off by default**
- Admin needs to enable it in Organization settings
- Available on Pro, Max, Team, Enterprise
- Uses subscription limits with option for extra usage

## 2. Onboarding (the setup that matters)

During first-run, Claude reads your codebase and design files to build a shared design system that auto-applies to every future project.

**Point Claude at:**
- [ ] Design token library repo (GitHub)
- [ ] Component library repo (GitHub)
- [ ] Figma files (design system, key components)
- [ ] TOV and copy style guide (upload as DOCX)
- [ ] This repo (`seed-ds`) — the agent-first design system; `pages/` captures give Claude Design real seed.com examples of how templates compose

Since tokens already live in code, that's your source of truth. Feed the tokens repo and component repo so Claude inherits your primitives, not just colors.

You can maintain more than one design system and refine over time.

## 3. Top of funnel landers (primary use case)

**Workflow:**
1. Use the **web capture tool** to grab elements from existing seed.com pages so new landers match production
2. Prompt with specific audience, goal, and constraints
3. Use Claude-generated sliders for color, spacing, layout tweaks without reprompting
4. Iterate via inline comments, direct edits, or conversation
5. Export

**Export options:**
- Standalone HTML (quick hosting tests)
- PDF
- PPTX
- Canva (fully editable)
- Claude Code handoff bundle (production build against real components)
- Internal URL with org-scoped sharing

**Bynder assets:**
No Bynder MCP exists yet. Pull assets locally and upload, or script a Bynder API pull. Worth lobbying internally for a connector.

## 4. Design system work in Figma

**No direct Figma export.** Exports go to Canva, PDF, PPTX, HTML, or Claude Code handoff bundles.

Context: Krieger resigned from Figma's board April 14, Figma stock dropped 5-7% on Claude Design launch. The omission is intentional.

**Workarounds:**
- Use Figma's **Code to Canvas** feature (Feb 2026) to pull HTML from Claude Design back into Figma as editable designs
- Keep the existing Figma MCP for direct DS work in Figma
- Use Claude Design for exploration and prototyping, then codify winning patterns manually in the Figma component library

Claude Design is not a replacement for finishing the DS in Figma. It's an exploration and prototyping layer.

## 5. Collaboration

- Private by default
- Share-link view access (org-scoped)
- Edit access lets colleagues modify and chat with Claude together in a group conversation

## 6. Usage warning

Token usage is aggressive. Early reviewers burned 50%+ of weekly allotment building one design system plus one prototype with minor tweaks. Budget accordingly.

Has its own weekly limits separate from chat and Claude Code.

## 7. Quick-start sequence

1. Admin enables in org settings
2. Onboard with tokens repo + component repo + Figma files + TOV guide + `seed-ds`
3. Build lander #1, export HTML, iterate
4. Use handoff bundle to Claude Code for production build against real component library
5. Loop designers in for polish via edit-access sharing

## Import formats supported

- Text prompts
- Images
- DOCX, PPTX, XLSX
- Codebase
- Web capture (grab from live site)

## Sources

- [Introducing Claude Design by Anthropic Labs](https://www.anthropic.com/news/claude-design-anthropic-labs)
- [VentureBeat: Claude Design vs Figma](https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma)
- [9to5Mac: Claude Design launch](https://9to5mac.com/2026/04/17/anthropic-launches-claude-design-for-mac-following-opus-4-7-model-upgrade/)
- [The New Stack: Figma and Canva rival](https://thenewstack.io/anthropic-claude-design-launch/)
- [The Register: launch coverage](https://www.theregister.com/2026/04/17/anthropic_debuts_claude_design/)
- [TNW: Canva partnership](https://thenextweb.com/news/canva-anthropic-claude-design-ai-powered-visual-suite)
