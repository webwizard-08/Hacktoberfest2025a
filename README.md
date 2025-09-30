# Hacktoberfest 2025 - Developer Profile Card Showcase

![Hacktoberfest 2025](https://img.shields.io/badge/Hacktoberfest-2025-orange.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/dsawithaditi/Hacktoberfest2025?style=social)](https://github.com/dsawithaditi/Hacktoberfest2025/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/dsawithaditi/Hacktoberfest2025?style=social)](https://github.com/dsawithaditi/Hacktoberfest2025/network/members)

Welcome to the **Developer Profile Card Showcase** for Hacktoberfest 2025! 🎉 This repository is a creative space for you to design and share your own unique developer profile card using HTML and CSS. It's a perfect project for everyone, especially those new to open source. The goal is to create a beautiful, collaborative gallery of developer profiles from around the world.

### ✨ **[Click Here to See Our Amazing Contributors' Profile Cards!](https://dsawithaditi.github.io/Hacktoberfest2025/)** ✨

## How to Contribute

Contributing to this project is a simple, three-step process. Follow these instructions carefully to get your pull request merged and count towards your Hacktoberfest goals!

---

### **Step 1: Create Your Profile Card Locally**

1.  **Fork the Repository**
    - Click the "Fork" button at the top right of this page to create your own copy of this project.

2.  **Clone Your Fork**
    - Clone your forked repository to your local machine. Replace `YOUR_USERNAME` with your GitHub username.
    ```bash
    git clone [https://github.com/YOUR_USERNAME/Hacktoberfest2025.git](https://github.com/YOUR_USERNAME/Hacktoberfest2025.git)
    cd Hacktoberfest2025
    ```

3.  **Create Your Folder**
    - Navigate to the `profiles` directory.
    - Inside this folder, create a **new folder named with your GitHub username**. (e.g., `profiles/dsawithaditi`). This is where all your files will go.

4.  **Set Up the File Structure**
    - Inside your `[your_username]` folder, create the following file structure:
    ```
    your_username/
    ├── assets/
    │   └── images/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js  (Optional: for animations)
    └── index.html
    ```

5.  **Build Your Profile Card**
    - Now, get creative! Code your unique developer profile card within the files you just created. Make it your own—add your picture, links, skills, and style. Make sure it's a self-contained project that runs from your `index.html`.

---

### **Step 2: Deploy Your Profile Card to Netlify**

To showcase your work, you need to deploy **only your profile card's folder** to Netlify for a live preview.

1.  **Log in to Netlify:**
    - Go to [netlify.com](https://www.netlify.com/) and log in or sign up.

2.  **Deploy Manually:**
    - From your Netlify dashboard, click on **"Add new site"** and select **"Deploy manually"**.
    - Drag and drop your **username folder** (e.g., the `dsawithaditi` folder, not the entire `Hacktoberfest2025` project) into the upload area.

3.  **Configure Your Site:**
    - Once uploaded, go to the site settings. Click **"Change site name"** and give your project a unique name.
    - Copy the live URL of your project (e.g., `aditi-profile-card.netlify.app`).

---

### **Step 3: Add Your Details and Create a Pull Request**

1.  **Update `contributors.json`:**
    - Open the `contributors.json` file in the root of the main project.
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


2.  **Commit and Push Your Changes:**
    - Add your changes to git and push them to your forked repository.
    ```bash
    git add .
    git commit -m "feat: Add profile card for dsawithaditi"
    git push origin main
    ```

3.  **Open a Pull Request:**
    - Go to your forked repository on GitHub and click the **"Contribute"** button, then **"Open pull request"**.
    - Provide a clear title and description for your pull request.
    - Wait for your PR to be reviewed and merged.

## Contribution Guidelines

- Please do not create spam or low-effort pull requests.
- Ensure your profile card is your own original work.
- Your card should be responsive and work on different screen sizes.
- Follow the prescribed folder and file structure.

## Our Amazing Contributors

A huge thank you to all the wonderful people who have contributed to this project! This section will automatically update as we merge new pull requests.

[![Contributors](https://contrib.rocks/image?repo=dsawithaditi/Hacktoberfest2025)](https://github.com/dsawithaditi/Hacktoberfest2025/graphs/contributors)

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

Thank you for your contribution! **Happy Hacking!** 🚀