const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("click", () => {
   
    const title = project.querySelector("h3").innerHTML;
    const description = project.querySelector("p").innerHTML;
    
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <h2 class="modal-title">${title}</h2>
        <p class="modal-description">${description}</p>
        <button class="modal-close-button">Close</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeButton = modal.querySelector(".modal-close-button");
    closeButton.addEventListener("click", () => {
      
      modal.remove();
    });
  });
});
