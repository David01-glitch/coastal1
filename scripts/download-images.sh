#!/usr/bin/env bash
# Downloads all site imagery locally from Unsplash (downloaded, not hotlinked).
# Each entry: folder/filename|unsplash-photo-id|width
set -u
BASE="src/assets/images"
PARAMS="auto=format&fit=crop&q=80"

IMAGES=(
  # HERO
  "hero/oceanfront-hero|photo-1505228395891-9a51e7e86bf6|2000"
  "hero/sunset-walk|photo-1507525428034-b723cf961d3e|1600"
  "hero/coastal-balcony|photo-1502602898657-3e91760cbb34|1600"

  # BEACHES
  "beaches/charleston-shore|photo-1519046904884-53103b34b206|1200"
  "beaches/morning-waves|photo-1559827260-dc66d52bef19|1200"
  "beaches/palm-shoreline|photo-1473116763249-2faaef81ccda|1200"
  "beaches/quiet-cove|photo-1471922694854-ff1b63b20054|1200"
  "beaches/boardwalk|photo-1518837695005-2083093ee35b|1200"

  # WELLNESS
  "wellness/beach-yoga|photo-1518611012118-696072aa579a|1200"
  "wellness/seaside-stretch|photo-1544367567-0f2fcb009e0b|1200"
  "wellness/walking-couple|photo-1447752875215-b2761acb3c5d|1200"
  "wellness/wellness-tea|photo-1556881286-fc6915169721|1200"

  # HOMES
  "homes/beach-house|photo-1512917774080-9991f1c4c750|1200"
  "homes/coastal-interior|photo-1600585154340-be6161a56a0c|1200"
  "homes/airy-living|photo-1600596542815-ffad4c1539a9|1200"
  "homes/oceanfront-patio|photo-1600607687939-ce8a6c25118c|1200"
  "homes/white-kitchen|photo-1556909212-d5b604d0c90d|1200"

  # COMMUNITY
  "community/marina-club|photo-1493558103817-58b2924bce98|1200"
  "community/seaside-cafe|photo-1512453979798-5ea266f8880c|1200"
  "community/friends-dock|photo-1488646953014-85cb44e25828|1200"
  "community/garden-gathering|photo-1530541930197-ff16ac917b0e|1200"

  # BLOG (12)
  "blog/best-coastal-cities|photo-1506953823976-52e1fdc0149a|900"
  "blog/downsizing|photo-1560448204-e02f11c3d0e2|900"
  "blog/wellness-routine|photo-1540206395-68808572332f|900"
  "blog/coastal-home-design|photo-1560185007-cde436f6a4d0|900"
  "blog/active-living|photo-1571019613454-1cb2f99b2d8b|900"
  "blog/budgeting|photo-1554224155-6726b3ff858f|900"
  "blog/beach-towns|photo-1535498730771-e735b998cd64|900"
  "blog/packing-tips|photo-1488646953014-85cb44e25828|900"
  "blog/daily-routine|photo-1499209974431-9dddcece7f88|900"
  "blog/community-thrive|photo-1517457373958-b7bdd4587205|900"
  "blog/sunset-dining|photo-1414235077428-338989a2e8c0|900"
  "blog/coastal-garden|photo-1416879595882-3373a0480b5b|900"

  # TRAVEL
  "travel/yacht-marina|photo-1542902093-d55926049754|1200"
  "travel/seaside-town|photo-1533105079780-92b9be482077|1200"
  "travel/island-road|photo-1502920917128-1aa500764cbd|1200"
  "travel/harbor-view|photo-1502780402662-acc01917738e|1200"

  # LIFESTYLE
  "lifestyle/couple-relaxing|photo-1469474968028-56623f02e42e|1200"
  "lifestyle/reading-porch|photo-1455390582262-044cdead277a|1200"
  "lifestyle/coffee-ocean|photo-1498804103079-a6351b050096|1200"
  "lifestyle/sunset-lounge|photo-1437846972679-9e6e537be46e|1200"
)

ok=0; fail=0
for entry in "${IMAGES[@]}"; do
  IFS='|' read -r path id width <<< "$entry"
  out="$BASE/$path.jpg"
  url="https://images.unsplash.com/$id?$PARAMS&w=$width"
  curl -sL -o "$out" "$url"
  if file "$out" | grep -qi "JPEG"; then
    sz=$(wc -c < "$out")
    if [ "$sz" -gt 5000 ]; then ok=$((ok+1)); else echo "TOO SMALL: $path ($sz)"; fail=$((fail+1)); fi
  else
    echo "NOT JPEG: $path -> $url"; fail=$((fail+1))
  fi
done
echo "DONE. ok=$ok fail=$fail"
