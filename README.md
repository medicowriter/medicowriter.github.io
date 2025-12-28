# MedicoWriter - Professional Medical Writing Portfolio

A high-converting, SEO-optimized portfolio website for **MedicoWriter**, designed for pharmaceutical and biotech clients. This project focuses on professional medical writing services including regulatory documents, clinical trials, and biostatistics.

## 🚀 Deployment

This site is designed for **GitHub Pages**.

1.  Push the code to your repository: `medicowriter/medicowriter.github.io`
2.  Go to Settings > Pages
3.  Ensure the source is set to `main` (or `master`) branch and `/root` directory.
4.  Your site will be live at: https://medicowriter.github.io/

## 🛠 Features

*   **Responsive Design**: Mobile-first approach using CSS Grid & Flexbox.
*   **SEO Optimized**: Semantic HTML5, Schema.org (ProfessionalService), Open Graph tags, and fast loading.
*   **Contact Form**: Integrated with Formspree (requires minimal setup).
*   **Modern Aesthetics**: "TransPerfect" style competitive analysis—deep blues, clean typography (Inter/Roboto).

## 📝 Configuration

### Contact Form Setup
The contact form uses [Formspree](https://formspree.io/).
1.  Register at Formspree.
2.  Create a new form.
3.  Copy your unique Form ID endpoint.
4.  Update `index.html`:
    ```html
    <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    ```

### Customizing Content
*   **Images**: Replace images in `assets/img/`.
*   **Text**: Edit `index.html`.
*   **Styles**: Edit `assets/css/style.css` (variables are at the top).

## 🔍 SEO Checklist

- [ ] **Title Tag**: Verified unique and descriptive.
- [ ] **Meta Description**: Includes primary keywords ("medical writer", "regulatory writing").
- [ ] **H1 Tag**: Only one per page ("Medical Writing...").
- [ ] **Alt Text**: All images have descriptive alt attributes.
- [ ] **Performance**: Images are optimized (WebP/Isomorphic).

## 📄 License

All rights reserved to MedicoWriter.
