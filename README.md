# MidiMashup

<<<<<<< HEAD
# Process Document
## Initial Idea
To start with the main idea for this projection was actually thought up before I'd even gotten the assignment, with me already wanting to try and make a rhythm game which uses MIDI files to automatically generate a game so users could make their own custom rhythm games.
Once I had the idea I got Claude to make a basic engine which pretty directly converted the MIDIs inputted into 4 tracks which could be played with the arrow keys.

## Added more customisation and track settings
From this I had the base structure, but it still needed lots of work so I then I added a simple editor menu which allowed users to tweak values for things like Note Speed, track assigment (as most midis use multiple tracks for different instruments, this setting let me choose which track to make Playing, Backing, or Off), track volumes and much more. Doing this helped a lot with making the song more designed and actually playable. To further help I also made the beatmap generator merge notes that were extremely close together into long notes which needed to be held down. This helped a lot as long notes in the midis I used where just being turned into very close together consecutive notes that were extremely difficult to play with. Later this system got more advanced with me asking CoPilot to make the beat mapping algorithm find these rapid consecutive notes and read them as long notes, with set start and end times, which resulted in them overlapping other notes which was also a problem I fixed by forcing long notes to end before another note played, and just having that note continue without input for it's proper length.

## Improving how the game sounds / adding optional MP3s
 Now that I had fixed the gameplay I wanted to work on how the songs sound, as one of the major limitations with making a game based on midis is that they don't sound very good when played by themselves. So I got CoPilot to add the ability to add a mp3 that will play alongside the song giving a better sounding backing track to the gameplay. Due to some issues with lining these up I also added another setting to tweak the starting time of the mp3 to try and line them up along with a Sound wave for each file to help, though still kind of difficult to do without trial and error.

## Initial Manual Tracking
 At this point I had been adding a bunch of songs to test the game and I found that even when using Midis with backing MP3s it still didn't feel right when playing as the the overly complex Midi beatmaps never matched the more simple lead instrumentals and vocals of the mp3s. So I got Claude to add a sort of manual tracking where you could play through and record a beatmap which would then be applied to the song. This allowed me to have more control over the actual gameplay of the song projects which helped with the problem of balancing difficulty, as most the midi files I'd found up until this point where either very long, or had way too many notes to make a balanced progression of difficulty.

## Battle Mode
At this point the basic 4 lane rhythm game was mostly working but I still felt the gameplay was lacking so I thought about rhythm games I enjoyued playing. While working on the project I was playing a decent bit of Friday Night Funkin, an indie rhythm game about fighting people with songs, as it was free and could run on my laptop, and through playing this I found the most enjoyable part of it was playing against an AI, with their notes either giving an example of what your about to play, or singing at the same time for the more impactful parts of the song. So I decided to try and incorporate the parts I liked in this gameplay into my own game, getting Claude to make a second set of lanes on the left side of the screen called the Reference Track, which would get around half of the notes of the beatmap using the rules of:
1. If the beatmap has a repeating pattern of notes, they will swap tracks with each loop.
2. The Tracks should try to swap whenever their is a gap in the beatmap instead of cutting while in the middle of a sequence.
3. The Player should always end the song, being required to play at least the last 7 notes (This was mostly due to a bug where the results screen will appear as soon as the player plays their last note, meaning that songs could end before finishing).
4. Player must get around 60% of the beatmaps notes in order to stop songs from being played entirely on the reference track.
5. Remarkably loud moments in the song should be played by both tracks simultaniously.

With this basic set of rules the songs where able to be split between the two tracks, creating a sort of Battle mode, which later had some more rules added to improve how it played in things like tour mode.

# Adding Characters
## First Character and Ideas
Another aspect I liked in Friday Night Funkin was that each song would have a unique character they would fight against, with each player use a unique sound and voice. I thought with all the customisation you could do in my game it would be cool to have a group of characters using different Midi Instruments, allowing songs to feel unique just by changing a character and instrument.
Since I didn't really have any ideas on what characters I should include I started with just making Mushy, a character I recently worked on in my previous project. This meant I could just reuse the design with some small tweaks and higher resolution animations to make the process faster, and I could try and base his instrument on the dialogue sound already used in my previous project.

## Making them sound unique
Once I had made some art, and collected some sound effects I got Claude to make a character selector which would effect the track instrument and create an animated sprite depending on the users inputs. From this I found my initial idea of using the DIalogueBlip.wav sound clip to try and create Mushy's voice, though I later found this was a bad Idea as the clip was far too short for the long notes to reliably loop, and couldn't match the different notes of the song. So instead I got copilot to read the wav file and try and recreate the sound through code, which worked a lot better with matching notes and looping naturally.
I also added a taunt system which was planned to play a unique taunt animation, and sound from Mushy's original game, as I wanted the player to be able to interact with the characters even when not currently playing (at this point a lot of songs would have large chunks where the reference track would play by itself). This also let me reuse more assets from things I had already made.

## More characters added
After I added some more characters to test how different instruments would interact in the song, adding Martin (not a reference to something I made just a random name), which had a lower pitched, bassier instrument to mushy allowing them to compliment each other in the songs. I also made a Recorder character mainly because I wanted to test having a seperate vocal track and backing track in the game, getting copilot to write in a hidden Vocal Track upload which the Recorder could play instead of their instrument with the vocals volume changing depending on how well the songs are played. Later these characters were tweaked, with Martin becoming Puppet, a reference to a hand-tracking fighting game I made last year using a more gritty, compressed sound to try and better recreate the voice of an old fighting game character, and recorder keeping the name but using the modified sprites of the player character from my Design Website I'd made earlier in the year.

## The story of the Missing character
One character I spent a lot of time making just to cut at the very end was Tote. At the time I was working on the project I had been listening to a lot of songs that used Kasane Teto, a vocal synthesizer made by Utau. Since I still wanted at least one character to use actual vocals instead of coded sounds, I had a practice character 3D model I made of Teto to relearn blender, and Utau was free I decided to make a ripoff Teto character called Tote. To start with I learnt how to use Utau which meant look at a lot of tutorials to try and get it to work in english. After figuring that out, I made a bunch of wav files using random syllables (as I thought using actual words would sound wierd in game) and made a Midi Soundfont out of them. This ended up failing as the current code wasn't able to read Sound Font files. So, not wanting to give up, I then asked co-pilot to try and make code to create a midi instrument from a series of Sound clips which created the ToteSound.manifest and MushySound.manifest. This still didn't work with the sound clips not properly looping or matching the songs notes. Still not giving up I tried vibecoding it to work for many hours until it finally worked properly and sounded horrible. Since I still had to finish rigging the Tote 3d Model, as I would need to manually rig each bone for it to be possible, I decided to move on to something else so I could come back to Tote later, though as I got closer to the deadline and still had many more things to do I just ended up cutting Tote from the game a few days before submission.

# Further Development
## Background Art
Next I quickly drew up some background sprites that could be selected in the settings since it didn't feel right to have the characters stand in an empty void. With each scene using a few frames that swap between each other smoothly with code. I only ended up making 3 of these scenes with City-Night, Dam-View which reused a background art asset from a RPG game I made 3 years ago (the same project was planned to have a character using the Hero spritesheets, though they were cut as they needed 3 new animations for the different directions), and Convenience Store which used a 3D model from a movement shooter game I made over the summer break about vampires in hell.

## New Game Modes - Solo, Piano, Auto
Throughout the project I had also been planning alterantive game modes to help represent many different styles of rhythm game and to allow users to make even more types of Rhythm based games.
In the end only three game modes were actually added a Solo Mode, where the entire beatmap is put on one track and needs to be played entirely by the player, Piano Mode a mode with initially 10 different lanes for different keys on the keyboard to make a more difficult gameplay style (later this was brought down to 8 and then 6 as it was really difficult to play due to there just being too many lanes to pay attention to at once). All these modes were made by making a list of rules and asking Co-Pilot to code them in, with each mode requiring different layouts which had to be manually tweaked. 

I also added an Auto mode for testing which would play a song project in battle mode for you.

## Planned Game Modes that didn't make it in
There were many modes I had planned to add but most of them were cut just because it would take too long to code them in, test their layouts, and balance them out. The modes I most wanted to add where the Battlefield Mode, the Drum Mode, the Shield Mode, and a Gauntlet mode.
The Battlefield mode was inspired by games like Crypt of the Necrodancer and would have the player dodge tiles on a grid that become damaging in beat with the song, with each note having a different placement and effect, it would also use the art from the RPG I made 3 years ago which had a very similar style of gameplay.
The Drum mode was loosely based on Taiko no Tatsujin, being made as the opposite of Piano mode where their is only one or two input lanes, but with a lot more complex notes.
The Shield mode was based on Beatblock where each note would create a projectile that flew at the player and would have to be blocked by a shield they could point in and direction, with the beatmaps not being able to have two opposite notes play at once, or any other sequences that were impossible to play.
Gauntlet mode was a combination of all these previous ones, loosely inspired by the Rhythm Heaven series it would randomly swap modes throughout a song forcing the player to quickly adapt their play style. This mode sort of lives on in the Tour Mode I added later with it using a randomly selected mode for each song.

## Adding difficulties
At this point all the modes where stored in a difficulty selector with easy and normal representing different difficulties of the Battle mode, Hard using the solo mode, and Master using Piano mode. Though since I wanted to have difficulty and mode seperate I made the project settings set the mode, and the play menu set the difficulty with the three modes Easy, Normal, and Hard initially deciding how the beatmap would deal with rapid notes, with Easy merging them into a long note, Normal combining them into fewer inputs, and Hard just leaving them as is. Though this was quickly changed to instead just tweak things like timing windows, with easy being more generous, and slightly alterring the Merge Threshold to create a long note, with easy mode merging notes further apart than hard. This was mainly due to the amount of bugs these initial mode settings would cause, especially Normal which would have notes stack on top of each other making it impossible to play them all with the correct timing.

## Improving Battle mode
Towards the end of development I spent more time refining the battle mode, as it was my personal favourite, adding things like a healthbar which can end the game early, and adding the rules:
6. In sections with many notes on different lanes, the track will split with the reference track playing some of the lanes while the player plays the rest of the lanes. This is required to happen at least once per song.
7. Reference track must play at leat 10% of the songs notes to avoid Player only songs.

And I added more mechanics like a grace period where if a play makes a mistake, they can keep their combo unless they mess up again in the grace window. I also changed combos to decrease each notes addition to the score modifier the longer the combo is, making it less exponential and helping the player match the Perfect Performance of the song, which determines how well the player must perform to pass the stages in Tour mode, as before most attempts would score between 7% and 15% making the songs seem way harder to master.

# Adding Game Content

At this point there was a good amount of mechanics and customisation users could make with their songs, though it stilled lacked any built in gameplay, acting more as an engine to make games instead of a game itself. So to fix this I wanted to add some content that would be accessible straight away if a player just wanted to play a game without worrying about making them. For this I had two solutions, having songs pre installed in the play menu to help teach the different options, and a roguelike Tour mode.

## Tour Mode
Tour Mode probably took the longest of the two and had the main idea of using a online database of Midi files to pick at random and then convert that random song into a playable level, which by using multiple databases with thousands of Midis I was able to create a decent variety. Though this still caused many options with me needing to research and test many different databases before having one that would consistently work, only for the Midis to either not play, crash the game, or make a very loud noise once brought in as a level. Though through a lot of trial and error I was able to get the tour mode working, using claude to make a basic character select so you chould choose which character to play as (with each now requiring their own portrait art), and a loading menu where two slot wheels spin to select a song you would then play. 
In the current game this works by first finding 20 random songs with progressive difficulty, which the player can choose between two per stage to avoid forcing them to play songs 6 minutes long, with the player haing 3 lives to reach the 10th stage or they lose, with every character getting a unique victory screen (except recorder) which I ran out of time to fully test. 
However, in the original planned version it would have incorporated more Roguelike elements with every 3 stages letting the player spin for a modifier which would effect gameplay. For example: 
"No such thing as bad" - Would remove the bad timing, splitting whatever it was into either good or Miss.
"Glass Cannon" - Increase both Health gained and health lost per notes in Battle mode.
"Impossible mode" - 50% chance to play in Piano mode each stage.
Though due to time limitations, these modifiers were removed to save time.

## UI redesigns and improvements
Around this time I also wanted to fix the UI, with up until this point most of the UI just being made in the same style as Claudes initial prototype instead of my own style. So I first made a Main Menu screen, with a new Title and buttons for the three different menus, Play, Editor, and Tour. Originally the Editor Menu was done by opening a pop up menu on the play menu with some values players could tweak. Though since this over cluttered that screen and was annoying to use, I sketched up a new menu design and got Co-Pilot to code it in using a more designed layout where songs could be selecte, and their settings where seperated into a Project Setting and Song Settings window. 
The play menu was also changed to be a lot cleaner to use, with better button placement and larger song buttons to be easier to navigate. I also added somethings like a song preview which would either play the selected songs Midi file or backing Mp3, though this was cut due to the midis preview failing, or carrying over and stacking with the other menus, and a new Title and Sound Visualisers which changed in beat to the selected song.
In the main menu I also added two side buttons where a random character portrait is selected and can be used to play their taunt sound.
In the end the most unchanged menu was the Tour mode Character Select, as I didn't really have time to redesign it so it just uses the layout Claude made.

## Added more character while making tour mode - Mushroom Soldier and Vending Machine
I was also spending some of my time finishing animating two new characters, Mushroom Soldier who has been planned from the start to use the 3D model I made for my Game Design project last year called Mushrum, and Vendor a vending Machine character I made at 2AM by moving the Convenience Stores vending machine around in blender. There was one other 3D character I wanted to add at this point, but was also cut for time, that being the Bleeder, who was a enemy model I had made over the summer for my movement shooter game. Each character also had new character vocals with Mushroom Soldier having a lower, more string instrument sound, and Vendor having a high pitched electronic beep to sound more like a machine.

## Prebuilt / Free Play songs
Along with the tour mode I also made a system to add prebuilt song projects, simply requiring me to export the song project file and drag it into the code. At the start I wanted to only use copyright free songs as prebuilts, but this proved difficult as most the copyright free midis I found either sounded terrible or had very annoying Beatmaps, so instead I just decided to use some of much more common Midi files based on copyrighted music. I also just ended up using a lot of Song Projects I used for testing and never intended to actually include in the game, due to running out of time and needing to show off mechanics like backing Mp3s and vocal tracks.
These prebuilt system also resulted in many bugs, with many of the files being corrupted when added, being completely muted, or breaking some part of the code which wasted a lot of time in the last few days.

I also wanted to add a sort of tutorial song, which would be an easy song to try and familiarise the player with the basic controls, inspired by how it's done in games like Friday Night Funkin'. Though this required me to competely overhaul the manual tracking code, allowing users to increase or decrease the length of songs irrelevent to their Midi files length, and adding a way to manual track for each mode, with Battle being especially difficult as I wanted to be able to control both the Reference track and Player Track. After a few days of fixing this, rebalancing the sound, and doing a lot of vibecoding with claude I was able to get it almost working correctly, with their still being some visual and audible problems.

## Final Bugs and issues
Once I had that all done I did one last pass through the UI to have everything work, as things like character portraits would often appear in incorrect places, and worked on fixing the many bugs still plaguing the game.

Some notable issues I ran into in the last week were:
Sound not loading - There were many instances throughout the project where the audio would either cut out, or start muted and slowly turn on, or just become very quiet seemlingly at random, while not having any errors flagged in the sites console. Each time I thought I fixed this problem it would always come back, with me spending multiple days trying to fix this by using Claude.
DialogueBlip curse - One thing I hadn't considered for a long time was how the default fallback sound to play was the original Dialogue blip sound from the original mushy character. Since it hadn't come up much up until this point I hadn't noticed until suddenly things started going wrong and all the sounds were failing to load, making everything sound like loud, rapid, short notes.
Many many more - When I started writing this I planned to explain all the issues that I had to fix over the last week, though I've realised that their is far to many of them to address before hand in, though I will say the main reason these issues became such an issue in the last week. 

## The Final Week
Since the project had gotten way to advanced for me at this point, most bug fixing and changes were done through vibe-coding, which became a massive problem when I suddenly without warning ran out of Co-pilot credits. Although I was also use claude a lot for adding mechanics, I did most my bug fixes with Co-pilot as it was able to used a lot more frequently and had a instant understanding of the code. Once it broke in order to try and fix these bugs I turned to solely using Claude, which was a problem as I would often only be able to get one or two responses every 5 or so hours, making the development time very slow even when using multiple accounts, and even slower due to my slow wifi. Since I was very rushed for time I ended up just ending every prompt with "Please ensure you are extremely concise with your responses mostly just writing the code and very sparingly writing 1 to 2 short sentences for your planning, process, or summaries" to try and get more responses. 
I ended up working on the project for almost 5 days straight in the last week leaving me extremely burnt out by the end, with me adding the working Tour mode, 2 new character, Battle Mode improvements, UI changes, prebuilt songs, updated manual tracking, and a lot more all within the last week. 
Next time I work on a project like this I definately want to cut down on the scope to make the code more managable by myself (as the current 13500 lines is extremely difficult to read and fix), especially in the limited time I had due to other Assignments.

# Conclusions
In the end I am still pretty proud of what I've made and although a lot of content needed to be cut I'm still glad with the amount with my main regret being trying to rush it all to be done within a few days.

## Do I think I met my criteria?
As for how well I was able to accomplish my success criteria I believe:
 1. Create something enjoyable to use. 
I believe I was able to create something with decently enjoyable and satisfying controls and gameplay. Some of the more complicated stuff like manual tracking and the further editing are a bit hard to understand and use without a tutorial, but I feel like the main mechanics are simple enough.

 2. Create something which is polished both mechanically and visually enough to upload it to itch.io as a game.
 This I feel mixed about, as the project seems mechanically polished from my tests, though I do still worry that there are some bugs still in the game I just haven't found yet, and visually the game is intentionally mixed media to add more variety to the characters, some of the animations, victory screens, and UI could be further polished. Though for a game meant to be uploaded in an Early Access to itch.io I think it is still decent.
 
 3. Create something that gives the user a variety of ways to interact with it and play it.
 I believe I've given a variety of ways to interact, with around 10 prebuilt songs, the tour mode with thousands of possible songs to play, and three different modes. Although I do wish I could add more modes, and add more variety to the Tour mode I believe there is enough here for someone to feel satisfied using it.

 4. Create something with built-in content, so it's more accessible to people who don't want to deal with the more complex systems that allow more customization.
Again with the prebuilt songs and tour mode I believe I have successfully reached this goal.

 5. Have something usable enough that it can be playtested to find ways to improve it.
From my tests I didn't find any game breaking bugs, I unfortunately haven't had other people play tested though I do believe it is possible in the current state and could get some useful feedback.

## For next time
In the future I definately want to improve the builtin songs, maybe making a campaign mode or something and having the songs sound more refined and less ear grating at moments. I would also want to add the other modes as I personally think it would just be fun to play with if their where more modes. 
The main takeaway I got from this project is being willing to drop things that take too long and to bring the scope back towards the end to properly focus on polish, as most of the last week was spent still adding more content instead of purely polishing. Though under the conditions of all the other work I was doing at the same time there wasn't much room to get a consistent schedule and plan.


# Some more planning and early read me stuff I didn't want to remove:

A customiseable rhythm game where a user can import midi files, and tweak some settings to make a playable song, which can be exported and imported to other people to share songs.

These settings will allow users to adjust the sound, characters and even style of gameplay their song has.

This has been an idea I've had for a while and was originally something I wanted to add to my design website as a mini game, though inspiration for using easier to read midi files came from a minecraft mod I played earlier in the year which allowed a player to drag any midi file in and play it on instruments.

This aswell as my general love for rhythm games is what made me want to work on this project, and I already started prototyping it before even knowing about project 3, though this prototype does leave a lot to be desired with it not sounding particularly good and the gameplay not feeling as satisfying as I'd like, which is definately due to there being no proper visuals yet as it just uses basic easy to code shapes.

My goal is to make sprites, sound effects, and many more things to effect the visuals and also find ways to better recreate the sound of songs and find a good way to match that beat. For this I'm probably going to add a way to use an mp4 for audio and a way to make custom manual tracking by playing through it and inputting keys on note.

Characters: The different characters will represent a series of sprites and a sound font tied to that character, with them using different sprites and sounds for the different modes.

Modes: The different modes will more or less be made in the style of different types of rhythm games, using the same 4 directional keys but displaying them in different styles with different game rules.

Settings: My plan is to simplify the settings to allow people to change things in their song without bombarding them with possible adjustments. One way I'll probably do this is through removing all the track sound settings, reducing them to Original and Character with the original using the midi's sound and character using that characters set code.

Sharing: Making the sharing and storing of the songs more easy to use, and if possible make a site where people can upload approved files where users can rate them and have their high scores display. Also make some already added files inside the repository.

UI design: Make more clean UI with the main UI just showing any Song Project files, with symbols for characters, Titles of songs, artist names or the name of the person who made the project.
On this menu there will be options to Import or Add which allows user's to import others projects and make their own which opens the settings menu for a new song, with an option to upload a midi and an optional MP3 file for the song if they want a more accurate backing track. These two tracks will have previews to show the heights of the songs so they can adjust the files to play at the same time, this will also try and automatically adjust them to match these volume maps. From that there are the different tracks with the option to set it from auto tracking to manual tracking and the way to choose to use original sound clips, character sound clips, or custom ones for things like guitars and pianos.
There will also be an option to expand to small adjustment settings where you can find the merge notes and ranges for bad, good, and perfect and all the other settings.




Add a rougelike mode which uses increasing difficulty (either choosing songs with more notes, shortening timing windows, or other obstacles), each stage has the character vs a different character (which could have a random re colour to make it feel like it isn't the same few characters)

next steps:

Improve UI, making a main menu, more easily navigated song project settings and playing.
Fix Character audio so they can have unique sounds and taunts (Also fix taunts so more than one works).
Make in game midi maker (which let's users record different tracks for different sound clips with a keyboard)
Make Rougelike mode (which grabs a random midi file from a midi archive if I can find the API for), with each song progressively getting harder.

Add more characters (Could use Mushroom soldier from Mushrum and the Husks from Vampire Heartattack)

## SoundFont workflow

SoundFont characters are loaded from converted offline packs instead of parsing raw `.sf2` files in the browser.

Each `.sf2` file can have a sibling manifest named `*.manifest.json` next to it in the repository. The manifest points to pre-rendered sample files and may define one or more presets. When the manifest is present, the game loads those samples at startup and uses them for note playback. If a converted pack is missing, the existing fallback voice logic still works.

This means you only need to convert new instruments once, when you add them to the repository. Uploaded MIDI songs still play normally at runtime; only the instrument pack is prebuilt.

Different modes:
- Battle, DDR styke
- Drum, two inputs focussing on timing over different inputs.
- Piano, a difficult mode that functions similar to Battle but with more inputs and slower songs
- Gauntlet, a mode which switches mode while in the song, and may add some more simple input modes (inspired by Rythm Heaven's minigame style)


In order to control scope for now I'll scope in on making a polished DDR style game mode, with around 5 characters, and hopefully a rougelike mode.
For this I'll need to work on adjusting the algorithm that sets up notes to make it more enjoyable to play, then fix the bugs with the character voices, making them use sound fonts which allow a variety of chords from a couple wav files.

Make modes and difficulty different things:
Modes are set in the song prject settings, while difficulty is set in the play menu.
Modes:
Auto - Plays the game for you
Duel - Standard Game Mode
Solo - Mode where the player plays everything
Piano - A more difficult mode where the player uses 9 or more inputs for each song.

Easy - Notes have larger good and perfect windows, rapid notes merge together more, no penalty for getting notes wrong, but only a 0.5x point multiplier.
Normal - Current version of the game, windows are generous, but rapid note need to be played, but their are fewer of them with each one just containing more notes, 1x point multiplier.
Hard - Windows are shorter, everynote is playable, and their is a 2x multiplier.
Master - Perfect windows are only a few frames, and messing up a 3 notes will instantly lose the song



