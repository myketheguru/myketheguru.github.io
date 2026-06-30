---
layout: post
title: "Part 1: Can We Abolish Search?"
date: 2026-06-24 12:00:00 +0000
permalink: /can-we-abolish-search/
---

There's a particular kind of magic I've chased my whole career as an engineer. You're stuck on something ugly, someone shows you a different way to look at it, and the ugliness just… evaporates. The problem didn't change. Your view of it did.

A few weeks ago I decided to chase that feeling as far as it goes, and turn it into a real question: can the right way of *seeing* a problem let a computer skip the hard part entirely — stop *hunting* for an answer and just know it? That's the dream humming under a lot of today's AI hype: the right representation, and searching simply disappears. I wanted to know if it's real.

I'll say up front that most of what follows is me re-deriving things much smarter people proved decades ago — I name them as I go. The point wasn't a new theorem. It was to build the whole idea out of small programs I could actually run, and see what held up.

## First, a trap: "search" means two different things

One is *looking something up* — "find me the photo most like this one." Search engines and recommendation feeds do this, and we're genuinely great at it.

The other is *going and searching* — "find the one move that wins this chess position," where the only way to know is to explore possibilities, often a mountain of them. That's the hard one, and it's the one the hype quietly promises to kill. So that's the one I went after.

## You can't kill it

The first thing I learned is that you can't — and it's not a hunch, it's provable. Full-size chess is one of the problems we've *proven* stays hard no matter how you look at it. No clever reframing makes it cheap.

Then I built a tiny program to feel it directly. Picture a hard problem as having a cost *floor* — the least juggling you can possibly get away with. My program took the same problem and tried it hundreds of different ways, measuring the floor each time. The floor never moved. Shuffle everything, rename it all — still 10, 10, 10, 10, 10. The searching didn't vanish. It's *conserved*, like water in a sealed pipe: squeeze it out of one spot and it bulges out somewhere else. You can move the work around. You can't delete it.

## So is "how you look at it" pointless? The opposite — it's the whole game

Some problems that look hopeless become trivial the instant you use the *right* method, and stay hopeless with the wrong one. In one demo I hand the same puzzle to two solvers. The first one's approach happens to match the puzzle's hidden shape, and it cracks it instantly. The second, a general-purpose searcher that doesn't know that shape, grinds away and blows up — on the *identical* puzzle. It's keys and locks: the right key turns with a fingertip; the wrong key won't budge no matter how hard you shove. What matters is the *shape* of the problem, not its size.

Why does the right frame have this power? Because it lines up with a grain the problem already has — like splitting wood along the grain instead of hacking across it. My favorite little demo makes this almost physical. There's an operation at the heart of signal processing and a lot of AI; in ordinary coordinates it's a tangled knot. Switch to the coordinates that match its natural symmetry and the knot falls apart into neat, independent strands — the "tangle" score drops to literally **zero**. Run the same move on something with *no* hidden grain and it does nothing — the tangle stays near **one**. Zero versus one: the whole idea in two numbers. A way of seeing is powerful exactly as far as it matches a grain that's actually there. (This is what the Fast Fourier Transform quietly does; you don't need the theory to feel it — you can just run the script.)

## Two walls I had to walk into to believe

**Having a simple hidden structure isn't enough — you also have to be able to find it.** I made a string from a tiny 32-bit seed, then scrambled it with the same kind of math that secures your bank login. Underneath, it's almost nothing — 32 bits of information. But hand it to a compressor and it's indistinguishable from pure static. The order is *real* and completely *invisible*. That gap — structure that exists but can't be found — is the entire reason cryptography works.

**Describing something perfectly isn't the same as understanding it.** I built a little world where X causes Y, then fit two stories to the data: the true one, and the backwards one. Measured against what actually happened, they're *identical* — same score, down to the decimal (−14162.2 both). But ask them what happens if you *reach in and change X by force*, and they shout opposite answers: 6 versus 0. Watching a thousand car crashes teaches you nothing about what happens if *you* grab the wheel — for that, you have to grab the wheel. (That's Judea Pearl's ladder of causation, if you want the name for it.)

## The picture I ended with

A better way of seeing doesn't reduce the total work in a problem. It decides how much of that work is easy "it's right here" versus hard "go dig." Get the frame right and huge chunks become easy — but you can never push under the incompressible floor, and you can never squeeze *cause* out of mere description. The old line "a good prior is everything" is almost right. The honest version: *a good way of seeing works exactly as far as it matches the structure the world actually has.* The world does half the job.

## The part that was actually mine

Here's the question I built the whole thing around: if you just squeeze chess data for patterns, do the famous human ideas — the named winning techniques — fall out on their own, without being told? Chess endgames are perfect for this, because there's a giant table of god's-honest-truth: every position is a *proven* win, draw, or loss. No guessing about whether you're right.

The results were a long lesson in how much of "insight" is really just the vocabulary you bring:

- Squeezing the data for patterns recovers *some* of the human ideas — messily, not cleanly.
- The vocabulary does the heavy lifting. The rediscovery survives a sanity check that scrambles the answers, but it *collapses* the moment I swap the rich chess vocabulary for a bland one. What you can "discover" is mostly what your language already lets you say.
- Fancy "this-enables-that" relationships added *nothing*. The one thing that helped was a plain idea I'd simply left out (a basic rule about whether a king can catch a runaway pawn). Simple beat sophisticated, every time.
- And the hypothesis I was most excited about — that "the most compressible patterns" and "the most predictive patterns" would pull apart — just didn't happen. Twice. They ended up picking different patterns that predict equally well; the reason was dull (they overlap a lot). I bet on the exciting story and lost to the boring one.

I also built the obvious chess engine — a hand-made position-scorer plus a shallow search. It plays like a decent club player, and the ceiling is the *judgment*, not the searching: a good search can sharpen good judgment but can't rescue bad judgment.

The thread through all of it: a good way of seeing buys you speed and clarity, not new powers.

## The frontier — which went sideways first

The real question isn't "can we kill search" but "how far can the right frame turn digging into looking-up?" I'm testing that directly, and it's worth telling because it broke before it worked. I made data with a shape I fully control (a branching family tree) and checked whether a *curved* kind of map — one with extra room for things that branch — beats a flat map at keeping related items close.

Run one: promising but fuzzy. Run two *contradicted itself* — the curved map looked worst exactly where it should have looked best. That smelled like my code, not the world, so I went hunting. It was my code: a fragile yardstick and a half-trained model. Fixed both. Runs three and four came out clean — the curved map wins for tree-shaped data, and its edge fades smoothly to nothing as I melt the tree into randomness. Which is the whole point: the right frame helps exactly as much as there's real structure to match. Every version, including the broken middle one, is in the repo.

## What's still open

I didn't crack the deep questions; I found where they live. We still can't predict which hidden structures are findable and which stay locked away forever. And nobody has a theory for *inventing a genuinely new way of seeing* — the Fourier-level leaps that reshape a whole field. That's the real frontier. This was a map up to its edge.

> You can't abolish search. But the way you frame a problem sets how much is cheap "look-it-up" and how much is irreducible "go-and-dig" — and the wins live exactly at the structure, never beyond it.

The code all runs and prints its own verdict: [representation-dial](https://github.com/myketheguru/representation-dial) for the foundations and the frontier, [concept-rediscovery](https://github.com/myketheguru/concept-rediscovery) for the original chess experiment.

*Next: [Part 2 — Why representation is everything](/why-representation-is-everything/).*
