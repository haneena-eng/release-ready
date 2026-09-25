/* ─────────────────────────────────────────────────────────────
   ReleaseReady — script.js
   Populates the three result sections from hardcoded sample data.
   No network calls, no dependencies.
───────────────────────────────────────────────────────────── */

/* ── Real data ────────────────────────────────────────────── */
const SAMPLE_REPORT = {
  meta: {
    repo: "simple-icons/simple-icons",
    base: "2026-08-01",
    head: "develop",
    commits: 23,
    generated: new Date().toISOString(),
  },
  changelog: {
    features: [
      { title: "Add Hypit icon",              pr_or_commit: "PR #15035 / d0b3c2d", date: "2026-09-24" },
      { title: "Add Godox icon",              pr_or_commit: "PR #15013 / f2365d3", date: "2026-09-17" },
      { title: "Add alphaXiv icon",           pr_or_commit: "PR #14996 / 5d5d4d1", date: "2026-09-09" },
      { title: "Add OOMOL icon",              pr_or_commit: "PR #14989 / 7f18aaa", date: "2026-09-04" },
      { title: "Add AtomGit icon",            pr_or_commit: "PR #14980 / 8a040dd", date: "2026-08-30" },
      { title: "Add Traxsource icon",         pr_or_commit: "PR #14954 / 949c322", date: "2026-08-26" },
      { title: "Add Tencent Hy icon",         pr_or_commit: "PR #14968 / 4a79bb5", date: "2026-08-25" },
      { title: "Add Simple Icons CDN icon",   pr_or_commit: "PR #14961 / 61b6b52", date: "2026-08-25" },
      { title: "Add Album of the Year icon",  pr_or_commit: "PR #14956 / 8ece2c1", date: "2026-08-23" },
      { title: "Add TRAE icon",               pr_or_commit: "PR #14918 / 9bb22b1", date: "2026-08-01" },
      { title: "Add ZecTrix icon",            pr_or_commit: "PR #14907 / c4682b5", date: "2026-08-01" },
      { title: "Add zx icon",                 pr_or_commit: "PR #14914 / ced7668", date: "2026-08-01" },
      { title: "Update PayloadCMS icon",      pr_or_commit: "PR #14971 / 1bd24ad", date: "2026-08-27" },
      { title: "Update Shortcut icon",        pr_or_commit: "PR #14933 / 463a118", date: "2026-08-26" },
      { title: "Update TanStack icon",        pr_or_commit: "PR #14912 / 45ba1e9", date: "2026-08-01" },
      { title: "Bump editorconfig-checker@7.0.0", pr_or_commit: "PR #14990 / d43c6a5", date: "2026-09-04" },
    ],
    fixes: [
      { title: "Fix JSON schema validation on Node.js 26 (ERR_INVALID_URL)", pr_or_commit: "PR #14906 / a487766", date: "2026-08-01" },
      { title: "Drop 'good first issue' badges (docs cleanup)",              pr_or_commit: "PR #15006 / b054428", date: "2026-09-12" },
    ],
    breaking_changes: [],
  },
  risks: [
    {
      category: "dependency_bump",
      description: "editorconfig-checker@7.0.0 — breaking rename + binary download model; broke CI before fix landed",
      pr_or_commit: "PR #14990 / d43c6a5 (2026-09-04)",
      severity: "high",
    },
    {
      category: "migration",
      description: "Node.js 26 ERR_INVALID_URL in jsonschema — patched in scripts/lint/jsonlint.js; unfixed consumers on Node 26 will fail at runtime",
      pr_or_commit: "PR #14906 / a487766 (2026-08-01)",
      severity: "high",
    },
    {
      category: "dependency_bump",
      description: "Five minor library releases 16.28–16.32 since 2026-08-01; consumers pinned to older minor must update",
      pr_or_commit: "PRs #14920, #14977, #14992, #15009, #15022",
      severity: "medium",
    },
    {
      category: "ci_cd_change",
      description: "Latent CI linting breakage from editorconfig-checker; branches not rebased may still fail lint",
      pr_or_commit: "PR #14990",
      severity: "medium",
    },
    {
      category: "migration",
      description: "Removed 'good first issue' badges; external badge URLs will render broken",
      pr_or_commit: "PR #15006 / b054428 (2026-09-12)",
      severity: "low",
    },
    {
      category: "new_env_var",
      description: "No new environment variables introduced in this period",
      pr_or_commit: "N/A",
      severity: "low",
    },
  ],
  checklist: [
    { step: 1,  task: "Node.js >= 18.18.0 + `npm ci --no-audit --no-fund`",                                             source: "CONTRIBUTING.md",                    required: true  },
    { step: 2,  task: "`npm run lint` — JSON order, SVG correctness, doc links, editorconfig",                          source: "CONTRIBUTING.md / verify.yml",       required: true  },
    { step: 3,  task: "`node --run build` — must complete before tests or publish",                                     source: "verify.yml / publish.yml",           required: true  },
    { step: 4,  task: "`npm test` — all tests must pass",                                                               source: "CONTRIBUTING.md / verify.yml",       required: true  },
    { step: 5,  task: "Optimize SVGs with `npx svgo`; no visual regression",                                            source: "CONTRIBUTING.md",                    required: true  },
    { step: 6,  task: "Verify SVG: role=img, viewBox, xmlns, <title>, single-path, minified",                          source: "CONTRIBUTING.md / PR template",      required: true  },
    { step: 7,  task: "Update `data/simple-icons.json` alphabetically; run `npm run ourlint`",                         source: "CONTRIBUTING.md",                    required: true  },
    { step: 8,  task: "Do NOT manually edit `slugs.md` or `sdk.d.ts` — auto-generated",                               source: "verify.yml",                         required: true  },
    { step: 9,  task: "Trigger `create-release.yml` version bump workflow",                                             source: "create-release.yml",                 required: true  },
    { step: 10, task: "Release PR must target `master` from `develop`; `merge-release.yml` auto-merges on approval",   source: "merge-release.yml",                  required: true  },
    { step: 11, task: "Verify `publish.yml` pre-publish sanity: lint → build → test",                                  source: "publish.yml",                        required: true  },
    { step: 12, task: "Run release pre-processing: reformat-markdown, update-sdk-ts-defs, minify-icons-data",          source: "publish.yml",                        required: true  },
    { step: 13, task: "`npm publish` via OIDC — auto-triggered on master push",                                        source: "publish.yml",                        required: true  },
    { step: 14, task: "Create git tag + GitHub Release via softprops/action-gh-release",                               source: "publish.yml",                        required: true  },
    { step: 15, task: "Discord release announcement (DISCORD_RELEASES_ROLE_ID + DISCORD_RELEASES_WEBHOOK_URL secrets)", source: "publish.yml",                       required: false },
    { step: 16, task: "Trigger `simple-icons-font` downstream release dispatch",                                        source: "publish.yml",                        required: true  },
    { step: 17, task: "Trigger `simple-icons-website-rs` update dispatch",                                             source: "publish.yml",                        required: true  },
    { step: 18, task: "Manually verify CDN on jsDelivr + unpkg for new version",                                       source: "README.md",                          required: false },
    { step: 19, task: "Review all AI-usage disclosures from contributors",                                              source: "CONTRIBUTING.md",                    required: true  },
    { step: 20, task: "Confirm no forbidden brands in release",                                                         source: "CONTRIBUTING.md",                    required: true  },
  ],
};

/* ── Helpers ──────────────────────────────────────────────── */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ── DOM refs ─────────────────────────────────────────────── */
const form         = document.getElementById("report-form");
const repoInput    = document.getElementById("repo-url");
const sinceInput   = document.getElementById("since-tag");
const loading      = document.getElementById("loading");
const results      = document.getElementById("results");
const generateBtn  = document.getElementById("generate-btn");

// Changelog
const breakingList = document.getElementById("breaking-list");
const featuresList = document.getElementById("features-list");
const fixesList    = document.getElementById("fixes-list");

// Risks
const risksList    = document.getElementById("risks-list");

// Checklist
const checklistEl  = document.getElementById("checklist-list");

/* ── Render helpers ───────────────────────────────────────── */
function renderCommitGroup(ulEl, commits) {
  ulEl.innerHTML = "";
  if (!commits || commits.length === 0) {
    ulEl.innerHTML = '<li class="commit-list__empty" style="color:var(--muted);font-size:0.82rem;padding:0.3rem 0.5rem;">None</li>';
    return;
  }
  commits.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="commit-hash">${escapeHtml(c.pr_or_commit)}</span>
      <span class="commit-msg">${escapeHtml(c.title)}</span>
      <span class="commit-author">${escapeHtml(c.date)}</span>
    `;
    ulEl.appendChild(li);
  });
}

function renderRisks(containerEl, risks) {
  containerEl.innerHTML = "";
  if (!risks || risks.length === 0) {
    containerEl.innerHTML = '<p style="color:var(--muted);font-size:0.88rem;">No risks detected.</p>';
    return;
  }
  risks.forEach(r => {
    const div = document.createElement("div");
    div.className = "risk-item";
    div.innerHTML = `
      <span class="risk-badge ${escapeHtml(r.severity)}">${escapeHtml(r.severity)}</span>
      <div class="risk-header">
        <span class="risk-type">${escapeHtml(r.category)}</span>
        <span class="risk-file">${escapeHtml(r.pr_or_commit)}</span>
      </div>
      <p class="risk-desc">${escapeHtml(r.description)}</p>
    `;
    containerEl.appendChild(div);
  });
}

function renderChecklist(ulEl, items) {
  ulEl.innerHTML = "";
  if (!items || items.length === 0) {
    ulEl.innerHTML = '<li style="color:var(--muted);font-size:0.88rem;padding:0.3rem;">No checklist items.</li>';
    return;
  }
  items.forEach((item, idx) => {
    const li = document.createElement("li");
    const cbId = `chk-${idx}`;
    const reqLabel = item.required
      ? '<span class="step-reason" style="color:var(--green,#1a7f37);">required</span>'
      : '<span class="step-reason" style="color:var(--muted);">optional</span>';
    li.innerHTML = `
      <input type="checkbox" id="${cbId}" />
      <label for="${cbId}" class="step-content">
        <span class="step-text">${escapeHtml(item.task)}</span>
        <span class="step-reason">${escapeHtml(item.source)} &nbsp;·&nbsp; </span>${reqLabel}
      </label>
    `;
    // Toggle done style on checkbox change
    const cb = li.querySelector("input[type='checkbox']");
    cb.addEventListener("change", () => {
      li.classList.toggle("done", cb.checked);
    });
    // Clicking the whole row toggles the checkbox
    li.addEventListener("click", (e) => {
      if (e.target === cb || e.target.tagName === "LABEL" || li.contains(e.target) && e.target.closest("label")) return;
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event("change"));
    });
    ulEl.appendChild(li);
  });
}

/* ── Main: populate report ────────────────────────────────── */
function populateReport(report) {
  renderCommitGroup(breakingList, report.changelog.breaking_changes);
  renderCommitGroup(featuresList, report.changelog.features);
  renderCommitGroup(fixesList,    report.changelog.fixes);
  renderRisks(risksList, report.risks);
  renderChecklist(checklistEl, report.checklist);
}

/* ── Form submit ──────────────────────────────────────────── */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const repoVal = repoInput.value.trim();
  if (!repoVal) {
    repoInput.focus();
    repoInput.style.borderColor = "var(--red)";
    setTimeout(() => { repoInput.style.borderColor = ""; }, 1800);
    return;
  }

  // Hide old results, show spinner
  results.classList.add("hidden");
  loading.classList.remove("hidden");
  generateBtn.disabled = true;
  generateBtn.style.opacity = "0.6";

  // Simulate async analysis (realistic UX)
  await sleep(1400);

  // Inject the repo/since values into sample meta for realism
  const report = JSON.parse(JSON.stringify(SAMPLE_REPORT));
  try {
    const url = new URL(repoVal);
    const parts = url.pathname.replace(/^\//, "").replace(/\/$/, "").split("/");
    if (parts.length >= 2) report.meta.repo = parts[0] + "/" + parts[1];
  } catch (_) {
    // Not a valid URL — use input as-is
    report.meta.repo = repoVal;
  }
  if (sinceInput.value.trim()) {
    report.meta.base = sinceInput.value.trim();
  }

  // Populate & reveal
  populateReport(report);
  loading.classList.add("hidden");
  results.classList.remove("hidden");
  generateBtn.disabled = false;
  generateBtn.style.opacity = "";

  // Smooth scroll to results
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});
