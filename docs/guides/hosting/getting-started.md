---
title: Host Your Own
description: Run your own Camp Crystal Lake server. One binary, no setup.
---

# Host Your Own Server

Want to run your own camp? Download one file, run it, you're done.

!!! warning "Coming soon"

    `ccl-server` hasn't shipped yet. We're aiming for July 2026. Everything below is how it'll work once the first release is out. In the meantime, you can play on the main [Camp Crystal Lake](https://discord.gg/dn4pacGHe3) server.

!!! warning "Separate player data"

    Each server is its own world. Stats you earn on your own server don't carry over to the main Camp Crystal Lake server, and vice versa. Everyone starts fresh.

## What you need

- A **PC** (Windows or Linux) that stays on while people play. Any machine from the last decade will do
- A **network** where either:
    - The PS4 is on the **same Wi-Fi/LAN** as the PC (easiest)
    - You **port forward** so friends from the internet can connect (a bit more work)

## Step 1: Download

| Platform                             | Download                                                                                                  |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| :material-microsoft-windows: Windows | [ccl-server.exe](https://codeberg.org/CampCrystalLake/ccl-server/releases/latest/download/ccl-server.exe) |
| :simple-linux: Linux                 | [ccl-server](https://codeberg.org/CampCrystalLake/ccl-server/releases/latest/download/ccl-server)         |

!!! info "Is this safe?"

    The server is fully open source. You can [read every line of code](https://codeberg.org/CampCrystalLake/ccl-server). Still unsure? Upload it to [VirusTotal](https://www.virustotal.com/), it'll come back clean.

## Step 2: Run it

=== ":material-microsoft-windows: Windows"

    1. Make a folder somewhere, e.g. `C:\CCL`
    2. Put `ccl-server.exe` in it
    3. Open a terminal in that folder (right-click -> "Open in Terminal" on Windows 11)
    4. Run:

       ```pwsh
       ccl-server.exe
       ```

    !!! tip "Firewall"
        Windows will ask to allow the server through the firewall. Click **Allow**. The server needs to accept incoming connections on ports `9110`, `9120`, `9130`, `9140`, `9150`, and `3030`.

=== ":simple-linux: Linux"

    Not much has to be explained if you use Linux :)

    ```bash
    chmod +x ccl-server
    ./ccl-server
    ```

That's it. The server listens on your machine and waits for PS4s to show up.

??? info "All the flags"

    You rarely need these. The defaults just work.

    | Flag         | Default     | What it does                                  |
    | ------------ | ----------- | --------------------------------------------- |
    | `--bind-ip`  | `0.0.0.0`   | IP address to listen on (all interfaces)      |
    | `--data-dir` | `data`      | Where to store the database and certificates  |

## Step 3: Connect your PlayStation

On the PS4, change the **Primary DNS** to the IP of the PC running the server. The [setup guide](../joining/getting-started.md#dns-settings) has the full walkthrough.

- **Same network:** use the PC's local IP (e.g. `192.168.1.100`)
- **Over the internet:** use your public IP, and make sure ports are forwarded (see below)

## Port forwarding

If your friends are joining from outside your network, tell your router to forward these ports to the PC running the server:

| Port | Protocol |
| ---- | -------- |
| 9110 | TCP      |
| 9120 | TCP      |
| 9130 | TCP      |
| 9140 | TCP      |
| 9150 | TCP      |
| 3030 | TCP      |

!!! note "How do I port forward?"

    Every router is different. Search your router model + "port forwarding" on YouTube, or check [portforward.com](https://portforward.com/).

## Where your data lives

Everything is in a `data/` folder next to the binary, created on first run:

```text
your-folder/
  ccl-server(.exe)
  data/
    ccl.db         # SQLite database with all player data
    certs/
      cert.pem     # auto-generated TLS certificate
      key.pem      # auto-generated TLS key
```

Back up the `data/` folder and you've backed up the whole server.

## Updating

Stop the server, replace the binary, start it again. Your `data/` folder stays where it is, nothing to migrate.

## What's different from the main server

The main Camp Crystal Lake server has Pamela, live server-status, cross-server features, PSNP talks, and so on. `ccl-server` is just the game backend, stripped down:

- No Pamela commands
- No stats shared with the main server
- No leaderboards
- No built-in moderation

If that's all you need, great. If you want the community experience, stick with the main server.

## Troubleshooting

| Problem                             | Solution                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| "Address already in use"            | Something else is using those ports. Close it, or let us know in Discord     |
| PlayStation can't connect           | Check the PS4's DNS actually points at the PC. Check the PC's firewall       |
| Friends from internet can't connect | Ports aren't forwarded. Double-check your router                             |
| Server crashes                      | Report it on [Discord](https://discord.gg/dn4pacGHe3) with the error message |
