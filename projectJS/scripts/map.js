
let map;

  async function initMap() {
        
    const location = { lat: 40.66974595124408, lng: -73.9173228157657 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.querySelector(".map"), {
      zoom: 13,
      center: location,
      mapId: "b1bd6c3973ab764",
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: location,
      title: "Uluru",
    });
  }

  initMap();
    
  ((g) => {
    let h,a,k,p = "The Google Maps JavaScript API",
      c = "google",
      l = "importLibrary",
      q = "__ib__",
      m = document,
      b = window;
    b = b[c] || (b[c] = {});

    let d = b.maps || (b.maps = {}),
      r = new Set(),
      e = new URLSearchParams(),
      u = () => h || (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
          e.set("callback", c + ".maps." + q);
          a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
          d[q] = f;
          a.onerror = () => (h = n(Error(p + " could not load.")));
          a.nonce = m.querySelector("script[nonce]")?.nonce || "";
          m.head.append(a);
      }));

      d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
  })
  ({ key: "AIzaSyDSnB5rxEV_quBmJ7n8XYl1HRCFT1PvLz4", v: "beta" });