---
title: About
description: What is Camp Crystal Lake?
---

# About Camp Crystal Lake

The counselors went home. The servers went dark. But the lake doesn't forget.

Camp Crystal Lake is a community-run server for **Friday the 13th: The Game** on PlayStation. Gun Media pulled the plug on the official servers a while back, so a few of us brought them back.

## What you get (or can get)

1. Public matchmaking
2. Private lobbies
3. Every trophy (two Platinum trophies earned so far)
4. Persistent stats
5. Pamela, our Discord bot for checking stats and server status

## Timeline

- **~July 2025** - Started as a solo side project. Got the game talking to a fake backend, tested alone, then the project sat idle for months
- **Jan 25, 2026** - Public launch. The camp opened for real
- **Now** - Active community, live server, ongoing work on the standalone `ccl-server` binary

<!--

## Who runs it

-->

## PS Plus

Yes, it's required. Online multiplayer on PlayStation goes through Sony's network, and nothing we host can change that. If we could bypass it, you wouldn't be reading about it here.

## The community so far

147 counselors on the server, 121 in the Discord. Thank you for being part of our community!

## Keeping the lights on

Running the server isn't free. Hosting, domain, the usual. Total cost comes in under $5 a month depending on player activity. Not a huge bill, but it's not zero either.

If you want to help cover it, there's a [Ko-fi](https://ko-fi.com/campcrystallake). Every cent goes to infrastructure. No perks, no in-game advantages -- just helps keep the place running.

## Where this is going

Rough plan for 2026:

1. **Ship the standalone `ccl-server`** (July 2026). Single binary, open source, anyone can host their own camp. Local database is encrypted so hosts can't tamper with player data
2. **Talk to PSNProfiles** once the open-source path is stable, to see if self-hosted trophies can avoid the flag
3. **Public leaderboards**, once we figure out how to link PSN IDs to Discord accounts without trusting either side. The plan right now is a short verification code players drop into their PSN "About Me", we check it, we forget it

No promises on dates beyond that.

## Why the main server isn't open source

The original game's protocol has real security holes. The layers we've added on top keep player data safe, but they only work because they're not public. Publishing them would let people tamper with other players' accounts.

The standalone `ccl-server` is a different story -- it's a lighter version meant for individual players, and it will be fully open source when it ships. That gets us both: a hardened main server and a community-hosted option anyone can audit.

Transparency still matters to us. That's why we built the wiki you're reading.
