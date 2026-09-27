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
}
for name, box in crops.items():
    image = source.crop(box)
    image.save(assets / name, quality=92, optimize=True)
