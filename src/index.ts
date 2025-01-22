const href = window.location.href

if (href.includes("google")) {
  const links = document.querySelectorAll("span > a[rel=\"noopener\"]")
  links.forEach(link => {
    const linkHref = link.getAttribute("href") || ""
    if (linkHref.includes("www.zhihu.com/question") || linkHref.includes("zhuanlan.zhihu.com/p")) {
      link.setAttribute("href", linkHref.replace("zhihu.com", "fxzhihu.com"))
      const cite = link.querySelector("div > div > div > div > cite")
      if (cite) {
        cite.textContent = cite.textContent?.replace("zhihu.com", "fxzhihu.com") || ""
      }
    }
  })
} else {
  if (href.includes("www.zhihu.com/question") || href.includes("zhuanlan.zhihu.com/p")) {
    window.location.replace(href.replace("zhihu.com", "fxzhihu.com"))
  }
}
