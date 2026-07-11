const fs = require('fs');
const path = require('path');

// 1. Update blog/page.tsx to show dateModified
let blogIndexPath = 'src/app/[lang]/blog/page.tsx';
let blogIndex = fs.readFileSync(blogIndexPath, 'utf8');

const dateLogic = `
                    <time dateTime={featuredArticle.dateModified || featuredArticle.date}>
                      {featuredArticle.dateModified && new Date(featuredArticle.dateModified) > new Date(featuredArticle.date) ? t.updated + ' ' : ''}
                      {new Date(featuredArticle.dateModified || featuredArticle.date).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
`;

blogIndex = blogIndex.replace(
  /<time dateTime={featuredArticle\.date}>[\s\S]*?<\/time>/,
  `<time dateTime={featuredArticle.dateModified || featuredArticle.date}>\n                      {featuredArticle.dateModified && new Date(featuredArticle.dateModified).getTime() > new Date(featuredArticle.date).getTime() ? (lang === 'el' ? 'Ενημερώθηκε ' : 'Updated ') : ''}\n                      {new Date(featuredArticle.dateModified || featuredArticle.date).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}\n                    </time>`
);

blogIndex = blogIndex.replace(
  /<time dateTime={article\.date}[^>]*>[\s\S]*?<\/time>/,
  `<time dateTime={article.dateModified || article.date} className="flex items-center gap-1.5 text-navy">\n                      <Calendar size={14} className="text-red-light" />\n                      {article.dateModified && new Date(article.dateModified).getTime() > new Date(article.date).getTime() ? (lang === 'el' ? 'Ενημερώθηκε ' : 'Updated ') : ''}\n                      {new Date(article.dateModified || article.date).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}\n                    </time>`
);
fs.writeFileSync(blogIndexPath, blogIndex, 'utf8');

// 2. Add Breadcrumbs to services and systimata
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.match(/\.(tsx)$/)) results.push(file);
    }
  });
  return results;
}

const serviceFiles = walk('src/app/[lang]/services');
const systimataFiles = walk('src/app/[lang]/systimata-alumil');
const allToUpdate = [...serviceFiles, ...systimataFiles];

for (const f of allToUpdate) {
  let text = fs.readFileSync(f, 'utf8');
  
  if (!text.includes('import Breadcrumbs')) {
    text = text.replace("import Link from 'next/link'", "import Link from 'next/link'\nimport Breadcrumbs from '@/components/Breadcrumbs'");
    if (text === fs.readFileSync(f, 'utf8')) {
        text = "import Breadcrumbs from '@/components/Breadcrumbs';\n" + text;
    }

    let isService = f.includes('services');
    let titleMatch = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    let pageTitle = "''";
    if (titleMatch) {
       // Clean up the matched title (remove span tags if any)
       pageTitle = '"' + titleMatch[1].replace(/<[^>]*>/g, '').trim() + '"';
    }

    if (titleMatch) {
      let category = isService ? (text.includes('lang ===') ? "lang === 'el' ? 'Υπηρεσίες' : 'Services'" : "'Services'") : "'Συστήματα Alumil'";
      let catLink = isService ? "'#'" : "'/el/systimata-alumil'"; 
      
      let breadcrumbsComponent = `\n<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-40 mb-[-3rem] relative z-20"><Breadcrumbs lang={lang as string} items={[{label: ${category}, href: ${catLink}}, {label: ${pageTitle}, href: '#'}]} /></div>\n`;
      
      text = text.replace('<PageTransition>', '<PageTransition>' + breadcrumbsComponent);
      fs.writeFileSync(f, text, 'utf8');
      console.log('Added breadcrumbs to ' + f);
    }
  }
}
