

Was made thanks to rishikesh2003,
see here: https://github.com/rishikesh2003/my-portfolio


---
### Prerequisites

- Node.js (v18+ recommended)
- npm / yarn / bun

---
## Installation
```
git clone https://github.com/CrowHugin/portfolio/ ~/Documents/prog/portfolio/ 
```

### Install dependencies
```
npm install
```
### or
```
yarn install
```
### or
```
bun install
```

### Start development server
```
npm run dev
```
# or
```
yarn dev
```
## or

```
bun dev
```

Visit `http://localhost:4321` in your browser to see it in action.

---
## 🧩 Customizing the Portfolio

All your content lives inside `src/lib/data.ts`. Update the following to make it yours:

### 1. Personal Info

```ts
export const personalInfo = {
  name: "Your Name",
  location: "Your Location",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
};
```

### 2. Work Experience

```ts
export const workExperience = [
  {
    company: "Company Name",
    location: "Location",
    position: "Your Position",
    period: "Start Date - End Date",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
];
```

### 3. Education

```ts
export const education = [
  {
    institution: "University Name",
    location: "Location",
    degree: "Your Degree",
    period: "Start Date - End Date",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
];
```

### 4. Skills

```ts
export const skills = {
  programmingLanguages: ["TypeScript", "Python"],
  frontendDevelopment: ["React", "Next.js"],
  // and more...
};
```

### 5. Projects

```ts
export const projects = [
  {
    title: "Project Name",
    github: "https://github.com/yourusername/project",
    description: [
      "What it does",
      "Technologies used",
    ],
  },
];
```


---
## 📦 Build for Production

```
npm run build
```

### or
```
yarn build
```
### or
```
bun run build
```

To preview the production build locally:

```
npm run preview
```
### or
```
yarn preview
```


---
## 📤 Deployment

Easily deploy to platforms like **Vercel**, **Netlify**, **GitHub Pages**, or any static host of your choice.

For **GitHub Pages** use the .github/workflows/static.yml file, you don't need to change anything.

For **astro.config.mjs** you'll need to change this:
```ts
export default defineConfig({
  site:"https://yourname.github.io",
  base: "your repo",
});
```

and to remove the static file with:
```
rm ~/Documents/prog/portfolio/.github/workflows/static.yml
```
