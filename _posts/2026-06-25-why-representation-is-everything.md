---
layout: post
title: "Part 2: Why representation is everything"
date: 2026-06-25 12:00:00 +0000
permalink: /why-representation-is-everything/
---

In [Part 1](/can-we-abolish-search/) I chased one question to the bottom: can a clever enough way of *seeing* a problem make the hard searching disappear? The answer was no — the work is conserved; you can move it around, but you can't delete it. That sounds like a dead end. It's actually the setup for the most useful thing I found: the way you frame a problem is *almost everything* — just not in the way the hype promises.

It's a story in three parts. There's a floor you can never get under. There's an enormous amount of leverage the *right* frame unlocks. And there's a trap in between, where a pattern is genuinely there and yet no efficient method can find it. I built a small, runnable demo for each — I don't trust an idea I can't execute.

## The floor you can't get under

Start with the bad news, because it's the part the hype skips: some things are simply un-summarizable, and no amount of clever notation changes that.

Here's the intuition. Imagine every possible "rule" that turns a handful of yes/no inputs into a yes/no answer. There are *astronomically* many of them — far, far more than there are short ways to write things down. Short descriptions run out long before the rules do. So *almost every* rule has no short description. Not because we haven't been clever enough — because there isn't enough room in "short descriptions" to hold them all.

The natural objection: "sure, but that's relative to one way of writing things down — invent a richer notation and it changes." It doesn't, and that's the deep part. There's a classic result (Kolmogorov's) that says the shortest way to describe something is essentially the same across *any* reasonable system, give or take a fixed amount — because each system can imitate the others. So "this thing can't be compressed" isn't a quirk of your notation. It's close to absolute, and it survives every change of representation you'll ever invent.

My demo measures the same rules three completely different ways and shows the punchline: a *random* rule is big in all three at once. There's no magic notation that shrinks it, because there's nothing inside it to exploit. That's the floor.

## When the frame is pure leverage

Now the good news, and it's huge. That same demo shows that for a *structured* thing, the notation you pick changes its size by orders of magnitude.

Take a simple rule — "is the number of 'yes' inputs odd?" Written one way, it's a monster: for 12 inputs it needs 2,048 pieces. Written another way, it's tiny: 12 pieces. Same rule. A 170-times difference, decided entirely by how you write it down. And it flips: a *different* rule is tiny in the first notation and a monster in the second. There's no single "size" of a rule — two rules even swap places depending on the frame. Which means the right representation isn't a nicety. It's the line between "trivial" and "hopeless."

Why does a frame have this power? Because a good one lines up with a grain the problem already has. My favorite demo makes it physical. There's an operation at the core of signal processing and a lot of AI. In ordinary coordinates it's a dense, tangled thing. Switch to the coordinates that match its natural symmetry, and measure how much "tangle" is left: **0.0000**. It becomes perfectly clean — every piece independent. That's the entire reason the Fast Fourier Transform is fast. Now run the same trick on something with *no* symmetry to exploit, and the tangle stays at **0.97** — the frame does nothing, because there's no grain to follow. That contrast, 0.0000 versus 0.97, is the whole thesis in two numbers: a frame is leverage exactly to the degree it matches a structure the problem actually contains. (Researchers call the well-matched frame the "Fourier basis"; the modern version of this idea, aligning a model with the data's symmetry, is what people mean by *geometric deep learning*. But you can just watch the number drop to zero.)

## The trap: real, but unfindable

Here's where I had to correct myself, and where the most interesting boundary sits.

It's tempting to conclude: structure equals easy. If a thing is really controlled by just a few hidden knobs, surely you can find them and win. I half-believed that. It's false, and the counterexample is the entire field of cryptography.

My demo builds three strings. The first has *visible* simple structure — it's a repeating pattern, and a compressor crushes it to almost nothing. The third is *genuinely* random. The second is the interesting one: I make it from a tiny 32-bit seed and then scramble it with the math behind secure logins. Underneath, it's *completely determined* by those 32 bits — barely any real information at all.

Run a compressor on all three. The first shrinks to a sliver. And the second and third come back **indistinguishable** — both look like pure noise. A standard pattern-finder can't tell the string with 32 bits of hidden order apart from actual randomness. The structure is *real* and it is *computationally invisible*.

That gap has a name: it's the difference between "few hidden knobs" and "few hidden knobs you can actually find," and it's exactly what cryptography is built on — hiding simple structure so well that no efficient method recovers it. Which means being simple underneath is *necessary but not sufficient* for being easy. The structure has to be there *and* reachable. The world is full of real patterns that are, for all practical purposes, locked.

## The three together

So here's the honest picture of why representation is everything — meaning *what it actually is*, not what we'd like.

There's a hard floor: some things can't be summarized, and no frame — invented or yet to be invented — gets under it. Above that floor, the frame is the biggest lever you have: the right one can shrink a problem enormously, by lining up with a grain it already has — a symmetry, a repetition, a locality. And between the floor and the leverage sits the trap: a pattern can be entirely real and still hidden beyond reach, the way a scrambled seed hides in plain sight. Finding the right frame isn't guaranteed, and for some problems it's provably hard.

I find that far more satisfying than "AI will make search obsolete." The power lives in the *representation* — the choice of coordinates, the choice of assumptions — bounded on one side by a floor you can't cross and on the other by what you can actually reach. The whole game of building intelligent systems is finding the frame that lines up with the structure that's there. Not abolishing the work. Relocating it into the right shape.

Next, I push one rung further: if the frame is a dial that sets how much of a problem is cheap versus irreducible, then what *is* the thing we're really doing when we compute? The surprising answer — with one more runnable demo — is that we're building **explanations**, and that squeezing data for patterns, powerful as it is, is blind to the one thing explanations need most.

---

*The demos here are runnable in [representation-dial](https://github.com/myketheguru/representation-dial) (folders 01 and 03). The original chess experiment that this series grew out of, nulls and all, is in [concept-rediscovery](https://github.com/myketheguru/concept-rediscovery). Next: [Part 3 — Computation is explanation](/computation-is-explanation/).*
