---
title: General information
childOrder:
  - mod-tools
  - art-tools
  - community-tools
  - source-data
  - tags
  - maps
  - developer-console
  - scripting
  - blam
  - command-line
  - scale
  - help
---
Modding means different things to different people. It can include modifying game files, hacking/extending the game's code or runtime memory, or creating custom content via the official [mod tools](~mod-tools). This site currently focuses on using the official mod tools for the games in the MCC and Halo Custom Edition, but the information here may still be relevant if you're targeting other platforms like Xbox or creating other kinds of mods.

We don't cover modding these games:
* Halo Online and [ElDewrito](https://www.eldewrito.org/),
* Halo 2 Vista and [project cartographer](https://www.cartographer.online/),
* Halo Wars, though you can visit [halowarsmodding.github.io](https://halowarsmodding.github.io/) to learn about it.

At a high level, you will be using the tools to create and edit [tags](~), build [maps](~) from them, then share those maps or [publish](~excession) them to Steam workshop.

# A foreword
It's important to set some expectations before we begin. Halo modding is a fairly niche hobby so documentation and tutorials won't always be available. Despite our efforts here at c20, there's just a lot of ground to cover and [official documentation](https://learn.microsoft.com/en-us/halo-master-chief-collection/) is limited or outdated. The games are closed source and despite the long history of Halo modding, discoveries are still being made in 2024 about how they work.

[The official tools](~mod-tools) were not originally intended for public use and they sometimes lack the polish or quality of life features expected from modern toolchains. Compared to something like _Unity_ or _Unreal_, [Halo's engine](~general/blam) is more specialized and purposely limited for the hardware of the time and these limits can sometimes feel arbitrary. Halo was built to be a sandbox shooter, so its systems are tailored to support that and you'll have an easier time working with the engine than against it. Some find that the [tags](~) system provides a more structured "batteries included" framework than other engines.

We encourage you to **take things slowly**. People often start with a highly ambitious vision, only to get discouraged and give up entirely when they hit walls. You can spend years perfecting your craft in one area like level creation but still know nothing about another like animation. It's important to make small goals so you don't get overwhelmed. Remember that Halo's content was created by dozens of artists and designers over years of work.

Depending on your modding goals, you may need to learn general 3D modeling, animating, and texturing concepts and how to use tools like Blender effectively. Take some time to get familiar with your [art tools](~).

Finally, keep your momentum up by learning how to [troubleshoot and ask for help](~help).

# Getting started
If you're ready to start, [download](~mod-tools#installation) the mod tools from Steam (and/or the HEK for [Custom Edition](~custom-edition)), then read through the following core concepts. These apply no matter which game you're planning to mod:

{% childList /%}