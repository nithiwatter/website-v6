---
author: Calix Huang
date: '2021-06-13T07:00:00.000Z'
hero_image: https://calix.dev/static/bugs.jpg
title: 'Bugs'
preview: "5 weeks of bugs. Hope it makes for a good story."
tag: "journal"
---

Any programmers reading right now understand the torture of having bugs in your code. I sure do. But, have you ever had the same issue popup for 5 weeks straight? I have. Here’s the story of Hours, and my 5 weeks of torture.

**DISCLAIMER:** The dates you’ll see do not naturally add up to 5 weeks, and that’s because there were at least 4 other incidents that I did not cover here. They weren’t significant enough to be mentioned.

## First strike (Feb 21)

Woke up on a nice Saturday morning. I had just built and released a big feature for Hours the previous night and was feeling great. Activity on Hours was usually low on weekends, so I had a few more features and housekeeping items planned to knock out that weekend. I was also excited that day because I was going to be participating as a speaker in a panel speaking about landing internships in high school.

Picked up my phone and started scrolling through my notifications. But then, I realized something was wrong. I saw 10+ bug reports, an overflowing inbox of messages from users saying nothing was loading, and alerts from my monitoring services saying the Hours servers had completely crashed.

This issue is what’s called a scalability issue. It’s not necessarily an issue with your code, but the way your application is set up. If your infrastructure is inefficient, your servers will die as more people use it. You can’t just rollback your code, or point at a specific part of your code and fix it - you need to restructure everything.

For 4 hours, I sat alone in my office debugging, reading logs, and googling in pure panic. And don’t worry, there were at least 2-3 crying sessions, but we don’t talk about that 🤫 

But finally! At noon I implemented a solution, and the servers were working again. I made a bunch of small changes and scaled my pricing tier to make everything work. By then, the panel was just about to start and I still hadn’t brushed my teeth, eaten anything, changed my clothes, drank water, or walked my dog. I did all of those things, happy with myself and my work, and finally relieved that it was all over.

After I came back from walking my dog, 10 minutes before the panel started, the servers crashed **again.** 

I ended up having to speak at this panel, while debugging at the same time, and continued the same torture as the morning for the next 4 hours, until I had to leave to play tennis with a friend, still with no fix. After coming back and having some time to think and clear my head, I was able to fix everything pretty quickly.

So in total, I ended up spending 9 hours in one day fixing issues and pulling my hair out, all while all of my users were just piling complaints upon me. But, I was happy it was all finally over.

## Morning Brew (Feb 23)

I was on Cloud 9. Why? Hours was just featured in Morning Brew! Morning Brew is the biggest email newsletter in the world, with over 2.5m subscribers and being owned by Business Insider. Peaking every single metric and getting the credibility of a publication as famous as Morning Brew made me feel so validated, and the last 4 months of pouring my heart and soul into this project felt so worth it.

Things could only go up from here… or maybe not.

## Second strike (Feb 24-26)

Imagine being able to celebrate. After achieving something super amazing, and just when I thought I was all that, reality hit me like a train.

Another scalability issue. And this time, even bigger than before - so big that there were no small changes I could make, no pricing tier high enough to fix it. I spent 18 hours that day trying absolutely everything I could - new frameworks, tools, tiers, everything. I skipped 2 meals that day, just sitting at my computer and contemplating what the heck I was doing with my life. There were so many moments of stress, to the point where I almost gave up at least 4 times.

So there I was, sitting at my desk alone at 1am, with absolutely no idea what I was going to do. It hurt. I was dancing with happiness the day prior, and here I was, completely hopeless. I had run into a wall that I could not pass, so there was only 1 thing I could do: a maintenance period.

It would make no sense to leave Hours open if it wasn’t working. At least if I shut down the platform so that no one could use it, I would be able to work on this issue in peace without hearing complaints every 5 minutes. So, that’s exactly what I did.

The next day, and after calling with my mentor a bunch, I realized there was only one option: a data restructure. The way the data was structured at the time was super inefficient and messy, and it was affecting the performance of my servers. 

Though I was happy that I had found the solution to my issue, I was super dreadful. There were 3 things I would have to do: rebuild the data models, migrate all of the current data into those new models, and re-write all of the server code, while also making sure every single operation was formatted to run as efficiently as possible. Basically, I had to rebuild all of the backend logic used on Hours to appeal to the new data structures. A huge task.

What did I do? **I grinded.** I completed the entire data restructure within 20 cumulative hours of non-stop work across 2 days, and finally got a newly revamped platform up and running by day 3, and finally ended the 3-day maintenance period. I was so tired and relieved - I knew the revamp that had been implemented was legit, and would stop these issues for a while.

## Platform migrations (Mar 6)

Did you really think a data restructure and logic code rewrite was enough to fix the scalability issues? Clearly, it wasn’t.

**Another issue appeared.** This time, the real-time aspect of Hours was breaking. The aspect of Hours that allows sessions to function properly was overloaded. It was an issue that had popped up a few times before, but this time the servers were beyond stressed - it was completely obliterated.

Again, I had another day full of debugging, googling, and pulling my hair out. After 15 hours of searching and being on the verge of putting up another maintenance period, I found out that the platform I was hosting my servers on, Heroku, was the worst platform I could possibly use for real-time activity. I realized I would need to migrate my servers to a new platform, another huge task. Luckily this issue had popped up on a pretty slow weekend, so there were less complaints and no need to shut down the platform. But, this also meant I only had 2 days to finish this migration in preparation for Monday.

The first attempt at this platform migration was using AWS. There was just one little thing I forgot: AWS is one of the hardest platforms to use I could’ve chosen. After almost 8 hours of tutorials, calls with my mentor, and configuration fails, I finally gave up. AWS has so many services that they tie multiple of them together when deploying a new platform, making it not only hard to actually do, but even just understand.

My second attempt was migrating to Google Cloud Platform. A much better choice than AWS, but still not great. It only took me around 4 hours to configure everything needed to not only host the Hours servers, but also all the surrounding developer processes needed to build efficiently. I would’ve stuck with GCP, but there was a big issue. GCP would consistently kill all real-time connections after 1 hour, which was bad. Hours sessions run > 5 hours on average, and making everyone lose connection and have to regain connection every hour was something that would not work out. I was so close, but still had to start over.

Finally, I was too late. It was already Monday morning, users were flooding the site, and everything was breaking. But weirdly, I felt kind of at peace. I was so sick and tired of trying to appeal to my users and stressing over things that were out of my control. And thank goodness for this composure. My final attempt at a platform migration was to Digital Ocean, which I was able to configure, test, and release within 2 hours, finally solving this real-time issue.

## Database crash (Mar 13)

This came out of the blue. To this day, I still have no idea why this issue popped up, or what events triggered it.

Things had been smooth up until this point - there weren’t as many crashes and I had a good 2 week streak of 100% uptime.

And then, the performance of my servers went straight through the floor. 

You know the drill. I spent 10 hours that day stressing, receiving and apologizing to complaints, and trying to figure out what the issue could possibly be. The whole day I was just thinking, “How many issues could I possibly run into? I didn’t even know that this many things could fail.”

I finally pinpointed the issue: our database. For some reason, our hosting provider did not tell us this, but we had overrun the limits for our current pricing tier. A simple upgrade, and the deed was done.

## Database crash pt. 2 (Mar 29)

Here’s the context: we are 3 days away from signing the final contracts to finalize the Hours x Fiveable acquisition, and we just had an influencer TikTok go viral - over 1m views.

Because of the viral TikTok, all of our data almost doubled. We had over 60k sessions created, and well over 15k users at that point. The new surge of data exposed a part of Hours that I thought was prepared to scale: our database. Around noon, I started getting a surge of emails from my database provider saying that the CPU usage on my database was skyrocketing above 300%.

No big deal, right Calix? This isn’t your first rodeo, it’s like your 6th.

That’s true, but there was a lot more added pressure this time. Why? Because the acquisition signing was 3 days away. The process had taken over 5 weeks at that point, and seeing a huge production crash like this could possibly put the deal in jeopardy.

And once again, another 14 hour debugging session was put into place. Checking the ins and outs of the database, seeing it’s relation with the server performance, and upscaling and downscaling the pricing tier - nothing would work.

After many hours of searching, I had a clear idea of what was wrong and I was close to fixing it, it just required a bit more work. After a small break and dinner, I was able to implement a fix within 2 hours and ensure everything was working properly.

-------

## Epilogue

Building a startup is hard. More specifically, building a product that a lot of people use is hard. Obviously a great product requires a great idea, a great market, and many other factors. But purely just building and maintaining it can be very tricky, and I learned that the hard way.

Though this blog was mostly just to tell my story, I do ask one thing of everyone reading.

When you’re using an app or a website and it crashes, don’t be too critical. The hardest part about all of the issues I ran into along the way weren’t necessarily the issue itself, but dealing with all of the complaints from users. 

It all felt backwards for me: I was pouring my time, energy, and life into building this product for my users, and when an issue popped up and I was putting everything I had into fixing it, I still had to deal with all of the complaints. And at the end, I was the one apologizing, even though I wasn’t getting anything from them. 

I now have respect for anyone building a platform and putting it out there, and sympathy for those maintaining it when it crashes. I hope everyone else does as well after reading my story. When an app you use crashes or doesn’t work temporarily, don’t be critical or rude towards the developers or talk trash about the app to your friends. Be kind and understanding, because whoever is working on this behind the scenes is a lot more stressed than you are.

## Acknowledgements

I want to give a huge shoutout to my mom, and my mentor Vincenzo. 

My mom played such a huge role in every single incident by helping me calm down and think logically when I couldn’t think straight through all of the emotions.

My mentor Vincenzo played a **huge** role in helping me fix all of the huge technical barriers. He gave me guidance on the data restructure and migration, as well as the platform migration. His technical expertise was absolutely priceless, and I could not have come this far in terms of technical scalability if it weren’t for him.
