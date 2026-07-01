---
layout: post
title: "Part 3: Computation is explanation"
date: 2026-06-26 12:00:00 +0000
permalink: /computation-is-explanation/
series: "Can We Abolish Search?"
part: 3
category: research
summary: "Why describing the world isn't the same as understanding it."
tags: [search, representation, computation, foundations]
---

By the end of [Part 2](/why-representation-is-everything/), the picture had settled: the way you frame a problem is a lever — floored below by things you can't summarize, capped above by what you can actually reach, and it works by lining up with a grain the problem already has. The obvious next move is to lean hard on *compression*. Squeezing data down to its shortest description is the mathematical version of "finding the pattern" — the shorter the summary, the more structure you've captured. It's the idea behind Occam's razor: the best explanation is the simplest one that fits.

So I went looking for the limits of compression, expecting not to find any worth worrying about. I found one immediately, and it changed how I think about what computing is *for*.

## Two stories, one dataset, opposite futures

Here's the demo, and it's small enough to describe completely. I make data from a simple world where X causes Y — X is some random noise, and Y is roughly twice X plus more noise. Then I fit two stories to the *same data*. The first is the truth: X drives Y. The second is the reverse: pretend Y came first and X follows.

Then I measure how well each story compresses the data. The true story scores **−14162.2**. The backwards story scores **−14162.2**. Not close — identical, to the decimal.

Compression can't tell them apart. From the data alone, "X causes Y" and "Y causes X" are the same length, the same fit, the same everything. If your only tool is "find the shortest description of what I've seen," you are *blind* to which thing is actually causing the other.

And that's not a footnote. Ask each story what happens if you *reach in and set X to 3 by force*. The true one says Y jumps to 6, because X drives Y. The backwards one says Y doesn't move at all, because in its telling X is downstream and can't push Y around. Same data, same compression score, and the predictions for *acting on the world* are 6 versus 0 — about as far apart as predictions get.

<figure class="illo"><img src="/assets/img/illo-cause.svg" alt="Two identical curves that split the moment you intervene." loading="lazy"><figcaption>Same data — until you reach in and change something.</figcaption></figure>

## The rung compression can't reach

This isn't a quirk of my toy — it's a theorem, and it belongs to Judea Pearl. Think of a ladder with three rungs: *seeing* (what goes with what), *doing* (what happens if I intervene), and *imagining* (what would have happened otherwise). The rungs are genuinely separate: for almost any situation, the higher rungs are *not* settled by the lower ones. Plain observation lives on the bottom rung. No amount of squeezing it gets you up to the next one.

Compression lives on the *seeing* rung. At its best it's a perfect summary of what you watched happen. But "what happens if I act" is a different rung, and you can't climb there by describing the past more efficiently. You have to *act* — run the experiment, change something on purpose — and collect evidence that no amount of watching could contain.

So the things people sometimes set against compression — experiments, intervention, trying things — aren't its rivals. They're how you reach a rung it structurally can't. Compression *picks* the best story among the ones you can already see. Intervention *creates* the evidence that separates real causes from lucky coincidences. You need both, and they do genuinely different jobs.

## What keeps showing up: the dial

Step back over the whole arc — the searching you can't delete in [Part 1](/can-we-abolish-search/), the power and limits of framing in Part 2, and now compression's blindness to cause — and the same object keeps appearing under different names. Call it the **dial**.

A frame doesn't change how much total work a problem takes. It changes how the work is *split*: how much becomes cheap, direct *access* — the answer's just sitting right there — and how much stays irreducible *search*, where you have no choice but to dig. The shape of the problem, the coordinates you embed it in, the assumptions you bring: all of it is the dial, setting the ratio of easy to hard.

<figure class="illo"><img src="/assets/img/illo-dial.svg" alt="A dial swinging between access and search." loading="lazy"><figcaption>The frame is a dial: cheap access ⟷ hard search.</figcaption></figure>

And the dial only turns as far as the structure allows. Here's the grown-up version of "more assumptions are better": averaged over *every possible problem*, every set of assumptions performs exactly the same. (That's a real theorem — Wolpert and Macready's "No Free Lunch.") A prior only wins on the problems whose structure it happens to fit. So the slogan I started with — "capability tracks the prior" — needs the one correction I think is the most important line in the series: **capability tracks the *match* between your assumptions and the structure the world actually has.** The prior isn't magic. It's a key, and it only opens locks shaped like it. The world has to be doing half the work.

## Computing as building explanations

Here's where it lands, and why I think "computation is explanation" is more than a slogan.

What *is* an explanation? The cleanest definition I can give, after all this: an explanation is a way of framing a problem that exposes its hidden constraints, so you can predict with far fewer moving parts than the raw data seemed to need. Newton's laws are an explanation. A good filing system is an explanation of where things live. And a *causal* model is an explanation too — with one crucial extra: it's the only one of these that survives you reaching in and changing something, because it captures not just what goes with what, but what *drives* what.

In this view, computing is the act of building and then using explanations. Efficient methods are efficient because they expose some explanatory structure — a symmetry, a repetition, a hidden variable — that collapses the apparent mess. And searching is simply what's *left over* after every exploitable bit of structure has been factored out. The deepest line the causal demo forced on me: a summary *describes*; an explanation lets you *act*. Compression gets you a faithful account of the past. It does not, by itself, get you a theory you can steer by.

That reframes the whole thing one last time. I started with "can we abolish search?" and the answer was no. The better question turned out to be: given that the searching is conserved, how much of a problem can the right frame turn into cheap access — and how do we *find* that frame? That's not a question about deleting work. It's a question about *finding explanations*, which is a much older and much more interesting thing to be doing.

Next, I get concrete: if this is the right way to see it, what does it actually look like to *contribute* — where are the real, buildable frontiers, and what does the day-to-day method (including the experiments that flop) look like in practice?

---

*The causal demo is in [representation-dial](https://github.com/myketheguru/representation-dial) (folder 03), and the full synthesis is written up in its position note. The original chess experiment, nulls and all, is in [concept-rediscovery](https://github.com/myketheguru/concept-rediscovery). Next: [Part 4 — How to contribute to the future of search](/how-to-contribute/).*
