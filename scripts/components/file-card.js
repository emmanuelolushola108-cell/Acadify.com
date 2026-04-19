import { resources } from "../utils/storage.js";

export function fileUpload(resources) {
  if (!resources || resources.length === 0) return;

  const container = document.querySelector(".uploads-con");
  container.innerHTML = ""; // clear previous render

  let fileBox = "";

  resources.forEach((resource) => {
    const fileTitle =
      resource.title.length > 12 ? resource.title.slice(0, 12) : resource.title;

    const words = resource.title.split(" ");
    const first = words[0] ? words[0][0] : "";
    const second = words[1] ? words[1][0] : "";
    const fileInitial = (first + second).toUpperCase();

    const fileSize = resource.size.toFixed(1) + "MB";

    fileBox += `
      <div class="upload-card">
        <div class="delete-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="#0f172a"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>

        <div class="upload-header">
          <div class="upload-initial">
            <p>${fileInitial}</p>
          </div>

          <div class="upload-title">
            <p>${fileTitle}${resource.title.length > 12 ? "..." : ""}</p>

            <p class="file-details" style="font-style: italic">
              ${fileSize} <span> • ${resource.date}</span>
            </p>
          </div>
        </div>
      </div>
    `;
  });

  container.insertAdjacentHTML("afterbegin", fileBox);
}
