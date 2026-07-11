# Portfolio Projects Images

This directory contains images for the Portfolio (`/portfolio`) section of the Alouminia Papadakis website.

## Directory Structure
Each project has its own folder named after its `slug` (defined in `src/data/projects.ts`).
Inside each folder, the main image must be named `01.webp`.

Example:
`/public/projects/energeiaka-koufomata/01.webp`

## Image Specifications
For best performance and layout consistency, please adhere to the following specifications when uploading real project photos:
- **Format:** WebP (highly recommended for performance)
- **Dimensions:** 1600x1200 pixels (4:3 aspect ratio)
- **Quality/Compression:** ~80%
- **Max File Size:** < 300KB per image

## How to replace mock renders with real photos
1. In `src/data/projects.ts`, change the `type` of the project from `'render'` to `'real'`.
2. Provide the real location, challenge, and solution texts in the data file.
3. Replace the placeholder `01.webp` image in the respective folder with the real photo, ensuring it meets the specifications above.
