document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const container = document.getElementById("contributors-container");
  const loader = document.getElementById("loader");
  const sentinel = document.getElementById("sentinel");
  const searchInput = document.getElementById("search-input");
  const noResultsMsg = document.getElementById("no-results");

  // Detail Modal Elements
  const detailModal = document.getElementById("modal");
  const detailModalCloseBtn = document.getElementById("modal-close");
  const detailModalIframeContainer = document.getElementById(
    "modal-iframe-container"
  );
  const detailModalInfo = document.getElementById("modal-info");

  // Preview Modal Elements
  const previewModal = document.getElementById("preview-modal");
  const previewModalCloseBtn = document.getElementById("preview-modal-close");
  const deviceControls = document.getElementById("device-controls");
  const previewIframeContainer = document.getElementById(
    "preview-iframe-container"
  );
  const previewIframe = document.getElementById("preview-iframe");
  const previewCta = document.getElementById("preview-cta");

  // --- State Variables ---
  let allContributors = [];
  let displayedContributors = [];
  let displayedCount = 0;
  const batchSize = 12;
  let isLoading = false;

  /**
   * Creates a single profile card element with the new "View Project" button.
   */
  function createProfileCard(contributor) {
    const card = document.createElement("div");
    card.className = "contributor-card";
    card.dataset.contributorData = JSON.stringify(contributor);

    const tagsHTML = (contributor.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
            <div class="card-iframe-wrapper">
                <div class="skeleton"></div>
                <iframe title="Profile Card for ${contributor.name}" loading="lazy"></iframe>
            </div>
            <div class="card-footer">
                <div class="card-footer-header">
                    <h3>${contributor.name}</h3>
                    <a href="${contributor.github_profile_url}" target="_blank" title="View GitHub Profile"><i class="ri-github-fill"></i></a>
                </div>
                <p class="bio">${contributor.bio}</p>
                <div class="tags-container">${tagsHTML}</div>
                <button class="view-project-btn">
                    View Project <i class="ri-arrow-right-up-line"></i>
                </button>
            </div>
        `;
    return card;
  }

  // --- Card Creation & Display Logic (Largely unchanged) ---
  function loadCardIframe(card) {
    /* ... same as before ... */
  }
  function displayNextBatch() {
    /* ... same as before ... */
  }
  function filterContributors() {
    /* ... same as before ... */
  }

  // --- NEW: Device Preview Modal Logic ---
  function openPreviewModal(contributor) {
    previewIframe.src = contributor.project_netlify_link;
    previewCta.href = contributor.project_netlify_link;
    previewModal.classList.add("visible");
  }

  function closePreviewModal() {
    previewModal.classList.remove("visible");
    previewIframe.src = "about:blank"; // Clear iframe to stop loading
  }

  function setPreviewSize(device) {
    // Update active button
    deviceControls.querySelector(".active").classList.remove("active");
    deviceControls
      .querySelector(`[data-device="${device}"]`)
      .classList.add("active");

    // Update iframe container class
    previewIframeContainer.className = "preview-iframe-container"; // Reset classes
    previewIframeContainer.classList.add(`view-${device}`);
  }

  // --- Main Initialization ---
  async function initialize() {
    /* ... same as before ... */
  }

  // --- Event Delegation for Card Buttons ---
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".contributor-card");
    if (!card) return;

    const contributor = JSON.parse(card.dataset.contributorData);

    if (e.target.closest(".card-iframe-wrapper")) {
      openDetailModal(contributor);
    } else if (e.target.closest(".view-project-btn")) {
      openPreviewModal(contributor);
    }
  });

  // --- Other Event Listeners ---
  searchInput.addEventListener("input", filterContributors);

  // Detail Modal
  detailModalCloseBtn.addEventListener("click", closeDetailModal);
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) closeDetailModal();
  });

  // Preview Modal
  previewModalCloseBtn.addEventListener("click", closePreviewModal);
  previewModal.addEventListener("click", (e) => {
    if (e.target === previewModal) closePreviewModal();
  });
  deviceControls.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button && button.dataset.device) {
      setPreviewSize(button.dataset.device);
    }
  });

  // --- All Function Definitions (including unchanged ones for completeness) ---

  // Detail Modal Functions (renamed for clarity)
  function openDetailModal(contributor) {
    detailModalIframeContainer.innerHTML = `<iframe src="${contributor.project_netlify_link}" title="Profile Card for ${contributor.name}"></iframe>`;
    detailModalInfo.innerHTML = `<h3>${contributor.name}</h3><p>${contributor.bio}</p><a href="${contributor.github_profile_url}" target="_blank">View on GitHub <i class="ri-external-link-line"></i></a>`;
    detailModal.classList.add("visible");
  }
  function closeDetailModal() {
    detailModal.classList.remove("visible");
    detailModalIframeContainer.innerHTML = "";
    detailModalInfo.innerHTML = "";
  }

  // Unchanged Functions
  function loadCardIframe(card) {
    const iframe = card.querySelector("iframe");
    if (iframe && !iframe.src) {
      const contributor = JSON.parse(card.dataset.contributorData);
      iframe.src = contributor.project_netlify_link;
      iframe.onload = () => {
        iframe.classList.add("loaded");
        card.querySelector(".skeleton").style.display = "none";
      };
    }
  }
  function displayNextBatch() {
    if (isLoading || displayedCount >= displayedContributors.length) return;
    isLoading = true;
    loader.classList.add("visible");
    const batch = displayedContributors.slice(
      displayedCount,
      displayedCount + batchSize
    );
    setTimeout(() => {
      batch.forEach((contributor) => {
        const card = createProfileCard(contributor);
        container.appendChild(card);
        cardObserver.observe(card);
      });
      displayedCount += batch.length;
      isLoading = false;
      loader.classList.remove("visible");
      if (displayedCount >= displayedContributors.length) {
        sentinel.style.display = "none";
      }
    }, 300);
  }
  function filterContributors() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    displayedContributors = allContributors.filter((c) => {
      const tags = (c.tags || []).join(",").toLowerCase();
      return (
        c.name.toLowerCase().includes(searchTerm) ||
        c.bio.toLowerCase().includes(searchTerm) ||
        tags.includes(searchTerm)
      );
    });
    container.innerHTML = "";
    displayedCount = 0;
    noResultsMsg.style.display =
      displayedContributors.length === 0 ? "block" : "none";
    sentinel.style.display = "block";
    displayNextBatch();
  }
  async function initialize() {
    try {
      const response = await fetch("contributors.json");
      if (!response.ok) throw new Error("contributors.json not found.");
      let data = await response.json();
      if (Array.isArray(data)) {
        allContributors = data;
      } else {
        console.error("Data from contributors.json is not a valid array.");
        allContributors = [];
      }
      displayedContributors = [...allContributors];
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          displayNextBatch();
        }
      });
      intersectionObserver.observe(sentinel);
      displayNextBatch();
    } catch (error) {
      console.error("Failed to load or parse contributors.json:", error);
      container.innerHTML = `<p class="no-results-message" style="display: block;">Could not load contributor data.</p>`;
    }
  }
  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadCardIframe(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "200px" }
  );

  initialize();
});
