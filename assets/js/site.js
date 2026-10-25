// Small helpers for the Suśruta Project 2 website. No libraries needed.

// Drop-down menus: only one open at a time; clicking elsewhere or Esc closes them.
(function () {
  var menus = document.querySelectorAll(".nav-links details");
  function closeAll(except) {
    menus.forEach(function (d) { if (d !== except) d.removeAttribute("open"); });
  }
  menus.forEach(function (d) {
    d.addEventListener("toggle", function () { if (d.open) closeAll(d); });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-links details")) closeAll(null);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });
})();

// Bibliography page: filter entries as you type. Ignores diacritics,
// so "susruta" finds "Suśruta".
(function () {
  var box = document.getElementById("bib-filter");
  var list = document.getElementById("bib-list");
  if (!box || !list) return;
  function plain(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  var items = Array.prototype.map.call(list.querySelectorAll("li"), function (li) {
    var ref = li.querySelector(".bib-ref");
    return { li: li, text: plain(ref ? ref.textContent : li.textContent) };
  });
  var headings = list.querySelectorAll("h2, h3");
  box.addEventListener("input", function () {
    var words = plain(box.value).split(/\s+/).filter(Boolean);
    items.forEach(function (it) {
      var ok = words.every(function (w) { return it.text.indexOf(w) !== -1; });
      it.li.hidden = !ok;
    });
    // Hide year headings whose lists are now empty
    headings.forEach(function (h) {
      var next = h.nextElementSibling;
      if (next && next.tagName === "OL") {
        var any = Array.prototype.some.call(next.children, function (li) { return !li.hidden; });
        h.hidden = !any; next.hidden = !any;
      }
    });
  });
})();
