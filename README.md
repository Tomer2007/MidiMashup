# MidiMashup
Test Project for Rhythm game.


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


Fix Player visual positioning

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

Current bugs
- 





5 success criteria
- Create something that feels polished and feels like a finished product.
- Create something that is easy and enjoyable to use.
- Create something with mostly polished visual design, with most UI and sprites finished.
- Create something with variety of ways to interact to keep user's interested.
- 

