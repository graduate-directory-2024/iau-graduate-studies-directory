# IAU Graduate Studies Staff Directory — 2024 Project

## About
A redesign of an **original 2024 cooperative training project** completed at Imam Abdulrahman Bin Faisal University's Deanship of Graduate Studies. The original purpose was to let people open an administrative directory through a QR code, select a unit, and search for employees' office numbers, extensions, and work email addresses.

This updated frontend restores **all 36 staff entries across 13 organizational units** from the supplied original `IAU.html` file. The person names, unit labels, office numbers, work email addresses, and extensions are reproduced **as recorded in 2024** with no spelling corrections, guessed updates or invented contact information. **The contact details may no longer be current.**

> **Publishing caution:** The user has stated the original information was provided by the deanship for publication in this project. Before publishing the redesigned version widely, re-check that permission still covers public GitHub Pages publication and that contact information remains appropriate for public display. GitHub Pages websites are public and search engines may index data and clone repositories.
>
> This redesigned version is an independent portfolio presentation; it is not a current official university directory.

## Features
- Arabic RTL and English LTR interface (staff names remain exactly in Arabic)
- Search by **staff name, unit name, office number, extension or work email address**
- Immediate matching staff results, showing employee details without needing to open a unit
- Unit cards grouped by category; open a unit to view its staff
- Accessible work email `mailto:` links
- Responsive layout for phones and desktops
- Quick search shortcut: `/`
- External links to university graduate studies services

## Files
```
index.html             Main page
styles.css             Design and responsiveness
script.js              UI, filtering, bilingual labels, contact display
directory-data.js      Exact historical employee records copied from the original project
assets/iau-logo.jpg    University logo provided with the original project
```

## Open locally
Open `index.html` in a modern browser. No installation or server is required. Google Fonts, if available, are requested from their public CDN.

## Publish to GitHub Pages
1. Review `directory-data.js` for permission/current public disclosure suitability.
2. Create a public GitHub repository `iau-graduate-studies-directory`.
3. Upload **all files**, including `directory-data.js` and the `assets` folder, to the repository root.
4. On GitHub open **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/(root)`.
5. Save and confirm the live URL in Pages settings, then create a QR code using that verified URL.

**Do not use the original 2024 QR-code image unless it points to the new live URL.** An image is not a functioning link; a new URL requires a newly generated QR code.

## Update records
Edit `directory-data.js`: `originalStaffDirectory` maps **Arabic unit names** to arrays of objects with exactly these properties: `name`, `office`, `email`, and `extension`. Preserve the key names. All 36 original records are currently included.

## Portfolio / CV description
**Graduate Studies Staff Directory | Cooperative Training Project (2024)**  
*Imam Abdulrahman Bin Faisal University — Deanship of Graduate Studies*
- Developed a QR-code-accessible staff directory using HTML, CSS and JavaScript.
- Structured staff details by administrative unit, with searchable names, offices, extensions and work email addresses.
- Redesigned the interface as a responsive bilingual website with search and filter functionality.

Only add a link to your CV after the new site has actually been published and confirmed working.
