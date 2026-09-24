(() => {
  const storageKey = "chillsharp-state";

  const readState = () => {
    try {
      const value = JSON.parse(window.localStorage.getItem(storageKey));
      return value && typeof value === "object" ? value : {};
    } catch {
      return {};
    }
  };

  const saveState = (state) => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // Keep navigation working when storage is unavailable.
    }
  };

  document.querySelectorAll("[data-select-case]").forEach((link) => {
    link.addEventListener("click", () => {
      saveState({ case: link.dataset.selectCase });
    });
  });

  document.querySelectorAll("[data-select-approach]").forEach((link) => {
    link.addEventListener("click", () => {
      const approach = link.dataset.selectApproach;
      const previousState = readState();
      const state = { approach };

      if (previousState.case) {
        state.case = previousState.case;
      }

      saveState(state);
    });
  });

  const caseBriefs = {
    edu: "“Create a research workspace where researchers can securely organize study data, let approved colleagues and AI assistants use only the right datasets, and keep preliminary or sensitive records protected. Build a study dashboard that uses real persisted data. Do not use mock data, browser-only storage, or a visual-only prototype. Verify that an approved collaborator can use the dashboard without seeing restricted data.”",
    org: "“Create a complete blog where authors can securely sign in, create and manage posts and categories, and publish content. Provide a separate public site where visitors can browse published posts. The admin area and public site must share real persisted data. Do not use mock data, browser-only storage, or a visual-only prototype. Verify that a post created by an author appears on the public blog.”",
    com: "“Create an internal product workspace where teams can securely manage the company data that powers their work, share approved slices with applications and AI tools, and keep private records controlled. Use real persisted data. Do not use mock data, browser-only storage, or a visual-only prototype. Verify that an application can use its approved data without gaining access to the wider dataset.”",
  };

  document.querySelectorAll("[data-case-brief]").forEach((brief) => {
    const selectedCase = readState().case;
    brief.textContent = caseBriefs[selectedCase] || caseBriefs.org;
  });
})();
