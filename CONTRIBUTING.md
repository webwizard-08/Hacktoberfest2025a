# Contributing to the Developer Profile Card Showcase ✨

First off, a huge thank you for considering contributing! We're thrilled you're here. This project is a celebration of open source and creativity, especially for those participating in **Hacktoberfest 2025**.

This document provides all the guidelines you need to contribute effectively. Let's build something amazing together! 🚀

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. We do not tolerate harassment of participants in any form. By participating in this project, you agree to abide by our **Code of Conduct**. Please be respectful and considerate in all your interactions.

## 🤔 How to Contribute

We've designed a straightforward, three-step process to make contributing as easy as possible.

---

### **Step 1: Create Your Profile Card Locally**

1.  **Fork the Repository**
    - Click the "Fork" button at the top-right corner of this page to create your personal copy.

2.  **Clone Your Fork**
    - Clone the repository to your local machine using git.
    ```bash
    git clone [https://github.com/YOUR_USERNAME/Hacktoberfest2025.git](https://github.com/YOUR_USERNAME/Hacktoberfest2025.git)
    cd Hacktoberfest2025
    ```

3.  **Create Your Folder**
    - Navigate to the `profiles` directory.
    - Inside this folder, create a **new folder named with your GitHub username**. (e.g., `profiles/dsawithaditi`). This is where all your files will go.

4.  **Set Up the File Structure**
    - Inside your `[your_username]` folder, you **must** create the following file structure. This is essential for your project to be displayed correctly.
    ```
    your_username/
    ├── assets/
    │   └── images/  (for any images you use)
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js  (Optional: for animations)
    └── index.html
    ```

5.  **Build Your Profile Card**
    - Get creative! Code your unique developer profile card within the files you just created. Ensure it's a self-contained project that runs perfectly from its own `index.html`.

---

### **Step 2: Deploy Your Profile Card to Netlify**

To showcase a live version of your work, you need to deploy **only your profile card's folder** to Netlify.

1.  **Log in to Netlify:**
    - Go to [netlify.com](https://www.netlify.com/) and log in or sign up (it's free!).

2.  **Deploy Manually:**
    - From your Netlify dashboard, go to the "Sites" tab, click on **"Add new site"**, and select **"Deploy manually"**.
    - Drag and drop your **personal username folder** (e.g., the `dsawithaditi` folder from `profiles/`) into the upload area.

3.  **Get Your Live URL:**
    - Once uploaded, Netlify will give you a live URL. You can customize the site name in **Site settings** to make it more memorable.
    - Copy this URL (e.g., `aditi-profile-card.netlify.app`). You'll need it for the next step.

---

### **Step 3: Add Your Details & Create a Pull Request**

1.  **Update `contributors.json`**
    - In the root of the project, open the `contributors.json` file.
    - Add a new JSON object with your details at the end of the list.
    - **Add a `tags` array** to help categorize your card. Please add 3-4 relevant tags that describe your design's style or features.

    **Example format:**
    ```json
    {
      "name": "Aditi",
      "occupation": "Full-Stack Developer",
      "place": "Delhi, India",
      "bio": "Building beautiful things for the web!",
      "github_profile_url": "[https://github.com/dsawithaditi](https://github.com/dsawithaditi)",
      "project_netlify_link": "[https://aditi-profile-card.netlify.app](https://aditi-profile-card.netlify.app)",
      "tags": ["minimalist", "animation", "dark-theme"]
    }
    ```
    > **Good tag examples:** `minimalist`, `retro`, `glassmorphism`, `neumorphism`, `dark-theme`, `light-theme`, `animation`, `interactive`.

2.  **Commit and Push Your Changes**
    - Stage your changes, commit them with a descriptive message, and push them to your forked repository.
    ```bash
    git add .
    git commit -m "feat: Add profile card for YourUsername"
    git push origin main
    ```

3.  **Open a Pull Request**
    - Go to your forked repository on GitHub. Click the **"Contribute"** button, then **"Open pull request"**.
    - Provide a clear title and a brief description of the profile card you've added.
    - Our team will review your PR. Once it's approved and merged, your card will appear in the gallery!

## ✅ Contribution Guidelines

To ensure a high-quality showcase and a positive experience for everyone, please adhere to the following rules:

-   **Original Work:** Your component must be your own original work.
-   **Responsive Design:** Please ensure your component is responsive and looks good on different screen sizes.
-   **Follow the Structure:** Submissions that do not follow the prescribed folder and file structure will not be accepted.
-   **One Component Per PR:** Please submit only one profile card per pull request to keep reviews manageable.

## 🎃 Hacktoberfest 2025 Rules

This project proudly participates in Hacktoberfest. For your PR to count towards your Hacktoberfest goals, you must follow these official rules:

-   Your pull requests must be submitted between **October 1 and October 31, 2025**.
-   Your PR must be merged by a maintainer or labeled as **"hacktoberfest-accepted"** to be considered valid.
-   **Do Not Submit Spam or Low-Quality PRs**. This includes but is not limited to:
    -   Automated PRs for fixing typos or whitespace.
    -   Disruptive pull requests that take someone else's work.
    -   Anything that goes against Hacktoberfest's values.
-   Contributors with **2 or more PRs marked as spam will be disqualified** from participating in Hacktoberfest.

We look forward to seeing your amazing creations. **Happy Hacking!** 🎉