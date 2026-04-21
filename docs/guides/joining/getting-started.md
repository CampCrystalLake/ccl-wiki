---
title: Joining the Server
description: Step-by-step DNS setup for PS4 and PS5 so you can join Camp Crystal Lake.
---

# Joining the Server

The lake is waiting, counselor. All you need is a PlayStation and two minutes.

!!! tip ":simple-discord: Join our [Discord](https://discord.gg/dn4pacGHe3) server!"

    Camp Crystal Lake isn't just a server. It's a community. Here's what waits for you:

    === ":material-access-point: Server Status"
        `#status` shows whether the server is up. Pamela updates it in real time

    === ":material-account-multiple-plus: Find Games"
        `#boosting` is where players coordinate full lobbies and trophy sessions

    === ":material-chart-bar: Your Stats"
        Use `/player` with the Pamela bot to check your record without turning on your console. See [Stats & Progress](stats.md) for what she knows

    === ":material-shield-bug: Bug Reports"
        `#bug-reports` is where problems go. You might earn the Bug Killer role

## What you need

- A PS4 or PS5 with Friday the 13th: The Game installed
- PS Plus (required for any online multiplayer on PlayStation)

## Change your DNS

!!! info "What's a DNS?"

    [DNS (Domain Name System)](https://en.wikipedia.org/wiki/Domain_Name_System) is the phonebook your console uses to find servers on the internet. By pointing it at our address, the game asks us for the F13 backend instead of Gun Media's (which is gone).

    It only affects Friday the 13th. Everything else on your PlayStation keeps working the same way.

**Primary DNS:** `46.62.159.148`

=== "PS4"

    1. **Settings** > **Network** > **Set Up Internet Connection**
    2. Pick **Wi-Fi** or **LAN**, whichever you use
    3. Choose **Custom**
    4. Leave everything default **except DNS**
    5. Set **Primary DNS** to `46.62.159.148`
    6. Set **Secondary DNS** to `8.8.8.8` (more on this below)
    7. Test the connection, then launch the game

=== "PS5"

    1. **Settings** > **Network** > **Settings** > **Set Up Internet Connection**
    2. Select your network
    3. Press **Options** for **Advanced Settings**
    4. Change DNS to **Manual**
    5. Set **Primary DNS** to `46.62.159.148`
    6. Set **Secondary DNS** to `8.8.8.8`
    7. Test the connection, then launch the game

Open Friday the 13th. If you see the main menu, you're in.

!!! note "What's the Secondary DNS for?"

    Primary is us. Secondary is your fallback for everything else -- normal web stuff, PSN, other games. We use Google's `8.8.8.8` as a default, but any public DNS works:

    - Google: `8.8.8.8`
    - Cloudflare: `1.1.1.1`
    - Quad9: `9.9.9.9`

    Pick any of them. Doesn't change anything F13-related.

## Reverting your DNS

Want to leave camp? (We wouldn't recommend it.)

=== "PS4"

    1. **Settings** > **Network** > **Set Up Internet Connection**
    2. Select your connection type
    3. Pick **Easy** - this resets everything to default

=== "PS5"

    1. **Settings** > **Network** > **Settings** > **Set Up Internet Connection**
    2. Select your network
    3. **Options** > **Advanced Settings**
    4. Change DNS back to **Automatic**

## Troubleshooting

| Problem                                                 | Try this                                                                                                                 |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| "Database login failure! Verify internet connectivity." | DNS is wrong, or the server is down. Double-check the IP and check `#status` on [Discord](https://discord.gg/dn4pacGHe3) |
| Other games stopped working                             | Your Secondary DNS is probably missing or broken. Set it to `8.8.8.8`, `1.1.1.1`, or `9.9.9.9`                           |
| Can't connect at all                                    | Run the PlayStation's **Test Internet Connection** -- it tells you where it's failing                                    |
| Lag or high ping                                        | The server lives in Europe. If you're on the other side of the planet, that's most of it                                 |
