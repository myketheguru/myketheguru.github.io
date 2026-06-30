---
layout: post
title: "Part 5: The frontier, resolved"
date: 2026-06-28 12:00:00 +0000
permalink: /the-frontier-resolved/
---

This is the last part. I'll close by walking through one experiment from start to finish — including the stretch in the middle where my own code was the problem. I saved every version, so the messy runs sit in the repo next to the clean one, and that middle is where most of the learning was.

The experiment is the practical end of everything in [Part 4](/how-to-contribute/): if the right frame turns digging into looking-up, can I actually *measure* it happening? Specifically — does matching the "shape of the map" to a problem's structure really let you reach more answers just by looking nearby? And does the advantage rise and fall with how much structure is present?

## The setup

I built a testbed where I control the truth completely. I generate a branching family tree — pure structure — and I can slowly scramble it toward randomness with a knob, smoothly melting it from "perfect tree" into "random tangle." Then I place the items on two kinds of map: an ordinary flat one, and a *curved* one that keeps expanding outward and so has natural room for a branching tree. The question is whether the curved map keeps genuinely-related items closer together — and whether its edge fades exactly as I destroy the structure. If the idea is real, the curved map should win for tree-shaped data and lose that edge as the tree dissolves into noise.

## Run 1: promising, but fuzzy

The first version gave a directional hint. The curved map did help for tree-shaped data, and its advantage did seem to shrink as I scrambled the tree — positive on the tree, negative on the random tangle. Encouraging. But my yardstick was crude, and the effect was small and muddied by a wrinkle: reconstructing a tree is *inherently* harder than reconstructing a loose random graph, so the comparison wasn't clean. I reported it as what it was — promising, not conclusive.

## Run 2: it argued with itself

Then I pushed harder. There's a well-known prediction that the curved map's advantage should be *biggest* when you give it very little room to work with. If that held, I'd have a solid result.

It came back contradicting itself. Given the least room — exactly where the curved map should have won biggest — it *lost*. The "good" map looked worst precisely where it should have looked best. The numbers were noisy and pointed the wrong way.

That contradicts a result other people established years ago. So the likely culprit was a bug in my own tools, not a discovery — and I went looking for it. I wrote the run up as inconclusive, with that word, and moved on to find the bug.

## The bug was mine

It was, and there were two. First, my yardstick: I'd been checking only whether the *single* nearest item was a true match — and when you give the map very little room, everything bunches together and the single nearest neighbor is basically a coin flip. I was measuring crowding, not the map. Second, my training of the curved map hadn't fully finished cooking — the curved geometry is genuinely finicky to optimize near its edges, and I'd stopped too early. Both problems were mine. Neither was the idea's.

## Runs 3 and 4: fixed, and it holds

So I rebuilt it. I switched to a fairer yardstick — one that asks *how highly* the true matches rank overall, not just whether the single closest one hits. And I fixed the training so it actually converged.

Run three settled the "how much room" question cleanly: for a pure tree, the curved map now beats the flat one at every setting, and — exactly as the known result predicts — its edge is *biggest when room is tightest* and shrinks as you add room. Run four closed the loop on the original question, with the trustworthy yardstick. The curved map's advantage came in at **+0.128 on a pure tree** and declined smoothly as I scrambled the structure, all the way to **−0.075 on a random tangle**. Strongly ahead for real structure; gone, then behind, once the structure was gone.

That's exactly the prediction. A well-matched frame turns digging into looking-up — and the advantage is *bounded by and tracks the structure that's actually there*. Which is the whole thesis of the series, now measured directly, on data whose structure I controlled.

## About that middle stretch

The arc was: promising → contradictory → fixed → confirmed. Four versions, all in the repo, each printing its own verdict, including the one that made me look wrong for a while.

I want to be clear about what the final result is and isn't. It reproduces a known finding; the thing I'm adding is the framing — the frame as a dial between looking-up and searching — and a careful measurement of where the advantage lives and dies. It's a small, bounded result. Most real contributions are.

I kept the contradictory run in because it's part of the actual story of getting to the answer — a debugging trail, not a highlight reel. A clean final number is easy to show. The run where your own code was wrong, and how you found it, is what makes the clean number believable.

## Where this leaves the question

Five parts ago I asked whether we could abolish search. We can't — it's conserved. But that "no" turned out to be the door, not the wall. Because the searching can't be deleted, the entire game is the *frame*: finding the shape, the map, the assumptions that line up with the structure the world actually has, and so turn as much digging as possible into looking-up. The right frame can shrink a problem enormously; it can't shrink it past the floor; it can't, by summarizing alone, tell you what causes what; and finding it is sometimes provably hard. Within those honest bounds, it's almost everything.

I did this as an independent researcher, in the open, with AI as a thinking partner. The two repos hold the whole thing — the foundations, the original chess experiment and the results that didn't hold, and this frontier study with all its versions. They're public and they run. If you want to build on any of it, I'd be glad to hear from you.

Thanks for reading the series.

---

*The full experiment — all four versions, including the contradictory one — is in `04_the_frontier` of [representation-dial](https://github.com/myketheguru/representation-dial), alongside the foundations and the synthesis. The original chess experiment is in [concept-rediscovery](https://github.com/myketheguru/concept-rediscovery). Series start: [Part 1 — Can we abolish search?](/can-we-abolish-search/).*
