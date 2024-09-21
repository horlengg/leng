export function useTextAnimation() {
  const init = () => {
    const els = document.getElementsByClassName("text-typing");
    let styleTag = document.head.querySelector("style");
    if(!styleTag) {
      styleTag = document.createElement("style");
      document.head.appendChild(styleTag);
    }
        
    let t = "";
    const getRandomStr = () => {
      return "_" + Math.floor(Math.random() * 1000000);
    };

    Array.from(els).forEach((e) => {
      const randomID = getRandomStr();
      const animationIterationCount = e.getAttribute('data-typing-repeat') === null ? 'forwards' : 'infinite';
      const animationDelay = e.getAttribute('data-typing-delay') ?? '0'
      const animationDuration = e.getAttribute("data-typing-duration") ?? '3000'
      e.setAttribute("data-id", randomID);
      console.log(e.classList);
      
      t += `  
            .text-typing[data-id=${randomID}]:before {  
                animation : __typing ${animationDuration}ms steps(${e.textContent.length}) ${animationDelay}ms ${animationIterationCount};  
            }  
            `;
    });
    styleTag.textContent += t;

    styleTag.innerHTML = styleTag.textContent;
  };

  return {
    init,
  };
}
