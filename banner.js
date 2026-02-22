export function showSecurityBanner({ status, safeScore, reasons }) {

    let color = "#16a34a";

    if (status === "HIGH RISK") {
        color = "#dc2626";
    } else if (status === "SUSPICIOUS") {
        color = "#f59e0b";
    }

    const banner = document.createElement("div");

    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.padding = "12px 18px";
    banner.style.background = color;
    banner.style.color = "white";
    banner.style.fontSize = "14px";
    banner.style.fontWeight = "600";
    banner.style.zIndex = "999999";
    banner.style.display = "flex";
    banner.style.justifyContent = "space-between";
    banner.style.alignItems = "center";
    banner.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";

    const text = document.createElement("div");
    text.innerText =
        `Security Status: ${status} | Safe Score: ${safeScore}/100` +
        (reasons && reasons.length ? ` | Flags: ${reasons.join(", ")}` : "");

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "✕";
    closeBtn.style.marginLeft = "20px";
    closeBtn.style.border = "none";
    closeBtn.style.background = "transparent";
    closeBtn.style.color = "white";
    closeBtn.style.fontSize = "18px";
    closeBtn.style.cursor = "pointer";

    closeBtn.onclick = () => banner.remove();

    banner.appendChild(text);
    banner.appendChild(closeBtn);

    document.body.appendChild(banner);
}