# Shivani's Birthday Surprise 💗

A static, mobile-friendly birthday website for Shivani, made by Baby. It uses plain HTML, CSS, and JavaScript and can be hosted free on GitHub Pages.

## Files

- `index.html` — page content and photo references
- `style.css` — romantic pink design and responsive layout
- `script.js` — surprise opening, floating hearts, gallery lightbox, music toggle, and final surprise
- `photos/` — six photos supplied for this website
- `assets/` — place your MP3 here

## Add the birthday song

1. Add a song you have permission to use as `assets/birthday-song.mp3`.
2. Keep the filename exactly `birthday-song.mp3`, or update the `<source>` in `index.html`.
3. Music starts when the visitor clicks **Open your surprise**. If the file is missing, the rest of the site still works; the music button lets the visitor retry.

Use a song you have the right to share. GitHub Pages is public if the repository/site is public.

## Replace or add photos

The gallery uses `photos/photo1.JPG` through `photos/photo6.JPG` and `photos/photo5.PNG`.
- To replace a picture, upload your own image with the same filename and extension.
- If you use a different extension, update that image's `src` and the matching `data-full` attribute in `index.html`.
- The large hero image is `photos/photo3.JPG`.

Use lowercase file names consistently if you rename files; GitHub Pages paths are case-sensitive.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `shivani-birthday`.
2. Upload the contents of this folder (upload `index.html` itself to the repository root, not the enclosing folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the deployment to finish. Your URL will look like:
   `https://YOUR-USERNAME.github.io/shivani-birthday/`

## Preview locally

Open `index.html` in a modern browser. For the most reliable local preview, run a simple local web server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalization

The date and names are already set to Shivani, Baby, and October 11, 2026. Edit the copy in `index.html` if you want to add private memories or change the message. Do not upload anything she would not want publicly accessible.
