// double-click selects entire code block content
document$.subscribe(() => fix_code_selection());

function fix_code_selection() {
  document.querySelectorAll("code").forEach((element) => {
    element.addEventListener("dblclick", function () {
      const range = document.createRange();
      range.selectNodeContents(this);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    });
  });
}

// live server status from public gist
// github's CDN caches these raw URLs ~5 min, so visitors don't hammer anything
const STATUS_GIST_URL =
  "https://gist.githubusercontent.com/CampCrystalLake/daa345b5c7d039dca785e57c6bba7a4d/raw/status.json";

document$.subscribe(() => update_status_widgets());

async function update_status_widgets() {
  const targets = document.querySelectorAll("[data-ccl-status]");
  if (!targets.length) return;

  try {
    const res = await fetch(STATUS_GIST_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const stale =
      Date.now() - new Date(data.updated_at).getTime() > 5 * 60 * 1000;
    const label = !data.online || stale ? "Offline" : `${data.players} online`;
    targets.forEach((el) => (el.textContent = label));
  } catch {
    document
      .querySelectorAll("[data-ccl-status]")
      .forEach((el) => (el.textContent = "Status unavailable"));
  }
}
