---
layout: post
title: "Part 4: How to contribute to the future of search"
date: 2026-06-27 12:00:00 +0000
permalink: /how-to-contribute/
---

The first three parts were about ideas. This one is about *work* — what it actually looks like to push on the frontier this opens up. I'll start with a result that didn't go my way, because it set the tone for the rest.

## A result that didn't hold

The whole project grew out of one original experiment: if you just squeeze chess data for patterns, do the famous named human techniques fall out on their own? I picked chess endgames on purpose, because they come with a table of absolute truth — every position is a proven win, draw, or loss, no noise. You can check your answer against reality, which is a rare luxury.

I had a headline hunch I was genuinely excited about: that "the patterns that compress the data best" and "the patterns that predict the outcome best" would clearly pull apart. I was sure of it.

The result: a gap of **+0.004**. Basically zero.

My first thought, like anyone's, was "my measurement is broken." So I rebuilt the test — stricter, fairer. The result: **+0.000**. The effect I was certain of just wasn't there, and the reason was dull: the two kinds of patterns overlap so much that they end up equally predictive. A boring true explanation beat an exciting false one, which is roughly how the whole project went.

## The reframe: don't abolish search, make access cheaper

So what's the real frontier? It falls straight out of the arc. We can't abolish the searching — but the way you frame a problem is a dial, setting how much of it is cheap "it's right here" versus expensive "go dig." That single shift — from *delete the work* to *move the work into the right shape* — is where all the buildable progress is. You stop chasing a universal magic trick the math says can't exist, and start asking a question you can actually answer: *for this kind of problem, what frame turns the most digging into looking-up?*

There are two genuinely real, genuinely fundable frontiers here. Both *move* the cost somewhere cheaper. Neither deletes it — and being clear about that is what keeps the work grounded.

<figure class="illo"><img src="/assets/img/illo-roads.svg" alt="Two roads forward from a single point." loading="lazy"><figcaption>Two roads forward — neither deletes the work.</figcaption></figure>

## Frontier one: finding the right "shape of space"

The first is the one this whole series circles: find the kind of map that matches a problem's structure, so that "close together" means "related" and you can just walk to the answer instead of searching for it. When your data branches like a family tree, an ordinary flat map runs out of room fast — but a *curved* kind of map, one that keeps expanding as you go outward, holds a branching tree comfortably. When a problem has a symmetry, there's a frame that untangles it. The work is finding the shape that fits.

This is where a curious person with a laptop can genuinely contribute, because the bottleneck isn't a billion-dollar cluster — it's careful, honest measurement against known truth, which the field is short on. My own bit here is small and bounded, and I walk through it fully in [Part 5](/the-frontier-resolved/): a study of exactly *how much* a well-matched map turns digging into looking-up, on data whose structure I control completely. It reproduces a known result (curved maps hold branching data better than flat ones — shown years ago by Nickel and Kiela) — but the *framing*, and the careful reckoning with where the advantage shows up and where it fades, is the part worth adding. Small, not a breakthrough. That's fine; most real contributions are one clean thing.

## Frontier two: the hardware underneath

The second frontier is physical, and here I have to be precise, because it's the one most prone to hype. Modern chips burn most of their energy not on computing but on *shuttling data back and forth* between memory and the processor — a decades-old design bottleneck. A new wave of "brain-inspired" chips attacks exactly this: put the memory and the computing in the same place, and only fire when there's something to do, the way neurons do. The energy savings are real and large.

But here's the sentence that keeps it honest: **this new hardware cuts energy and time, not difficulty.** It makes running the unavoidable work dramatically cheaper. It does *not* shrink the search. If you go in believing a new chip will fold space and hand you the answer for free, you'll be let down. If you go in knowing it lets you run the irreducible work at a fraction of the power, you'll build something valuable. And the on-ramp is real — there's beginner-friendly software for this, cheap hardware you can put on your desk, and research programs that hand out time on the real thing. It's a multi-year skill to build, not a weekend, but the door is open.

## The shape of a contribution

If you take one thing from this part, take the shape rather than the specifics. Both frontiers *move* cost — one into a better frame, one onto cheaper physics. Neither gets something for nothing, because nothing does.

And both reward the same habits: measure against real truth, report the results that don't work as clearly as the ones that do, and credit the people whose work you're building on. I'm an independent researcher doing this in the open, with AI as a thinking partner. If that resonates, I'd like to hear from you — the repos are public and everything runs.

In the final part I walk through one of my own experiments end to end, including the stretch where my own code was the problem, and what fixing it showed.

---

*The original experiment is in [concept-rediscovery](https://github.com/myketheguru/concept-rediscovery); the foundations and the frontier work are in [representation-dial](https://github.com/myketheguru/representation-dial). Next: [Part 5 — The frontier, resolved](/the-frontier-resolved/).*
