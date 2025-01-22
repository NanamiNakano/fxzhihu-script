const href = window.location.href

if (href.includes("google")) {
  let links = document.querySelectorAll("a[rel=\"noopener\"]")
  if (links.length == 0) {
    links = document.querySelectorAll("a[role=\"presentation\"]")
  }
  links.forEach(link => {
    const linkHref = link.getAttribute("href") || ""
    if (linkHref.includes("www.zhihu.com/question") || linkHref.includes("zhuanlan.zhihu.com/p") || linkHref.includes("zhihu.com/pin")) {
      link.setAttribute("href", linkHref.replace("zhihu.com", "fxzhihu.com"))
      const cite = link.querySelector("div > div > div > div > cite") || link.querySelector("span[role=\"text\"]")
      if (cite) {
        cite.textContent = cite.textContent?.replace("zhihu.com", "fxzhihu.com") || ""
      }
    }
  })
} else {
  window.location.replace(href.replace("zhihu.com", "fxzhihu.com"))
}
