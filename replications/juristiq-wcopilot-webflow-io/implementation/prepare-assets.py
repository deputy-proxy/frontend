from pathlib import Path
from PIL import Image

root = Path("replications/juristiq-wcopilot-webflow-io")
source = Image.open(root / "source" / "screenshot.png").convert("RGB")
assets = root / "implementation" / "src" / "assets"
assets.mkdir(parents=True, exist_ok=True)

crops = {
    "hero-source.jpg": (800, 90, 1920, 650),
    "business-source.jpg": (94, 1582, 490, 1855),
    "family-source.jpg": (490, 1582, 886, 1855),
    "litigation-source.jpg": (1240, 1582, 1620, 1855),
    "daniel-source.jpg": (715, 2380, 1225, 2850),
    "julian-source.jpg": (1240, 2380, 1745, 2850),
    "approach-source.jpg": (0, 3200, 1920, 4100),
    "testimonial-source.jpg": (1180, 4120, 1840, 4700),
    "insight-main-source.jpg": (180, 4800, 980, 5520),
    "insight-law-source.jpg": (1010, 4800, 1355, 5400),
    "insight-family-source.jpg": (1390, 4800, 1745, 5400),
    "cta-source.jpg": (0, 5900, 1920, 6650),
}
for name, box in crops.items():
    image = source.crop(box)
    image.save(assets / name, quality=92, optimize=True)
