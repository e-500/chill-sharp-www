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
    edu: "“Create a research workspace where researchers can organize study data and approved colleagues and AI assistants can use only the datasets they are allowed to access. Build a study dashboard backed by real persisted data, while keeping preliminary and sensitive records protected. Do not use mock data, browser-only storage, or a visual-only prototype. Verify that an approved collaborator can use the dashboard but cannot retrieve restricted data, including through direct data requests.”",
    app: "“Create an app or web app with a complete API service backend and real persisted data. Use chillsharp's client libraries to connect the client to the backend. Build a working first version quickly, without mock data, browser-only storage, or a visual-only prototype. Verify that the app can use its approved data through the API.”",
    org: "“Create a blog where authors can securely sign in, manage posts and categories, and publish content. Visitors can browse published posts on a separate public site. Both experiences must use the same real persisted data. Do not use mock data, browser-only storage, or a visual-only prototype. Verify that a post published by an author appears on the public blog and an unpublished draft does not.”",
    com: "“Create an internal product workspace where teams can manage company data, share approved subsets with applications and AI tools, and keep private records protected. Provide a working interface backed by real persisted data. Do not use mock data, browser-only storage, or a visual-only prototype. Verify that an application can use its approved data but cannot retrieve records outside its access, even when it requests them directly.”",
  };

  document.querySelectorAll("[data-case-brief]").forEach((brief) => {
    const selectedCase = readState().case;
    brief.textContent = caseBriefs[selectedCase] || caseBriefs.org;
  });
})();
